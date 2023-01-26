import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import { Entry, IEntry } from "../../../../models";

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "id no valido" });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);

    default:
      return res.status(400).json({
        message: `no se soporta el metodo ${req.method} se esperaba el metodo PUT `,
      });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  

  try {
    await db.connect();
        const entryDb = await Entry.findById(id);
    await db.disconnect();
    
    if (!entryDb) {
      return res
        .status(400)
        .json({ message: "no existe la entrada con el id " + id });
    }
    

    return res.status(200).json(entryDb);

  } catch (error: any) {
    
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ message: error.errors?.status.message });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    db.disconnect();
    return res
      .status(400)
      .json({ message: "no existe la entrada con el id " + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    // const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })

    entryToUpdate.description = description;
    entryToUpdate.status = status;
    await entryToUpdate.save();

    db.disconnect();

    return res.status(200).json(entryToUpdate!);
  } catch (error: any) {
    console.log(error);
    db.disconnect();
    return res.status(400).json({ message: error.errors.status.message });
  }
};

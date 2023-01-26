import mongoose, { Model, mongo, Schema } from "mongoose";
import { emit } from "process";
import { Entry } from "../interfaces";


export interface IEntry extends Entry {

}

const entySchema = new Schema({
    description: { type: String, required: true},
    createdAt: { type: Number },
    status:{
         type: String, 
        emun:{ 
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado valido'
        },
        default: 'pending'
        }
   
})

const entryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entySchema)

export default entryModel
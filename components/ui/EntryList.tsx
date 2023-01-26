import { Paper, List } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EntryStatus } from "../../interfaces";
import { getEntriesThunk } from "../../slices/entries/entriesSlice";
import { RootState } from "../../store";
import { EntryCard } from "./EntryCard";

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
    
  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entries.value);
  const isLoading = useSelector((state: RootState) => state.isLoading.value);
 
 
  useEffect(() => {
  
        dispatch(getEntriesThunk());

  }, []);





  const entriesByStatus = useMemo(() => entries?.filter((entry) => entry.status === status), [entries])
  
  
  entries?.filter((entry) => entry.status === status);
  
  return (
    
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: 1 }}>
        {entriesByStatus?.map((entry) => (
          
            <EntryCard key={entry._id} entry={entry}/>
         
        ))}
        </List>
      </Paper>
    </div>
  );
};

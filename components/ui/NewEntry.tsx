import { AddCircleOutline, SaveOutlined } from "@mui/icons-material"
import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddEntryThunk } from "../../slices/entries/entriesSlice"

export const NewEntry = () => {

    const [ isAdding, setIsAdding ] = useState(false)
    const [ description, setDescription ] = useState('')
    const [ touched, setTouched ] = useState(false)


    const dispatch = useDispatch()


    

    

  return (
   <>

<Box sx={{ marginBotton:2, paddingX: 1 }}>

   {

    isAdding ? (
        <>
        <TextField
        fullWidth
        sx={{marginTop: 2, marginBottom: 1}}
        placeholder='New entry'
        autoFocus
        multiline
        label='New entry'
        helperText={description.length <= 0 && touched && "type a description"}
        error={ description.length <= 0 && touched}
        value={description}
        onBlur={()=>setTouched(true)}
        onChange={(e)=>{
            setDescription(e.target.value)
        }}  
        />

    <Box display="flex" justifyContent='space-between'>
    <Button variant="text" onClick={()=>setIsAdding(false)} >
        Cancelar
    </Button> 
         <Button disabled={description.length <= 0 ? true : false} onClick={()=>{
            dispatch(AddEntryThunk(description))
            setDescription('')
            setTouched(false)



         }} variant="outlined" color="secondary" endIcon={<SaveOutlined />}>
        Guardar
    </Button> 
    </Box>
  
        </>
    )

    : (


        <Button startIcon={<AddCircleOutline/>} 
        fullWidth
        variant='outlined'
        onClick={()=>setIsAdding(true)}

    >Add task</Button>


  

    )


   }

      </Box>

   </>
  )
}

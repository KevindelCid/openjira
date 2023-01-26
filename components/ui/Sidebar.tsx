import { Drawer, List, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isSidebarOpen } from '../../slices/ui/sidebarSlice'
import { RootState } from '../../store'

export const Sidebar = () => {

    const sidebar = useSelector((state: RootState) => state.sidebar.value)
const dispatch = useDispatch()



const menuItems = []





return (
<Drawer 
   anchor='left'
   open={sidebar}
   onClose={()=> {}}
   >
    <Box sx={{ padding: '10px 10px' }}>
        <Typography variant='h4'  
            onClick={()=>{
                dispatch(isSidebarOpen()) 
            }} 
        >X</Typography>
    </Box>

    <List>

    </List>

</Drawer>
  )
}

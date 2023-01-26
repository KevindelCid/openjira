import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { isSidebarOpen } from '../../slices/ui/sidebarSlice';

export const Navbar = () => {

  const sidebar = useSelector((state: RootState) => state.sidebar.value)

  const dispatch = useDispatch()


  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={()=>{
                    dispatch(isSidebarOpen())
                }}
            >
                <WidgetsIcon/>
            </IconButton>

            <Typography variant='h6'>OpenJira</Typography>

        </Toolbar>

    </AppBar>
  )
}

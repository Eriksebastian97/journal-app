import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Navbar } from '../components'
import { SideBar } from '../components/SideBar'


//seria el menu lateral
const drawerWith = 280

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:"flex"}}>
        {/**navbar  drawerWith*/}
        <Navbar drawerWith={drawerWith} />

        <SideBar drawerWith={drawerWith} />


      <Box
      component="main"
      sx={{flexGrow:1,p:3}}
      >
       <Toolbar />
       {children}
      </Box>
    </Box>
  )
}

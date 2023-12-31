

import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views'
import { IconButton } from '@mui/material'
import { AdUnitsOutlined, AddOutlined } from '@mui/icons-material'



export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography variant='h1'>Journal Page</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

     
     <IconButton
     size='large'
     sx={{
      color:"white",
      backgroundColor:"error.main",
      ":hover":{backgroundColor:"error.main",opacity:0.9},
      position:"fixed",
      right:50,
      bottom:50
     }}
     >
      <AddOutlined sx={{fontSize:30}}/>
     </IconButton>
    </JournalLayout>
  )
}

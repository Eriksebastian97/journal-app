import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalPage } from '../journal/Pages/JournalPage'

export const AppRouter = () => {
  return (
    <Routes>
        {/**Login Y registro */}
        <Route path='/auth/*' element={<AuthRoutes />} />

        
    {/**Journal App . cualquier otra ruta que no sea por auth va a mostrar JournalRoutes*/}
      <Route path='/*' element={<JournalPage />} />
    </Routes>
  )
}

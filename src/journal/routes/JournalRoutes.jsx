import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JournalPage } from '../Pages/JournalPage'


//en las rutas importamos las pages . En este caso serian las vistas
export const JournalRoutes = () => {
  return (
    <Routes >

        <Route path='/' element={<JournalPage />} />
         
         {/**si entro a la ruta y no estoy adentro del "/" entonces cualquiera ruta entrara a / " */}
        <Route path='/' element={<JournalPage />} />
    </Routes>
  )
}

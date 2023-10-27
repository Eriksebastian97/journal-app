
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../Pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
         

         {/**cualquier ruta que no sea login o register va a a navegar hacia auth/login */}
         <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

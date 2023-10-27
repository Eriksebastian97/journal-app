//los thunks son acciones donde puedo hacer dispatch de estas acciones recuerda que estas acciones son tareas asincronicas

import { singWitchGoogle } from "../../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = (email,Password) =>{
    return async (dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = ()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())

         const result = await singWitchGoogle()
         //ya auntentico el usuario
         
         //si result es false
         if(!result.ok) return dispatch(logout(result.errorMessage))
    
         //si sale bien todo

         dispatch(login(result))

        }

}
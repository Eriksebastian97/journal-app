import { createSlice } from "@reduxjs/toolkit";





export const authSlice = createSlice({
   name: 'auth',
   initialState:{
     status:"not checking", //not-autenticado,
     uid : null,
     email:null,
     displayName:null,
     photoURL:null,
     errorMessage:null
   },
   reducers: {

     login:(state,payload)=>{
     //estaria esperando de la accion el payload 
     //el payload es el resultado
      state.status="Auntenticadoo", //not-autenticado,
      state.uid = payload.uid,
      state.email= payload.email,
      state.displayName= payload.displayName,
      state.photoURL= payload.photoURL,
      state.errorMessage= null

     },
     logout:(state,payload)=>{

      state.status="not checking", //not-autenticado,
      state.uid = null,
      state.email= null,
      state.displayName= null,
      state.photoURL= null,
      state.errorMessage= payload.errorMessage

     },
     checkingCredentials:(state)=>{
      state.status = "checking"
     }
   },
})

export const { login , logout , checkingCredentials } = authSlice.actions
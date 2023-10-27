
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {},formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation,setForValidation] = useState({})

    //cada ves que cambie el email , password etc , se va a mandar a llamar esta funcion
   useEffect(()=>{
    
    createValidators()
   },[formState])

   const ifFormValid= useMemo(()=>{

    //revisamos las propiedas si tienen el valor de null
    //usamos ciclos

    for(const formValue of Object.keys(formValidation)){
        if(formValidation[formValue] !== null) return false
    }

     return true
   },[formValidation])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=>{
        //va a crear un nuevo estado para veficar si los usuarios son validos o no .

        const formCheckedValues = {}

        for(const formField of Object.keys(formValidations)){
            //destructuramos la info de validacion y el errorMessage
            //obtener la funcion y el mensaje de error
            const [fn , errorMessage] = formValidations[formField]

            //creamos una propiedad computada
            formCheckedValues[`${formField}Valid`] = fn(formState[formField] ) ? null : errorMessage
        }

        setForValidation(formCheckedValues)
        console.log(formCheckedValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        ifFormValid
    }
}
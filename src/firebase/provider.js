//va a contener todos los provedores de informacion .

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const singWitchGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    //el  GoogleAuthProvider va a proveer la informacion que de la autenticacion que viene el result
    const user = result.user;
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //User Info
      displayName,
      email,
      photoURL,
      uid,
    };

    //es mas por el lado de google
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    // console.log({credentials})
  } catch (error) {
    console.log(error);

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
 

    return {
      ok: false,
      errorMessage
    };
  }
};

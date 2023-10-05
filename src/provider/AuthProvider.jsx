import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const authContext = createContext(null);

const AuthProvider = ({children}) => {

    //! SignIn With Google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    //! creating User with Email and Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //! signInWithEmailAndpassword 
    const loginInWithEmailAndPassword = (email, password) => {

        return  signInWithEmailAndPassword(auth, email, password)
    }



    const authentication = {
        signInWithGoogle,
        createUser,
        loginInWithEmailAndPassword,
    }
 


    return (
        <authContext.Provider value={authentication}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const authContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);



    //! SignIn With Google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //! creating User with Email and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //! signInWithEmailAndpassword 
    const loginInWithEmailAndPassword = (email, password) => {

        setLoading(true);
        return  signInWithEmailAndPassword(auth, email, password)
    }

    //! log out user 
    const logOut = () => {
        return signOut(auth);
    }

    //! On state Change 
    useEffect(()=> {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

          });
    }, [])



    const authentication = {
        signInWithGoogle,
        createUser,
        loginInWithEmailAndPassword,
        user,
        logOut,
        loading,
    }
 


    return (
        <authContext.Provider value={authentication}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
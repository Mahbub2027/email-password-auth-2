import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {PropTypes} from 'prop-types';
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword (auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current value of current user", currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])


   const authInfo = {user, createUser, signinUser, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
children: PropTypes.node
}
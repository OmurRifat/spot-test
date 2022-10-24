import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const redirect = (googleProvider) => {
        setLoading(true);
        return signInWithRedirect(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])
    // console.log(user?.photoURL)
    console.log(user)
    const authInfo = { user, setUser, loading, setLoading, googleLogIn, logOut, redirect }
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
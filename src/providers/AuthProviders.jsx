import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categoryName, setcategoryName]  = useState('');


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        categoryName,
        setcategoryName,
        createUser,
        signIn,
        googleLogIn,
        logOut,
        githubLogIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
    const unSubscribe=    onAuthStateChanged(auth,currentuser=>{
            console.log('user',currentuser);
            setUser(currentuser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import React, { createContext, useState } from 'react'; 
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../components/firebase/firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext();

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
   const createUserEmailAndPassword=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
   }
    const authInfo={user,createUserEmailAndPassword};
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
import { createContext, useContext, useEffect, useState } from "react";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../firebase"
import axios from 'axios'



export const authContext = createContext()

export const useAuth = () => {
  const context =  useContext(authContext)
 return context
}


async function getDataUser(emailUser){
    let response =  await axios.get("https://somos-f5-default-rtdb.europe-west1.firebasedatabase.app/empleados.json")
    let user = await response.data.find(e => {
        if(e){
             if(emailUser === e.email){
            return  e
            }
        }      
    })
    return user
    
}
 
export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true); 
    const [userData, setuserData] = useState (null); 
    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

 const logout = () =>  signOut(auth)  

useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, currentUser => {
    if(currentUser){
        getDataUser(currentUser.email).then(data =>{
        setuserData(data) 
         setUser(currentUser); 
        setLoading(false)   
    })
        } 
});
return () => unsubscribe();

    

},[])


    return(
        <authContext.Provider value={{ login, user,logout, loading, userData}}>{children}</authContext.Provider>
    )
}
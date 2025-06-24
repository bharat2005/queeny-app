import { View, Text, Alert } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {auth, db} from '../services/firebase'
import { router } from 'expo-router'
import { doc, setDoc, Timestamp } from 'firebase/firestore'

const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (u)=> {
        setUser(u)
        u ? router.replace('/(main)/home') : router.replace('/(auth)/prestart')
    })

    return ()=> unsub()
},[])


const register = async(values) =>{
  try{

    const res = await createUserWithEmailAndPassword(auth, values?.email, values?.password)

    await setDoc(doc(db, 'users', res?.user?.uid), {
      uid:res?.user?.uid,
      firstName: values.firstName, 
      lastName: values.lastName,
      gender:values.gender,
      dob:Timestamp.fromDate(values.dob),
      email: values.email
    })

  } catch(err){
    console.log("Error form regiater fucntion", err.message)
    Alert.alert("Error", err.message)
  }
}


const login = async(email, password) =>{
  try{

    const res = await signInWithEmailAndPassword(auth, email, password)

  } catch(err){
    console.log("Error form login fucntion", err.message)
    Alert.alert("Error", err.message)
  }
}


const logout = async() =>{
  try{

    await signOut(auth)

  } catch(err){
    console.log("Error form logout fucntion", err.message)
    Alert.alert("Error", err.message)
  }
}





  return (
<AuthContext.Provider value={{user, register,login,  logout}}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)
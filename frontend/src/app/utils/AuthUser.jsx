"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { renewLoginSession } from '../server/signup'
import { logoutSuccess, signInSuccess } from '../redux/user/userSlice'

const AuthUser = ({loginWall = false, children}) => {

  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  // const [loader, setLoader] = useState(false)
  // //
  // const cookie = document.cookie
  
  // if(!cookie){
  //   return null;
  // }

  // const refreshToken = cookie.split(';').find(c => c.trim().startsWith('refreshToken'))?.replace('refreshToken=', '')
  // const accessToken = cookie.split(';').find(c => c.trim().startsWith('accessToken'))?.replace('accessToken=', '')
  
  
  // useEffect(() => {
  //   async function renewSession(){
  //     if(refreshToken){
  //       if(!accessToken){
  //         try{
  //           const response = await renewLoginSession();
  //           dispatch(signInSuccess(response));
  //           console.log("renewed")
  //           setLoader(true)
  //         } catch(err){
  //           dispatch(logoutSuccess())
  //           console.error("Error while renew the login session")
  //         }
  //       }else{
  //         console.log("run hua")
  //         setLoader(true)
  //       }
  //     }else{
  //       console.log("Logout ho gya")
  //       dispatch(logoutSuccess())
  //     }
  //   }
  
  //   renewSession();
  // }, [])
  // //


  // if(loader){
  //   console.log("Loader true and children returned")
  //   return children;
  // }

  if(user){
    return children
  }


  if(loginWall){
    const router = useRouter()
    router.replace("/signup")
  }
  return null
}

export default AuthUser

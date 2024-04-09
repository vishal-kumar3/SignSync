"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const AuthLoggedInUser = ({userId, sameUser=false, children}) => {
  
  const loggedInUser = useSelector(state => state.user?.currentUser)

  if(userId === loggedInUser?._id) {
    return (
      children
    )
  }
  return null
}

export default AuthLoggedInUser

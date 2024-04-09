import React from 'react'
import { useSelector } from 'react-redux'

const AuthSameUser = ({userId, children}) => {
  
  const loggedInUser = useSelector(state => state.user?.currentUser)
  
  if(userId === loggedInUser?._id){
    return null
  }

  return (
    children      
  )
}

export default AuthSameUser

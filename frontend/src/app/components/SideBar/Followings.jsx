import { userById } from '@/app/server/signup'
import React, { useEffect, useState } from 'react'
import LinkButton from './LinkButton'
import { useSelector } from 'react-redux'

const Followings = ({userId}) => {

  const [followingUser, setFollowingUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userById(userId)
        setFollowingUser(data)
      } catch (error) {
        console.error("Error fetching followingUser:", error)
      }
    }

    fetchData()
  }, [userId])

  return (
    <LinkButton src={followingUser?.avatarImage} type={followingUser?.username} link={`/user/${followingUser?._id}`} />
  )
}

export default Followings

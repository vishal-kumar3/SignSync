import React from 'react'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import { faIdBadge, faPaperPlane, faRightFromBracket, faSquarePlus, faTowerBroadcast, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import LinkButton from './LinkButton.jsx'

const Sidebar = () => {
  const user = null;
  return (
  <div className='md:w-[20%]'>
    <div className='hidden sticky top-12 md:flex flex-col gap-1 text-sm pl-5 w-[15%]'>
      <LinkButton type={'Profile'} icon={faIdBadge} link={`/user/${user?._id}`} />
      <LinkButton type={'Feeds'} icon={faBlogger} link='/home' />
      <LinkButton type={'Create Blog'} icon={faSquarePlus} link={`/blog/create`} />
      <LinkButton type={'Friends'} icon={faUserGroup} />
      <LinkButton type={'Messages'} icon={faPaperPlane} />
      <LinkButton type='Logout' icon={faRightFromBracket} />
    </div>
  </div>
  )
}

export default Sidebar

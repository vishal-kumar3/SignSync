import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const LinkButton = ({src, icon, type, link, children}) => {
  return (
		<Link key={src} className='md:w-[1700%] lg:w-[1000%] transition-all text-sm ease-in hover:bg-[#f5f5f5] flex items-center gap-1 px-2 py-[5px] rounded-md  hover:shadow-lg' 
			href={link || "/"}>
		  <div className='w-8 flex justify-center'>
		  	{icon && <FontAwesomeIcon className='w-5' icon={icon} />}
		  	{src && <Image width={100} height={100} className='size-[30px] rounded-md object-cover object-center' src={src} alt="dp" />}
		  </div>
		  <p className={type ? "w-[100%]" : ""}>{type || children}</p>
	  </Link>
  )
}

export default LinkButton

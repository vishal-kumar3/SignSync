import React from 'react'

const Blog = () => {

  const blogs = ['1', '2']

  return (
  <div className='flex flex-col gap-3 w-[50%] h-full'>
    <div className='flex w-full justify-around items-center'>
      <div>IMG</div>
      <input type="text" className='w-[80%] outline-none rounded-md p-2 border' placeholder='Ask Your Question...!' name="" id="" />
      <div><button className='bg-blue-500 text-white p-2 rounded-xl'>Ask</button></div>
    </div>
    <div className='flex flex-col gap-5'>
      blogs are here
      {blogs.map((blog) => {
       return  <div className='px-16'>
        <div>
          {/* Profile section */}
          <div className='flex justify-between'>
            <div className='flex gap-8 items-center'>
              IMG
              <div className='text-xs'>
                <p>Name</p>
                <p>Days</p>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <p>bookmark</p>
              <p>3 dots</p>
            </div>
          </div>
          {/*  */}
          <div>

          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
       </div>
      })}
    </div>
  </div>
  )
}

export default Blog

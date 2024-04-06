import React from 'react'

const Rightsidebar = () => {
  return (
    <div className='md:w-[25%] flex flex-col gap-4 mr-6 px-1 py-2'>
      <div className='flex flex-col gap-2 border-2 rounded-xl p-2 transition-all text-sm ease-in hover:border-[#f5f5f5] hover:bg-[#f5f5f5] hover:shadow-lg hover:cursor-pointer'>
        Unlock Leaderboards!
        <div className='flex gap-5'>
          <div>
            IMG
          </div>
          <div>
          Complete 10 more lessons to start competing
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 border-2 rounded-xl p-2 transition-all text-sm ease-in hover:border-[#f5f5f5] hover:bg-[#f5f5f5] hover:shadow-lg hover:cursor-pointer'>
        Your Progress!
        <div className='flex gap-5'>
          <div>
            IMG
          </div>
          <div>
          completed chapters/ total chapters
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightsidebar

import React from 'react'

const ModeStats = () => {
  return (
    <div className='flex justify-between items-center'>

      <section className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <img className='w-[30px] h-[30px]' src="./assets/home/gem.png" alt="" />
          <span className=' text-pink-600'>40</span>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-[30px] h-[30px]' src="./assets/home/heist.png" alt="" />
          <span className=' text-pink-600'>20</span>
        </div>
      </section>

      <span className='h-[66px] border border-gray-200'></span>
      
      <section className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <img className='w-[30px] h-[30px]' src="./assets/home/gem.png" alt="" />
          <span className=' text-pink-600'>40</span>
        </div>
        <div className='flex items-center gap-2'>
          <img className='w-[30px] h-[30px]' src="./assets/home/heist.png" alt="" />
          <span className=' text-pink-600'>20</span>
        </div>
      </section>

      <span className='h-[66px] border border-gray-200'></span>

      <section className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
        <img className='w-[32px] h-[30px]' src="./assets/home/mode1.png" alt="" />
          <span className=' text-blue-600'>40</span>
        </div>
        <div className='flex items-center gap-2'>
        <img className='w-[32px] h-[30px]' src="./assets/home/mode1.png" alt="" />
          <span className=' text-blue-600'>20</span>
        </div>
      </section>
     

    </div>
  )
}

export default ModeStats

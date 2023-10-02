import React from 'react'

const StarsPowers = () => {
  return (
    <div className=''>
      <h2 className='text-gray-700'>Stars powers</h2>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-1'>
          <img className='w-[50px]' src="./assets/home/power_poco.png" alt="" />
          <span className='text-yellow-500 text-3xl font-[Roboto] '>90%</span>
        </div>

        <div className='flex items-center gap-2 bg-gray-100 rounded-lg p-1'>
          <img className='w-[50px]' src="./assets/home/power_poco2.png" alt="" />
          <span className='text-yellow-500 text-3xl font-[Roboto]'>84%</span>
        </div>
      </div>
    </div>
  )
}

export default StarsPowers

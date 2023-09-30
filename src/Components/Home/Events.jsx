import React from 'react'

const Events = () => {
  return (
    <section className='w-[90%] flex flex-wrap gap-6 justify-around items-center mt-4'>
        <div className='w-[180px] h-[120px]  '>
          <img className='w-full h-full rounded-lg shadow-[0px_0px_15px_0px_#4a5568]' src="./assets/home/brawl_halloween.jpg" alt="halloween" />
        </div>
        <div className='w-[180px] h-[120px] '>
          <img className='w-full h-full rounded-lg shadow-[0px_0px_15px_0px_#4a5568]' src="./assets/home/brawl-stars-championship-2023.jpg" alt="championship" />
        </div>
        <div className='w-[180px] h-[120px] '>
          <img className='w-full h-full rounded-lg shadow-[0px_0px_15px_0px_#4a5568]' src="./assets/home/brawl_pass.jpg" alt="brawl pass" />
        </div>

      </section>
  )
}

export default Events

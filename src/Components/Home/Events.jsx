import React from 'react'

const Events = () => {
  return (
    <section className='w-[90%] flex flex-wrap gap-6 justify-around items-center'>
        <div className='w-[180px] h-[120px]'>
          <img className='w-full h-full rounded-lg' src="./assets/home/brawl_halloween.jpg" alt="halloween" />
        </div>
        <div className='w-[180px] h-[120px]'>
          <img className='w-full h-full rounded-lg' src="./assets/home/brawl-stars-championship-2023.jpg" alt="championship" />
        </div>
        <div className='w-[180px] h-[120px]'>
          <img className='w-full h-full rounded-lg' src="./assets/home/brawl_pass.jpg" alt="brawl pass" />
        </div>

      </section>
  )
}

export default Events

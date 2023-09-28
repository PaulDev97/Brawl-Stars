import React from 'react'

const Home = () => {
  return (
    <main className=' h-screen flex flex-col  items-center'>
      <h1 className=''>Paginas Principal</h1>

      <section className='w-[80%] flex flex-wrap gap-2 justify-center items-center'>
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
    </main>
  )
}

export default Home

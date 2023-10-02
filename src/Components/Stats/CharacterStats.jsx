import React from 'react'
import StarsPowers from './StarsPowers'
import ModeStats from './ModeStats'


const CharacterStats = () => {





  return (
    <section className='h-auto flex flex-wrap justify-center gap-20 mt-40 font-[Roboto]  '>


      <div className='w-[250px] h-[300px]'>
        <img className='w-full h-full drop-shadow-2xl ' src="./assets/home/poco.png" alt="" />
      </div>




      <div className=' flex flex-col p-4 shadow-[0px_0px_15px_3px_#a0aec0] bg-[#fafafa] rounded-3xl md:w-[300px] justify-around'>
      
        

        <div className='flex flex-col gap-2'>
          <h2 className='text-gray-700 '>Mode wins:</h2>
          <ModeStats />
        </div>

        <StarsPowers />

      </div>



    </section>
  )
}

export default CharacterStats

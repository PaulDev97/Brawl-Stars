import React from 'react'
import ModeStats from '../Stats/ModeStats'

const About = ({ name, info, icon, borColor }) => {

  console.log(icon)


  return (
    <div className={`${borColor} border p-4 shadow-[0px_0px_15px_3px_#a0aec0] bg-[#fafafa] rounded-3xl flex flex-col  gap-6 font-[Roboto]`}>
      <div className='flex flex-col gap-1'>
        <p className=' font-bungee text-2xl'>{name}</p>
        <p >{info}</p>
      </div>

      <div className='flex flex-col gap-2 font-[Roboto]'>
        <h2 className='text-gray-700 '>Mode wins:</h2>
        <ModeStats />
      </div>

      
      <div className='w-[100%] flex items-center justify-end mt-3'>
        <img className='w-[50px] h-[50px]' src={icon ? icon  : '../assets/logo/icon_link.png' } alt={name} />
      </div>

      
    </div>
  )
}

export default About

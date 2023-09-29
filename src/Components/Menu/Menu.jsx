import { useState } from 'react'
import Category from './Category'


const Menu = () => {

  const [ open, setOpen ] = useState(true)


  return (
    <div className='md:w-[240px] md:h-full md:bg-[#fafafa]  phone:bg-blue-700 phone:w-full phone:h-[100px]  fixed flex flex-col items-center shadow-[2px_0px_6px_0px_#1a202c] z-10 '>

      <div className='md:w-[95px] md:h-[100px]  md:mt-8  phone:w-full phone:flex  phone:justify-between phone:items-center'>
        <img className='w-full h-full  phone:w-[80px] phone:h-[60px]' src="./assets/logo/brawl-stars-logo.png" alt="" />
        <div className='md:hidden phone:flex '>
          <button onClick={() => setOpen(!open)}>Responsive</button>
        </div>
      </div>


      {

        open && <Category />  

      }
      


    </div>
  )
}

export default Menu

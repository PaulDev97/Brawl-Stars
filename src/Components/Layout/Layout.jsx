import React from 'react'
import Menu from '../Menu/Menu'




const Layout = ({ children }) => {
  return (
    <div className='w-full h-full md:flex phone:flex phone:flex-col '>

      <Menu />

      <div className='md:w-[79%] md:absolute md:right-0  bg-[#ebf2f6] phone:w-full phone:h-full phone:absolute phone:top-[100px]  ' >
        {children}
      </div>

    </div>
  )
}

export default Layout

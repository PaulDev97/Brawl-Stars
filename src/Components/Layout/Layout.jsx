import React from 'react'
import Menu from '../Menu/Menu'




const Layout = ({ children }) => {
  return (
    <div className='w-full h-full flex  '>

      <Menu />

      <div className='w-[79%] absolute right-0  bg-[#ebf2f6]  ' >
        {children}
      </div>

    </div>
  )
}

export default Layout

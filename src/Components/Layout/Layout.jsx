import React from 'react'
import Menu from '../Menu/Menu'




const Layout = ({ children }) => {
  return (
    <div className='w-full h-full   flex '>

      <Menu />

      <div className='w-[80%] absolute right-0  bg-[#cee3f2]  ' >
        {children}
      </div>

    </div>
  )
}

export default Layout

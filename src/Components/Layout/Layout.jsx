import React from 'react'
import Menu from '../Menu/Menu'




const Layout = ({ children }) => {
  return (
    <div className='w-full flex'>

      <Menu/>

      <div className='w-[85%] h-screen bg-[#cee3f2] ' >
        {children}
      </div>

    </div>
  )
}

export default Layout

import React from 'react'
import { useMenuStore } from '../../store/menu_store'
import { NavLink } from 'react-router-dom'


const Category = () => {

  const selectedMenu = useMenuStore((state) => state.selectedMenu)
  const menu = useMenuStore((state) => state.menu)



  const selectButton = (category) => () => {
    selectedMenu(category)
  }

  return (
    
      <div className='w-full mt-20 flex flex-col items-center gap-6'>
        <NavLink
          to="/"
          onClick={selectButton('home')}
          className={`${menu === 'home' && 'bg-red-500 text-zinc-50'} p-2 rounded-md w-[80%] flex justify-center items-center `}
        >
          Home
        </NavLink>

        <NavLink
          to="characteres"
          onClick={selectButton('characteres')}
          className={`${menu === 'characteres' && 'bg-red-500 text-zinc-50'} p-2 rounded-md w-[80%] flex justify-center items-center `}
        >
          Characteres
        </NavLink>

        <NavLink
          to="arenas"
          onClick={selectButton('arenas')}
          className={`${menu === 'arenas' && 'bg-red-500 text-zinc-50'} p-2 rounded-md w-[80%] flex justify-center items-center  `}
        >
          Arenas
        </NavLink>

        <NavLink
          to="favoritos"
          onClick={selectButton('favoritos')}
          className={`${menu === 'favoritos' && 'bg-red-500 text-zinc-50'} p-2 rounded-md w-[80%] flex justify-center items-center  `}
        >
          Favorites
        </NavLink>
      </div>
    
  )
}

export default Category

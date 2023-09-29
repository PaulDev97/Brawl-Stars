import React from 'react'
import { useMenuStore } from '../../store/menu_store'
import { NavLink } from 'react-router-dom'


const Category = () => {

  const selectedMenu = useMenuStore((state) => state.selectedMenu)
  const hiddenMenu = useMenuStore((state) => state.hiddenMenu)
  const menu = useMenuStore((state) => state.menu)

  

  console.log(hiddenMenu)

  const selectButton = (category) => () => {
    selectedMenu(category)
  }

  const position = () => {
    if(hiddenMenu) {
      return 'phone:left-0'
    }

    return 'phone:left-[-60%]'
  }




  return (
    
      <div className={`${position()} w-full md:left-0 phone:w-[40%] phone:h-[400px] phone:transition-all phone:duration-700  phone:top-[101px] phone:absolute  phone:justify-center  md:mt-20 flex flex-col items-center gap-6  md:relative md:shadow-[none] md:w-full md:h-auto md:top-[0] bg-[#fafafa]  `}>
        <NavLink
          to="/"
          onClick={selectButton('home')}
          className={`${menu === 'home' && 'bg-red-500 text-zinc-50'} transition-all duration-500 p-2 rounded-md w-[80%] flex justify-center items-center `}
        >
          Home
        </NavLink>

        <NavLink
          to="characteres"
          onClick={selectButton('characteres')}
          className={`${menu === 'characteres' && 'bg-red-500 text-zinc-50'} transition-all duration-500  p-2 rounded-md w-[80%] flex justify-center items-center `}
        >
          Characteres
        </NavLink>

        <NavLink
          to="arenas"
          onClick={selectButton('arenas')}
          className={`${menu === 'arenas' && 'bg-red-500 text-zinc-50'} transition-all duration-500  p-2 rounded-md w-[80%] flex justify-center items-center  `}
        >
          Arenas
        </NavLink>

        <NavLink
          to="favoritos"
          onClick={selectButton('favoritos')}
          className={`${menu === 'favoritos' && 'bg-red-500 text-zinc-50'} transition-all duration-500  p-2 rounded-md w-[80%] flex justify-center items-center  `}
        >
          Favorites
        </NavLink>
      </div>
    
  )
}

export default Category

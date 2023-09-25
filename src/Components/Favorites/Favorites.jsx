import React from 'react'
import { useBrawlStore } from '../../store/brawl_store'

const Favorites = () => {

  const favorites = useBrawlStore((state) => state.favorites)
  console.log(favorites)

  return (
    <div>
      Seccion Favoritos

      {
        favorites.length > 0 && favorites.map((item) =>

          <div key={item.id} className='w-[120px] h-[90px] border_card bg-[#17181F] rounded-[10px] shadow-[2px_2px_12px_black]'>

            <img className='w-[100%] rounded' src={item.imageUrl2} alt={item.name} />
            

          </div>

        )
      }
    </div>
  )
}

export default Favorites

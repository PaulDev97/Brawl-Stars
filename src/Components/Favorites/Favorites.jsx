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

          <div key={item.id} className='w-[120px] h-[120px] border_card bg-[#17181F] rounded-[10px] shadow-[0px_0px_5px_2px_#4a5568]'>

            <img className='w-full h-full rounded' src={item.imageUrl2} alt={item.name} />
            

          </div>

        )
      }
    </div>
  )
}

export default Favorites

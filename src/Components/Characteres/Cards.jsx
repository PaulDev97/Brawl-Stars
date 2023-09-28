import React, { useState } from 'react'
import { useBrawlStore } from '../../store/brawl_store'

const Cards = ({ id, name, imageUrl2 }) => {

  const addFavorite = useBrawlStore((state) => state.addFavorite)
  const favorites = useBrawlStore((state) => state.favorites)
 
  const isFavorite = favorites.some((fav) => fav.id === id);

  const color = isFavorite ? 'bg-red-400' : 'bg-gray-200';



  
  

  const addBrawler = (id, brawler, img) => {
    addFavorite(id, brawler, img)
    
    
    
  }
  
  
  
  

  
  


  
  



  return (

    <div className='w-[120px] h-[90px] border_card bg-[#17181F] rounded-[10px] shadow-[2px_2px_12px_black]'>

      <img className='w-[100%] rounded' src={imageUrl2} alt={name} />
      <button onClick={() => addBrawler(id, name, imageUrl2)} className={`${color}`}>
        agragar
      </button>

    

    </div>







  )
}

export default Cards

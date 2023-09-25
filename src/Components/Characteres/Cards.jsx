import React from 'react'
import { useBrawlStore } from '../../store/brawl_store'

const Cards = ({ id, name, imageUrl2 }) => {

  const addFavorite = useBrawlStore((state) => state.addFavorite)
  

  

  const addBrawler = (id, brawler, img) => {
    addFavorite(id, brawler, img)
  }

  const getColor = (index) => {
    const favorites = useBrawlStore((state) => state.favorites).map(item => {

      if(index === null) return 'bg-gray-200'

      if(item.id === index){
        return 'bg-gradient-to-r from-green-500 to-green-700'
      }
      if(item.id !== index){
        return 'bg-gray-200'
      }
      return 'bg-gray-200'

    })

   
    

    
    



    return favorites
  }



  return (

    <div className='w-[120px] h-[90px] border_card bg-[#17181F] rounded-[10px] shadow-[2px_2px_12px_black]'>

      <img className='w-[100%] rounded' src={imageUrl2} alt={name} />
      <button onClick={() => addBrawler(id, name, imageUrl2)} className={`${getColor(id)} bg-gray-200`}>Favorito</button>

    </div>







  )
}

export default Cards

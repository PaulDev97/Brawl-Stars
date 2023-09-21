import React from 'react'

const Cards = ({name, imageUrl2}) => {
  return (
   
      <div className='w-[120px] h-[90px] border_card bg-[#17181F] rounded-[10px] shadow-[2px_2px_12px_black]'>

        <img className='w-[100%] rounded' src={imageUrl2} alt={name} />

      </div>

   





  )
}

export default Cards

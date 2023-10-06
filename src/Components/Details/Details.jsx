import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Details = ({ name, id, imageUrl2, description, rarity, imageUrl3 }) => {

  console.log(rarity?.color)

  const bordeColor = (color) => {
    if (color === '#f88f25') return 'border-orange-500'


  }



  return (

    <section className='w-[100%] flex justify-center '>

      <div className='mt-4 m-auto w-[90%] flex flex-col justify-center items-center gap-14' >


        <div className='w-[100%] ml-[20px] flex gap-1'>
          <Link className='l-0' to='/characteres'>Characteres</Link><span>- {name}</span>
        </div>

        <div className='flex flex-wrap w-[80%] gap-5  justify-around items-center ml-[20px]'>

          <div className='flex justify-center items-center'>
            <img className='w-[120px] h-[150px] border_card bg-[#17181F] rounded-[10px] shadow-[0px_0px_5px_2px_#4a5568]' src={imageUrl2} alt="" />
          </div>



          <About borColor={bordeColor(rarity?.color)} name={name} info={description} icon={imageUrl3}  />



        </div >


      </div>


    </section>
  )
}

export default Details

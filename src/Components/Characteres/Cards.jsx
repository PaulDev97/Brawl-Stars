import { useNavigate } from 'react-router-dom';
import { useBrawlStore } from '../../store/brawl_store'
import { AiFillHeart } from 'react-icons/ai';


const Cards = ({ id, name, imageUrl2 }) => {

  const addFavorite = useBrawlStore((state) => state.addFavorite)
  const favorites = useBrawlStore((state) => state.favorites)

  const isFavorite = favorites.some((fav) => fav.id === id);
  const color = isFavorite ? 'text-red-500' : 'text-gray-100';

  const navigate = useNavigate()


  const addFavBrawler = (id, brawler, img) => {
    addFavorite(id, brawler, img)

  }






  return (

    <div className='w-[120px] h-[120px] border_card bg-[#17181F] rounded-[10px] shadow-[0px_0px_5px_2px_#4a5568] relative '>

      
      <img className='w-full h-full rounded' src={imageUrl2} alt={name} />


      <div className=' absolute bottom-[0px] right-[0px] bg-[#111] rounded-[2px_0px_2px_0px] p-1  '>
        <AiFillHeart
          onClick={() => addFavBrawler(id, name, imageUrl2)}
          className={`${color} cursor-pointer text-lg `}
        >
        </AiFillHeart>


      </div>
      <button className=' absolute bottom-[0px] left-0 text-[#fafafa] text-lg font-bungee' onClick={() => navigate(`${id}`)}>{name}</button>






    </div>







  )
}

export default Cards

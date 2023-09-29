
import Category from './Category'
import { useMenuStore } from '../../store/menu_store'


const Menu = () => {


  const toogleMenu = useMenuStore((state) => state.toogleMenu)
  

  const toogleNav = () => {
    toogleMenu()
  }


  return (
    <div className='md:w-[240px] md:h-full bg-[#fafafa]  phone:w-full phone:h-[100px]  fixed flex flex-col items-center shadow-[2px_0px_6px_0px_#1a202c] z-10 '>

      <div className={`md:w-[95px] md:h-[100px]  md:mt-8   phone:w-full phone:flex  phone:justify-between phone:items-center`}>
        <img className='w-full h-full  phone:w-[80px] phone:h-[60px]' src="./assets/logo/brawl-stars-logo.png" alt="" />
        <div className='md:hidden phone:flex '>
          <button onClick={() => toogleNav()}>Responsive</button>
        </div>
      </div>




      <Category />





    </div>
  )
}

export default Menu

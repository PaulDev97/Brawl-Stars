import Category from './Category'


const Menu = () => {


  return (
    <div className='md:w-[240px] md:h-full md:bg-[#fafafa]  phone:bg-blue-700 phone:w-full phone:h-[100px]  fixed flex flex-col items-center shadow-[2px_0px_6px_0px_#1a202c] z-10 '>

      <div className='w-[95px] h-[100px] mt-8'>
        <img className='w-full h-full' src="./assets/logo/brawl-stars-logo.png" alt="" />
      </div>

      <div className='md: phone:flex '>
        <button>Responsive</button>
      </div>


      <Category/>


    </div>
  )
}

export default Menu

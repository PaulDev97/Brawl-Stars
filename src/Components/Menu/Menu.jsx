import Category from './Category'


const Menu = () => {


  return (
    <div className='w-[240px]  flex flex-col items-center bg-[#fafafa] shadow-[2px_0px_6px_0px_#1a202c] z-10 '>

      <div className='w-[95px] h-[100px] mt-8'>
        <img className='w-full h-full' src="./assets/logo/brawl-stars-logo.png" alt="" />
      </div>


      <Category/>


    </div>
  )
}

export default Menu

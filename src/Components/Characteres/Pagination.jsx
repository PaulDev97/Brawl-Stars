import React from 'react'

const Pagination = ({ setCurrentPage, currentPage, setLimitCharacteres, totalCharacteres }) => {
  const pageNumbers = [];

  //Obtenemos el total de paginas
  const totalPages = Math.ceil(totalCharacteres / setLimitCharacteres)


  //Bucle para obtener cada numero de las paginas creadas
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const actualPage = (number) => {
    setCurrentPage(number)
  }





  return (
    <div className='flex flex-wrap gap-3 text-[#fafafa] phone:mt-14 '>
      {
        pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => actualPage(page)}
            className={`${currentPage === page ? 'bg-red-500 text-zinc-50' : 'bg-[#111]' } rounded py-2 px-4 `}>
            {page}
          </button>
        ))
      }
    </div>
  )
}

export default Pagination

/* 

{`${menu === 'home' && 'bg-red-500 text-zinc-50'} p-2 rounded-md w-[80%] flex justify-center items-center `}

*/

/* 


{currentPage === page ? 'bg-red-500 text-zinc-50' : 'bg-[#111] rounded py-2 px-4'}
*/
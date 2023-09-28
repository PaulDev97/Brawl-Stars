import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import Cards from './Cards';
import Pagination from './Pagination';


const Characteres = () => {

  const { data, loading } = useFetch('https://api.brawlapi.com/v1/brawlers');


  const totalCharacteres = data.length

  //Limite de personajes a mostrar por paginacion
  const limitCharacteres = 15;

  //Numero de pagina actual
  const [currentPage, setCurrentPage] = useState(1);


  const indexFinal = currentPage * limitCharacteres;
  const indexInitial = indexFinal - limitCharacteres;


  let characteresSlice = data?.slice(indexInitial, indexFinal)

  




  

  return (
    <div className='flex flex-col items-center'>
      <h2>Seccion Personajes</h2>


      {loading && <span>Cargando</span>}

      <div className='w-[90%] h-[500px] grid grid-cols-[repeat(auto-fill,minmax(120px,_1fr))] gap-8'>
        {
          characteresSlice.map((item) =>

            <Cards key={item.id} {...item} />

          )

        }
      </div>

      <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLimitCharacteres={limitCharacteres}
          totalCharacteres={totalCharacteres}
        />


    </div>
  )
}

export default Characteres

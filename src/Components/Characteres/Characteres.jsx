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
    <div className='phone:w-full phone:h-auto md:h-screen flex flex-col items-center justify-around phone:justify-between '>
      <h2>Seccion Personajes</h2>


      {loading && <span>Cargando</span>}

      <div className='phone:w-[90%]  phone:flex phone:flex-wrap phone:gap-10 phone:justify-center md:w-[80%] md:h-[500px] md:grid md:grid-cols-5 md:gap-16'>
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

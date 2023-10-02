import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';

const CharacterInfo = () => {

  const { id } = useParams()
  const { details, loading } = useFetch(`https://api.brawlapi.com/v1/brawlers/${id}`);


  const infoBrawler = new Array(details)



  return (
    <div>

      {loading && <span>Cargando info</span>}

      

      {
        infoBrawler?.map(item => (
          <Details key={item.id} {...item} />
        ))
      }

    </div>
  )
}

export default CharacterInfo

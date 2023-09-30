import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [characterHome, setCharacterHome] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch(url);
        const getDataApi = await response.json()

        

        setCharacterHome(getDataApi)
        setData(getDataApi.list)
        setLoading(false)


      } catch (error) {
        console.log('Error fetch')
      }
    }
    
    fetchData()
    
  }, [url])

    

    
  return { data , loading , characterHome}

}
import { create } from "zustand";




export const useBrawlStore = create((set,get) => {
  
  return{
    favorites:[],

    addFavorite: (id,name,imageUrl2) => {
      const { favorites} = get()

      let clone = structuredClone(favorites)

      const filterId = clone?.find(item => item.id === id )


    
  
      
      if(!filterId){
        set({ favorites:[...clone,{id,name,imageUrl2}]})
      }



    }
    
  }
})
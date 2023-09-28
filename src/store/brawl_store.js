import { create } from "zustand";




export const useBrawlStore = create((set, get) => {

  return {
    favorites: [],


    addFavorite: (id, name, imageUrl2) => {
      const { favorites } = get()

      let clone = structuredClone(favorites)
      let repeatId = clone?.some((item) => item.id === id)



      if (!repeatId) {
        clone = [
          ...clone,
          { id, name, imageUrl2 }
        ]
        set({ favorites: clone })
      }
      else {
        clone = favorites.filter((fav) => fav.id !== id)
        set({ favorites: clone })
      }



    }

  }
})
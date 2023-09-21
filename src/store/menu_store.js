import { create } from "zustand";



export const useMenuStore = create((set,get) => {
  return {
    menu:'home',


    selectedMenu: (category) => {

      const { menu } = get()


      if(menu !== category) {
        set({ menu: category  })
      }
      else {
        set({ menu })
      }

      
      


    }
    
  }
})
import { create } from "zustand";



export const useMenuStore = create((set,get) => {
  return {
    menu:'home',
    hiddenMenu:false,


    selectedMenu: (category) => {

      const { menu } = get()


      if(menu !== category) {
        set({ menu: category  })
      }
      else {
        set({ menu })
      }

    },

    toogleMenu: () => {
      const { hiddenMenu } = get()

      let change = hiddenMenu

      set({ hiddenMenu: !change})
    }
      
      


    
  }
})
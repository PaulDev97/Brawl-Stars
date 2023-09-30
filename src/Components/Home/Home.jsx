import React from 'react'
import Events from './Events'
import CharacterStats from '../Stats/CharacterStats'

const Home = () => {
  return (
    <main className=' h-screen flex flex-col  items-center'>
      

      <Events/>

      <CharacterStats/>
    </main>
  )
}

export default Home

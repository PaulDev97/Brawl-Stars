import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Characteres from '../Components/Characteres/Characteres'
import Layout from '../Components/Layout/Layout'

import Favorites from '../Components/Favorites/Favorites'
import CharacterInfo from '../Components/Characteres/CharacterInfo'

const Routes = () => {
  return (

    <Layout>

      <ReactRoutes>

        <Route path='/' element={<Home />} />

        <Route path='characteres'>
          <Route index element={<Characteres />} />
          <Route path=':id' element={<CharacterInfo/>} />
        </Route>

        

        <Route path='favoritos' element={<Favorites/>} />




      </ReactRoutes>


    </Layout>

  )
}

export default Routes

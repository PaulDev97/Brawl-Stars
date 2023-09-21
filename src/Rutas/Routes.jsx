import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Characteres from '../Components/Characteres/Characteres'
import Layout from '../Components/Layout/Layout'
import Arenas from '../Components/Arenas/Arenas'
import Favorites from '../Components/Favorites/Favorites'

const Routes = () => {
  return (

    <Layout>

      <ReactRoutes>

        <Route path='/' element={<Home />} />

        <Route path='characteres'>
          <Route index element={<Characteres />} />
        </Route>

        <Route path='arenas' element={<Arenas />} />

        <Route path='favoritos' element={<Favorites/>} />




      </ReactRoutes>


    </Layout>

  )
}

export default Routes

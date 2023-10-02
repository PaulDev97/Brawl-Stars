import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({name,id, imageUrl3}) => {
  return (
    <div>
      <div>
        <Link to='/characteres'>Characteres/</Link><span>{name}</span>
      </div>
      <h3>{name}</h3>
      <p>{id}</p>
      <img src={imageUrl3} alt="" />
    </div>
  )
}

export default Details

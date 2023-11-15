import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({name, image, status, gender, id}) => {
  return (
    <Link to={`/${id}`}>
    <div className='Card'>
        <img src={image} alt={name} />
        <div>
        <h1>{name}</h1>
        <p>{status}</p>
        <p>{gender}</p>
        </div>
    </div>
    </Link>
  )
}

export default Card
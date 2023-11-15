import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const Layout = () => {
    const {data} = useContext(AppContext)
  return (
    <div className='ContainerCard'>
        {
            data.map(item => (
                <Card id={item.id} name={item.name} gender={item.gender} image={item.image} status={item.status} />
            ))
        }
    </div>
  )
}

export default Layout
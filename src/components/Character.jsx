import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Character = () => {
    const {id} = useParams()
    const [dataCharacter, setDataCharacter] = useState([])
    useEffect(() => {
        const GetData = async () => {
            const Info = await axios.get('https://rickandmortyapi.com/api/character/' + id)
            setDataCharacter(Info.data)
        }
        GetData()
    }, [])
    console.log(dataCharacter)
    const {name, image, status, gender, species, origin, location, episode} = dataCharacter
  return (
    <div>
        {dataCharacter.name ? (
           <>
             <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <h1>{name}</h1>
            <p>{status}</p>
            <p>{gender}</p>
            <p>{species}</p>
            <p>{location.name}</p>
            <p>{origin.name}</p> 
            <p>{episode.length}</p>
        </div> 
           </>
        ) : <h1>cargando...</h1>}
        
    </div>
  )
}

export default Character
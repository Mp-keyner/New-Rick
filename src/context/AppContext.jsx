import axios from 'axios'
import { createContext, useEffect, useState } from 'react'


export const AppContext = createContext()
export const AppContextProvider = ({children}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const GetData = async () => {
            const Info = await axios.get('https://rickandmortyapi.com/api/character')
            setData(Info.data.results)
        }
        GetData()
    }, [])
  return (
    <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
  )
}


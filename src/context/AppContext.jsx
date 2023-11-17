import { createContext, useEffect, useState } from "react";
import RickApi from "../api/RickApi";
import { isMobile } from "react-device-detect";
import useCountere from "../hook/useCountere";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isMobileDevice, setIsMobile] = useState(false);
  const [data, setData] = useState([]);
  const { counter, decrease, increase } = useCountere();

  useEffect(() => {
    // Lógica para determinar si es móvil basado en el ancho de la pantalla
    setIsMobile(isMobile);

    // Lógica para cargar los datos cuando el contador cambia
    GetData(counter);
  }, [counter]);

  const GetData = async (counter) => {
    try {
      const { data } = await RickApi.get(`?page=${counter}`);
      setData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ data, GetData, increase, decrease, counter, isMobileDevice }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import RickApi from "../api/RickApi";
import { isMobile } from "react-device-detect";
import useCountere from "../hook/useCountere";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isMobileDevice, setIsMobile] = useState(false);
  const [data, setData] = useState([]);
  const { counter, decrease, increase } = useCountere();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    setIsMobile(isMobile);
    GetData();
  }, [counter, search, status, gender, species]);

  const GetData = async () => {
    try {
      const { data } = await RickApi.get(
        `?page=${counter}&name=${search}&status=${status}&gender=${gender}&species=${species}`
      );
      setData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const setSearchParam = (value) => {
    setSearch(value);
  };

  const setStatusParam = (value) => {
    setStatus(value);
  };

  const setGenderParam = (value) => {
    setGender(value);
  };

  const setSpeciesParam = (value) => {
    setSpecies(value);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        GetData,
        increase,
        decrease,
        counter,
        isMobileDevice,
        setSearchParam,
        setStatusParam,
        setGenderParam,
        setSpeciesParam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

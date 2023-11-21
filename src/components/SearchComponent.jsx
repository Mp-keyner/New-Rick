import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchComponent = () => {
  const { setSearchParam } = useContext(AppContext);

  const handleInputChange = ({target:{value}}) => {
    setSearchParam(value);
  };

  return (
    <input type="text" onChange={handleInputChange} />
  );
};

export default SearchComponent
// Otros componentes similares para otros parámetros de búsqueda...

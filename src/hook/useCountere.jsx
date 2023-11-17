import React, { useState } from "react";

const useCountere = () => {
  const [contador, setContador] = useState(1);
  const increase = () => {
    setContador(contador + 1);
  };
  const decrease = () => {
    setContador(contador - 1);
  };
  return {
    increase,
    contador,
    decrease,
  };
};

export default useCountere;

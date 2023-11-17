import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BtnPages = () => {
  const { increase, decrease, GetData, contador } = useContext(AppContext);
  const HandleIncrease = () => {
    increase();
    GetData(contador);
  };
  const HandleDecrease = () => {
    decrease();
    GetData(contador);
  };
  console.log(contador, "valor");
  return (
    <div style={Styles.containerBtn}>
      <button style={Styles.Btn} onClick={HandleIncrease}>
        Next
      </button>
      <button style={Styles.Btn} onClick={HandleDecrease}>
        Back
      </button>
    </div>
  );
};
const Styles = {
  containerBtn: {
    border: "1px solid red",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "1pc",
  },
  Btn: {
    padding: "0.6pc 1pc",
    border: "1px solid red",
    borderRadius: "8px",
  },
};
export default BtnPages;

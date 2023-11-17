import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import BtnPages from "./BtnPages";

const Layout = () => {
  const { data, isMobileDevice } = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#272b33",
      }}
    >
      <div className="ContainerCard">
        {data.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            status={item.status}
          />
        ))}
      </div>
      <BtnPages />
    </div>
  );
};

const Styles = {};

export default Layout;

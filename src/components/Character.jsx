import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RickApi from "../api/RickApi";
import Spiner from "./Spiner";

const Character = () => {
  const { id } = useParams();
  const [dataCharacter, setDataCharacter] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const { data } = await RickApi.get(`/${id}`);
      setDataCharacter(data);
    };
    GetData();
    ShowSpiner();
  }, []);
  // console.log(dataCharacter);
  const { name, image, status, gender, species, origin, location, episode } =
    dataCharacter;
  const [spiner, setSpiner] = useState(false);
  const ShowSpiner = () => {
    setTimeout(() => {
      setSpiner(true);
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor: "#272b33",
      }}
    >
      {dataCharacter.name && spiner ? (
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
      ) : (
        <>
          <Spiner />
          <h1>Cargando</h1>
        </>
      )}
    </div>
  );
};

export default Character;

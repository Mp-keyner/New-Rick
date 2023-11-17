import axios from "axios";

const RickApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
});

export default RickApi;

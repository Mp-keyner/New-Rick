import axios from "axios";

const RickApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
});

export default RickApi;



// let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
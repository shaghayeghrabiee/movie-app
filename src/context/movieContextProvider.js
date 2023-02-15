import React, { useState, useEffect, createContext } from "react";
import { getAllMovies, getMostPopular } from "../services/apiCalls";

export const movieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState();

  const sortPopular = () => {
    getMostPopular().then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  };
  const sortHighRate = () => {
    getAllMovies().then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  };
  useEffect(() => {
    getAllMovies().then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <movieContext.Provider
      value={{ movies, sortPopular, sortHighRate, setMovies }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieContextProvider;

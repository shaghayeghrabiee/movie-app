import React, { useContext } from "react";
import Movies from "./movies";
import styles from "./movieList.module.css";
import { movieContext } from "../context/movieContextProvider";
import Loading from "./loading";

const MoviesList = () => {
  const { movies } = useContext(movieContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h2>Welcome to my website</h2>
        <p>check these movies out</p>
      </div>
      {movies?.length > 0 ? (
        <div className={styles.container}>
          {movies &&
            movies.map((movie) => (
              <Movies key={movie.id} movieDetails={movie} />
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MoviesList;

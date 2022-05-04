import React, { useEffect, useState } from "react";
import { getDetail } from "../services/apiCalls";
import { useParams } from "react-router-dom";
import styles from "./movieDetail.module.css";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    getDetail(id).then((res) => {
      console.log(res.data);
      setMovieDetail(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          movieDetail && movieDetail.backdrop_path
        }`}
      />
      <div className={styles.textContainer}>
        <p className={styles.title}>
          <span>Title:</span> {movieDetail && movieDetail.original_title}
        </p>
        <p className={styles.description}>
          <strong>Description: </strong> {movieDetail && movieDetail.overview}
        </p>
        <p className={styles.title}>
          <span>Tagline:</span> {movieDetail && movieDetail.tagline}
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/home"> Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

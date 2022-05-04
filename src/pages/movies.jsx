import React,{useContext} from 'react';
import styles from './movies.module.css'
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { isInFavorite } from '../isInFavorite';
import {favoriteContext} from '../context/favoriteMovieContextProvider';

const Movies = ({movieDetails}) => {
    const {state,dispatch} = useContext(favoriteContext);

  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h5>{movieDetails.title}</h5>
      <div className={styles.content}>
        <div className={styles.linkContainer}>
          <Grid className={styles.favoritecontainer} item xs={8}>
            {isInFavorite(state, movieDetails.id) ? (
              <FavoriteIcon
                className={styles.likeButton}
                onClick={() => dispatch({ type: "REMOVE_ITEM" ,payload: movieDetails })}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: movieDetails })
                }
              />
            )}
          </Grid>
          <Link to={`/movie/${movieDetails.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Movies
import React, { useContext } from "react";
import { favoriteContext } from "../context/favoriteMovieContextProvider";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import styles from "./favorite.module.css";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
const FavoriteList = () => {
  const { state, dispatch } = useContext(favoriteContext);

  return (
    <div className={styles.mainContainer}>
      <Link to="/home"> Back to home</Link>
      <Grid className={styles.container} item xs={4}>
        {state.selectedItem.length > 0 ? (
          <div className={styles.favoriteContainer}>
            {state.selectedItem.map((item) => (
              <div className={styles.item}>
                <p>
                  <strong>{item.title}</strong>
                </p>
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
                <div className={styles.itemFooter}>
                  <ThumbDownOffAltOutlinedIcon
                    className={styles.removeButton}
                    onClick={() => {
                      dispatch({ type: "REMOVE_ITEM", payload: item });
                    }}
                  />
                  <div className={styles.rate}>
                    <GradeOutlinedIcon />
                    <p>{item.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span>Your list is empty</span>
        )}
      </Grid>
    </div>
  );
};

export default FavoriteList;

import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styles from "./sort.module.css";
import {movieContext} from '../context/movieContextProvider';
import {Link} from 'react-router-dom';

const Sort = () => {
  const { sortPopular, sortHighRate } = useContext(movieContext);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button
          onClick={sortPopular}
          className={styles.sortContainer}
          variant="outline-dark"
          block
        >
          Most Popular
        </Button>{" "}
        <Button
          onClick={sortHighRate}
          className={styles.sortContainer}
          variant="outline-dark"
          block
        >
          Highest Rated
        </Button>{" "}
        <Link className={styles.sortLinkContainer} to={`/favoriteList`}>
          <Button
            onClick={sortHighRate}
            className={styles.sortContainer}
            variant="outline-dark"
            block
          >My Faves</Button>{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default Sort;

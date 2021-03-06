import React, { useState,useContext ,useEffect} from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { favoriteContext } from '../context/favoriteMovieContextProvider';
import { movieContext } from "../context/movieContextProvider";
import styles from "./NavBar.module.css";
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Sort from './sort';

const NavBar = () => {
    const {state} = useContext(favoriteContext);
    const { movies } = useContext(movieContext);
    const [setting,setSetting]=useState(false);

    const handleShow=()=>{
        setSetting(true);
    } 
    const handleCLose=()=>{
        setSetting(false)
    }
    useEffect(()=>{
         setSetting(false);
    },[movies])

    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div>
            <strong>Movie DB</strong>
            <Link className={styles.movietLink} to="/home">
              Home
            </Link>
          </div>
          <div className={styles.iconContainer}>
            <Link to="/favoriteList">
              <FavoriteBorderOutlinedIcon className={styles.favoriteLink} />
            </Link>
            <SettingsIcon onClick={handleShow} className={styles.setting} />
          </div>
        </div>

        <Modal show={setting} onHide={handleCLose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>Like me to list the movies?</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Sort />
          </Modal.Body>
        </Modal>
      </div>
    );
}
 
export default NavBar;
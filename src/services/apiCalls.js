import { baseUrl } from "../config";
import axios from "axios";

const key="8d61230b01928fe55a53a48a41dc839b";

export const getAllMovies = () =>
  axios({
    method: "GET",
    url: baseUrl + "top_rated?api_key=" + key,
  });

  export const getDetail = (id) =>
  axios({
    method: "GET",
    url: baseUrl + `${id}?api_key=`+ key,
  });
export const getMostPopular = () =>
  axios({
    method: "GET",
    url: baseUrl + `popular?api_key=` + key,
  });


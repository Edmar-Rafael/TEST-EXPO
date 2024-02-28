import { combineReducers } from "redux";
import createMovieState from "./creating";
import deleteMovieState from "./delete";
import loginState from "./login";
import moviesListState from "./moviesList";
import updateMovieState from "./update";

export default combineReducers({
  createMovieState,
  deleteMovieState,
  loginState,
  moviesListState,
  updateMovieState
}) 
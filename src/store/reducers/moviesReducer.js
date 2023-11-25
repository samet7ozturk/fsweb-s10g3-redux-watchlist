import { movies } from "../../movies";
import { NEXT, PREV, REMOVE_MOV, RECYCLE_MOV } from "../actions/movieAction";

const initialState = {
  movies: movies,
  sira: 0,
  disabledNav: "PREV",
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.sira === state.movies.length - 1) {
        return { ...state, disabledNav: "NEXT" };
      } else {
        return { ...state, sira: state.sira + 1, disabledNav: null };
      }
    case PREV:
      if (state.sira === 0) {
        return { ...state, disabledNav: "PREV" };
      } else {
        return { ...state, sira: state.sira - 1, disabledNav: null };
      }
    case REMOVE_MOV:
      const remainingMovies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
      return { ...state, movies: remainingMovies };
    case RECYCLE_MOV:
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
}

export default moviesReducer;

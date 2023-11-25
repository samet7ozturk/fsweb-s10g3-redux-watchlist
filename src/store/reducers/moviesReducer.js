import { movies } from "../../movies";
import { NEXT, PREV } from "../actions/movieAction";

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
    default:
      return state;
  }
}

export default moviesReducer;

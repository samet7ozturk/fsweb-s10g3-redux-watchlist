import { movies } from "../../movies";
import { NEXT, PREV } from "../actions/movieAction";

const initialState = {
  movies: movies,
  sira: 0,
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      return { ...state, sira: state.sira + 1 };
    case PREV:
      return { ...state, sira: state.sira - 1 };
    default:
      return state;
  }
}

export default moviesReducer;

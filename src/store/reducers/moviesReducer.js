import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default moviesReducer;

import { ADD_FAV, REMOVE_FAV } from "../actions/favoritesAction";

const initialState = {
  favMovies: [
    {
      id: 8,
      title: "Memento",
      year: "2000",
      runtime: "113",
      genres: ["Mystery", "Thriller"],
      director: "Christopher Nolan",
      actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
      plot: "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
      posterUrl:
        "https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg",
    },
  ],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case REMOVE_FAV:
      const remainingFavs = state.favMovies.filter(
        (f) => f.id !== action.payload
      );
      return {
        ...state,
        favMovies: remainingFavs,
      };
    default:
      return state;
  }
}

export default favoritesReducer;

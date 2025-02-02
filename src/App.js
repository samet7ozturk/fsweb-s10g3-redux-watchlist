import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { useSelector, useDispatch } from "react-redux";
import { NEXT, PREV, REMOVE_MOV } from "./store/actions/movieAction";
import { ADD_FAV } from "./store/actions/favoritesAction";

function App() {
  const favMovies = useSelector((state) => state.favoritesReducer.favMovies);
  const { disabledNav, sira, movies } = useSelector(
    (state) => state.moviesReducer
  );
  const dispatch = useDispatch();

  function oncekiFilm() {
    //setSira(sira - 1);
    dispatch({ type: PREV });
  }

  function sonrakiFilm() {
    //setSira(sira + 1);
    dispatch({ type: NEXT });
  }

  function addToFavs() {
    dispatch({ type: ADD_FAV, payload: movies[sira] });
    dispatch({ type: REMOVE_MOV, payload: movies[sira] });
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              disabled={disabledNav === "PREV"}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-25"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              disabled={disabledNav === "NEXT"}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-25"
            >
              Sıradaki
            </button>
            <button
              onClick={addToFavs}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

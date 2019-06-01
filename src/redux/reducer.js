import movies from "../mocks/movies";

const initialState = {
  movies,
  currentGenre: false
};

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`
};

const ActionCreator = {
  selectGenre: (genre) => {
    return {
      type: ActionType.SELECT_GENRE,
      payload: genre
    };
  },
  loadMovies: () => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload
      });
  }

  return state;
};

export {
  initialState,
  ActionCreator,
  ActionType,
  reducer
};

import {converter} from '../../helpers/converter/converter';

const initialState = {
  movies: []
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`
};

const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies
    };
  }
};

const Operation = {
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data.map((movie) => converter(movie))));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer
};

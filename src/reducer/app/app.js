const initialState = {
  currentGenre: false
};

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`
};

const ActionCreator = {
  selectGenre: (genre) => {
    return {
      type: ActionType.SELECT_GENRE,
      payload: genre
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer
};

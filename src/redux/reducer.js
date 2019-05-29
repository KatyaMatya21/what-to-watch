import {initialState} from './initial-state';
import {ActionType} from './action-type';

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
  reducer
};

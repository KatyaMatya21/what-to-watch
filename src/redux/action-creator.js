import {ActionType} from './action-type';

export const ActionCreator = {
  selectGenre: (genre) => {
    return {
      type: ActionType.SELECT_GENRE,
      payload: genre
    };
  }
};

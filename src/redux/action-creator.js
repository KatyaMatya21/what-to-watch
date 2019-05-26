export const ActionCreator = {
  selectGenre: (genre) => {
    return {
      type: `SELECT_GENRE`,
      payload: genre
    };
  }
};

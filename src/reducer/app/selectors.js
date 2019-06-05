import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.APP;

export const getCurrentGenre = (state) => {
  return state[NAME_SPACE].currentGenre;
};

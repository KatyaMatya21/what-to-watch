import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getLoggedStatus = (state) => {
  return state[NAME_SPACE].isLogged;
};

export const getUserError = (state) => {
  return state[NAME_SPACE].userError;
};

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};

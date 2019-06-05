import {
  ActionCreator,
  ActionType,
  reducer
} from "./app";

describe(`Action creators works correctly!`, () => {

  it(`Action creator for select genre returns correct genre`, () => {
    expect(ActionCreator.selectGenre(`Horror`)).toEqual({
      type: ActionType.SELECT_GENRE,
      payload: `Horror`,
    });
  });

});


describe(`Reducer works correctly!`, () => {

  it(`Reducer with chosen genre should return genre`, () => {
    expect(reducer({test: 1}, {
      type: `SELECT_GENRE`,
      payload: `Horror`
    })).toEqual({
      test: 1,
      currentGenre: `Horror`
    });
  });

});

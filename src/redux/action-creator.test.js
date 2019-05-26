import {ActionCreator} from './action-creator';

describe(`Action creators work correctly!`, () => {

  it(`Action creator for select genre returns correct genre`, () => {
    expect(ActionCreator.selectGenre(`Horror`)).toEqual({
      type: `SELECT_GENRE`,
      payload: `Horror`,
    });
  });

});

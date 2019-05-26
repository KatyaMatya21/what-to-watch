import {reducer} from './reducer';

describe(`Reducer work correctly!`, () => {

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

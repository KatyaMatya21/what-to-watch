import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import MoviesList from './movies-list.jsx';

describe(`MoviesList component`, () => {

  it(`Correctly renders`, () => {
    const MoviesListComponent = renderer
      .create(
          <MoviesList
            movies={movies}
            currentGenre={false}
            activeItem={false}
            onClick={() => jest.fn()}
            onMouseEnter={() => jest.fn()}
            onMouseOut={() => jest.fn()}
          />,
          {
            createNodeMock: (element) => {
              if (element.type === `video`) {
                return {'current': {}};
              }
              return null;
            }
          }
      )
      .toJSON();
    expect(MoviesListComponent).toMatchSnapshot();
  });

});

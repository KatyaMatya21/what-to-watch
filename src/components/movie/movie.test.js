import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import Movie from './movie.jsx';

const movie = movies[0];

describe(`Movie component`, () => {

  it(`Correctly renders`, () => {
    const MovieComponent = renderer
      .create(
          <Movie
            movie={movie}
            onMouseEnter={() => jest.fn()}
            onMouseOut={() => jest.fn()}
            isHovered={false}
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
    expect(MovieComponent).toMatchSnapshot();
  });

});

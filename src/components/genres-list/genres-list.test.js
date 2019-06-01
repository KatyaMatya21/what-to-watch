import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import GenresList from '../genres-list/genres-list.jsx';

describe(`GenresList component`, () => {

  it(`Correctly renders`, () => {
    const GenresListComponent = renderer
      .create(
          <GenresList
            movies={movies}
            activeItem={false}
            onClick={() => jest.fn()}
            selectGenre={() => jest.fn()}
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
    expect(GenresListComponent).toMatchSnapshot();
  });

});

import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from '../movies-list/movies-list.jsx';

const movies = [
  {
    'id': `1`,
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`,
    'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    'id': `2`,
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`,
    'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    'id': `3`,
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`,
    'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

describe(`MoviesList component`, () => {

  it(`Correctly renders`, () => {
    const MoviesListComponent = renderer
      .create(
          <MoviesList movies={movies} />,
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

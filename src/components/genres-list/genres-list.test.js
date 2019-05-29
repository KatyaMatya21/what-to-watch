import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from '../genres-list/genres-list.jsx';

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

describe(`GenresList component`, () => {

  it(`Correctly renders`, () => {
    const GenresListComponent = renderer
      .create(
          <GenresList movies={movies} currentGenre={false} />,
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
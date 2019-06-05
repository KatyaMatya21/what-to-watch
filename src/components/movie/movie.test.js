import React from 'react';
import renderer from 'react-test-renderer';

import Movie from '../movie/movie.jsx';

const movie = {
  'id': `1`,
  'title': `What We Do in the Shadows`,
  'src': `img/what-we-do-in-the-shadows.jpg`,
  'link': `movie-page.html`,
  'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

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

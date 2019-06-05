import React from 'react';
import renderer from 'react-test-renderer';

import PageMain from '../page-main/page-main.jsx';

const movies = [
  {
    'id': `1`,
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`,
    'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

describe(`PageMain component`, () => {

  it(`Correctly renders`, () => {
    const PageMainComponent = renderer
      .create(
          <PageMain
            movies={movies}
            currentGenre={false}
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
    expect(PageMainComponent).toMatchSnapshot();
  });

});

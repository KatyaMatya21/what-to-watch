import React from 'react';
import renderer from 'react-test-renderer';

import {App} from '../app/app.jsx';

const movies = [
  {
    'id': `1`,
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`,
    'preview': `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

describe(`App component`, () => {

  it(`Correctly renders`, () => {
    const AppComponent = renderer
      .create(
          <App movies={movies} currentGenre={false} />,
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
    expect(AppComponent).toMatchSnapshot();
  });

});

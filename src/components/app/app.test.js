import React from 'react';
import renderer from 'react-test-renderer';

import App from '../app/app.jsx';

const movies = [
  {
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`
  }
];

describe(`App component`, () => {

  it(`Correctly renders`, () => {
    const AppComponent = renderer
      .create(<App movies={movies}/>)
      .toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

});

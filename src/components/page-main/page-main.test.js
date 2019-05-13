import React from 'react';
import renderer from 'react-test-renderer';

import PageMain from '../page-main/page-main.jsx';

const movies = [
  {
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`
  }
];

describe(`PageMain component`, () => {

  it(`Correctly renders`, () => {
    const PageMainComponent = renderer
      .create(<PageMain movies={movies} />)
      .toJSON();
    expect(PageMainComponent).toMatchSnapshot();
  });

});

import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from '../movies-list/movies-list.jsx';

const movies = [
  {
    'title': `What We Do in the Shadows`,
    'src': `img/what-we-do-in-the-shadows.jpg`,
    'link': `movie-page.html`
  }
];

describe(`MoviesList component`, () => {

  it(`Correctly renders`, () => {
    const MoviesListComponent = renderer
      .create(<MoviesList movies={movies} />)
      .toJSON();
    expect(MoviesListComponent).toMatchSnapshot();
  });

});

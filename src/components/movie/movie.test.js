import React from 'react';
import renderer from 'react-test-renderer';

import Movie from '../movie/movie.jsx';

const movie = {
  'title': `What We Do in the Shadows`,
  'src': `img/what-we-do-in-the-shadows.jpg`,
  'link': `movie-page.html`,
};

describe(`Movie component`, () => {

  it(`Correctly renders`, () => {
    const MovieComponent = renderer
      .create(<Movie movie={movie} />)
      .toJSON();
    expect(MovieComponent).toMatchSnapshot();
  });

});

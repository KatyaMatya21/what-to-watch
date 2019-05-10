import React from 'react';
import renderer from 'react-test-renderer';

import Movie from '../movie/movie.jsx';

const movie = {
  'title': `What We Do in the Shadows`,
  'src': `img/what-we-do-in-the-shadows.jpg`,
  'link': `movie-page.html`
};

describe(`Movie component`, () => {
  const {title, src, link} = movie;

  it(`Correctly renders`, () => {
    const MovieComponent = renderer
      .create(<Movie title={title} src={src} link={link} />)
      .toJSON();
    expect(MovieComponent).toMatchSnapshot();
  });

});

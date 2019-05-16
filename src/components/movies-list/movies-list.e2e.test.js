import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from '../movies-list/movies-list.jsx';

configure({adapter: new Adapter()});

describe(`MoviesList component`, () => {

  const movies = [
    {
      title: `What We Do in the Shadows`,
      src: `img/what-we-do-in-the-shadows.jpg`,
      link: `movie-page.html`
    },
    {
      title: `What We Do in the Shadows`,
      src: `img/what-we-do-in-the-shadows.jpg`,
      link: `movie-page.html`
    },
    {
      title: `What We Do in the Shadows`,
      src: `img/what-we-do-in-the-shadows.jpg`,
      link: `movie-page.html`
    }
  ];

  it(`Correctly renders all movie cards`, () => {
    const MovieComponent = mount(
        <MoviesList
          movies={movies}
        />
    );

    const movie = MovieComponent.find(`.small-movie-card`);
    expect(movie.length).toBe(3);
  });

});

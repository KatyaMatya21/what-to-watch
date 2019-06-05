import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from '../movies-list/movies-list.jsx';

configure({adapter: new Adapter()});

describe(`MoviesList component`, () => {

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

  it(`Correctly renders all movie cards`, () => {
    const MovieComponent = mount(
        <MoviesList
          movies={movies}
          currentGenre={false}
          onClick={() => jest.fn()}
          onMouseEnter={() => jest.fn()}
          onMouseOut={() => jest.fn()}
        />
    );

    const movie = MovieComponent.find(`.small-movie-card`);
    expect(movie.length).toBe(3);
  });

});

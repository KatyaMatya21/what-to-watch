import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from "../../mocks/movies";

import MoviesList from './movies-list.jsx';

configure({adapter: new Adapter()});

describe(`MoviesList component`, () => {

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
    expect(movie.length).toBe(5);
  });

});

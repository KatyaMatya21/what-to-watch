import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from '../movie/movie.jsx';

configure({adapter: new Adapter()});

describe(`Movie component`, () => {

  const movie = {
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    link: `movie-page.html`
  };

  it(`Correctly clicks title link`, () => {
    const clickHandler = jest.fn();

    const MovieComponent = shallow(
        <Movie
          movie={movie}
          onMouseEnter={jest.fn()}
          onClick={clickHandler}
        />
    );

    const titleMovie = MovieComponent.find(`.small-movie-card__link`);
    expect(titleMovie.length).toBe(1);

    titleMovie.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Correctly clicks play button`, () => {
    const clickHandler = jest.fn();

    const MovieComponent = shallow(
        <Movie
          movie={movie}
          onMouseEnter={jest.fn()}
          onClick={clickHandler}
        />
    );

    const playButton = MovieComponent.find(`button`);
    expect(playButton.length).toBe(1);

    playButton.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

});

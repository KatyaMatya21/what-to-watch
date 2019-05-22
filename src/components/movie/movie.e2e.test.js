import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from '../movie/movie.jsx';

configure({adapter: new Adapter()});

describe(`Movie component`, () => {

  const movie = {
    id: `1`,
    title: `What We Do in the Shadows`,
    src: `img/what-we-do-in-the-shadows.jpg`,
    link: `movie-page.html`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };

  it(`Correctly hovers on movie card`, () => {
    const hoverHandler = jest.fn();

    const MovieComponent = shallow(
        <Movie
          movie={movie}
          onMouseEnter={hoverHandler}
        />
    );

    const video = MovieComponent.find(`.small-movie-card`);
    expect(video.length).toBe(1);

    video.simulate(`mouseenter`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

  it(`Correctly leaves on movie card`, () => {
    const hoverHandler = jest.fn();

    const MovieComponent = shallow(
        <Movie
          movie={movie}
          onMouseOut={hoverHandler}
        />
    );

    const video = MovieComponent.find(`.small-movie-card`);
    expect(video.length).toBe(1);

    video.simulate(`mouseout`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

});

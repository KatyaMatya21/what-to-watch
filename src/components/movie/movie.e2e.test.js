import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from '../movie/movie.jsx';

configure({adapter: new Adapter()});

const movie = {
  'title': `What We Do in the Shadows`,
  'src': `img/what-we-do-in-the-shadows.jpg`,
  'link': `movie-page.html`
};

describe(`Movie component`, () => {
  const clickHandler = jest.fn();
  const playHandler = jest.fn(() => movie);

  it(`Correctly clicks title link`, () => {
    const MovieComponent = shallow(<Movie {...movie} onClick={clickHandler} onPlay={playHandler}/>);

    const titleMovie = MovieComponent.find(`.small-movie-card__link`);
    expect(titleMovie.length).toBe(1);

    titleMovie.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Correctly clicks play button`, () => {
    const MovieComponent = shallow(<Movie {...movie} onClick={clickHandler} onPlay={playHandler}/>);

    const playButton = MovieComponent.find(`button`);
    expect(playButton.length).toBe(1);

    playButton.simulate(`click`, playHandler);
    expect(playHandler).toHaveBeenCalledTimes(1);
    expect(playHandler).toHaveReturnedWith(movie);
  });
});

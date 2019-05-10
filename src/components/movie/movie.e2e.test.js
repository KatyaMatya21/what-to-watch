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

  it(`Correctly clicks title link`, () => {
    const clickHandler = jest.fn();
    const MovieComponent = shallow(<Movie {...movie} onClick={clickHandler}/>);
    const titleMovie = MovieComponent.find(`.small-movie-card__link`);

    titleMovie.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

});

import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import PageMain from './page-main.jsx';

jest.mock(`../header/header`, () => `Header`);

describe(`PageMain component`, () => {

  it(`Correctly renders`, () => {
    const PageMainComponent = renderer
      .create(
          <PageMain
            movies={movies}
            currentGenre={false}
            selectGenre={() => jest.fn()}
          />,
          {
            createNodeMock: (element) => {
              if (element.type === `video`) {
                return {'current': {}};
              }
              return null;
            }
          }
      )
      .toJSON();
    expect(PageMainComponent).toMatchSnapshot();
  });

});

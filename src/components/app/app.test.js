import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {App} from '../app/app.jsx';

describe(`App component`, () => {

  it(`Correctly renders`, () => {
    const AppComponent = renderer
      .create(
          <App
            movies={movies}
            currentGenre={false}
            selectGenre={() => jest.fn()}
            isAuthorizationRequired={false}
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
    expect(AppComponent).toMatchSnapshot();
  });

});

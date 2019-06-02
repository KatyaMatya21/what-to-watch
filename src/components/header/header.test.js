import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header.jsx';

describe(`Header component`, () => {

  it(`Correctly renders`, () => {
    const HeaderComponent = renderer
      .create(
          <Header
            isLogged={false}
            isAuthorizationRequired={false}
            requireAuthorization={() => jest.fn()}
          />)
      .toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });

});

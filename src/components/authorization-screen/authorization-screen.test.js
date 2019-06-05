import React from 'react';
import renderer from 'react-test-renderer';

import AuthorizationScreen from './authorization-screen.jsx';

describe(`AuthorizationScreen component`, () => {

  it(`Correctly renders`, () => {
    const AuthorizationScreenComponent = renderer
      .create(<AuthorizationScreen />)
      .toJSON();
    expect(AuthorizationScreenComponent).toMatchSnapshot();
  });

});

import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

jest.mock(`../header/header`, () => `Header`);

describe(`SignIn component`, () => {

  it(`Correctly renders`, () => {
    const SignInComponent = renderer
      .create(
          <SignIn
            loginUser={() => jest.fn()}
          />)
      .toJSON();
    expect(SignInComponent).toMatchSnapshot();
  });

});

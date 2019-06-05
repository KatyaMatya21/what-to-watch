import React from 'react';
import renderer from 'react-test-renderer';

import Sprite from './sprite.jsx';

describe(`Sprite component`, () => {

  it(`Correctly renders`, () => {
    const SpriteComponent = renderer
      .create(<Sprite />)
      .toJSON();
    expect(SpriteComponent).toMatchSnapshot();
  });

});

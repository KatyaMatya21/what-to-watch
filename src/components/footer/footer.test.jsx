import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../footer/footer.jsx';

describe(`Footer component`, () => {

  it(`Correctly renders`, () => {
    const FooterComponent = renderer
      .create(<Footer />)
      .toJSON();
    expect(FooterComponent).toMatchSnapshot();
  });

});

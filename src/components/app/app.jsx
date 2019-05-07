import React from 'react';
import PropTypes from 'prop-types';

import PageMain from '../page-main/page-main.jsx';

const App = (props) => {
  return <PageMain
    movies={props.movies}
  />;
};

App.propTypes = {
  movies: PropTypes.array.isRequired
};

export default App;

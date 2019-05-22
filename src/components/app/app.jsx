import React from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

import PageMain from '../page-main/page-main.jsx';

const App = (props) => {
  const {movies} = props;

  return <PageMain
    movies={movies}
  />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired
};

export default App;

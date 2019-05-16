import React from 'react';
import PropTypes from 'prop-types';

import PageMain from '../page-main/page-main.jsx';

const App = (props) => {
  const {movies} = props;

  return <PageMain
    movies={movies}
  />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    link: PropTypes.string
  })).isRequired
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';

import PageMain from '../page-main/page-main.jsx';

const App = (props) => {
  return <PageMain
    movies={props.movies}
  />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func
  })).isRequired
};

export default App;

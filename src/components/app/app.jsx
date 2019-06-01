import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import movieType from '../../types/movie';
import {ActionCreator} from "../../redux/action-creator";

import PageMain from '../page-main/page-main.jsx';

class App extends Component {
  render() {
    const {
      movies,
      currentGenre,
      selectGenre
    } = this.props;

    return <React.Fragment>

      <PageMain
        movies={movies}
        currentGenre={currentGenre}
        selectGenre={selectGenre}
      />

    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  selectGenre: (genre) => dispatch(ActionCreator.selectGenre(genre)),
});

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  selectGenre: PropTypes.func.isRequired
};

export {App};

const AppWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppWrapped;

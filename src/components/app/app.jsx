import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import movieType from '../../types/movie';
import {ActionCreator} from "../../reducer/app/app";

import {getMovies} from "../../reducer/data/selectors";
import {getCurrentGenre} from "../../reducer/app/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

import PageMain from '../page-main/page-main.jsx';
import SignIn from "../sign-in/sign-in.jsx";

class App extends PureComponent {
  render() {
    const {
      movies,
      currentGenre,
      selectGenre,
      isAuthorizationRequired
    } = this.props;

    if (isAuthorizationRequired) {
      return <SignIn/>;
    } else {

      return <PageMain
        movies={movies}
        currentGenre={currentGenre}
        selectGenre={selectGenre}
      />;

    }
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: getMovies(state),
  currentGenre: getCurrentGenre(state),
  isAuthorizationRequired: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  selectGenre: (genre) => dispatch(ActionCreator.selectGenre(genre))
});

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  selectGenre: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export {App};

const AppWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppWrapped;

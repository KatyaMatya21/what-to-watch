import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getLoggedStatus} from '../../reducer/user/selectors';
import {ActionCreator} from '../../reducer/user/user';

class Header extends PureComponent {
  _onClick() {
    this.props.requireAuthorization(true);
  }

  render() {
    const {
      isLogged,
      isAuthorizationRequired
    } = this.props;

    return <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {isAuthorizationRequired && <h1 className="page-title user-page__title">Sign in</h1>}

      <div className="user-block">
        {isLogged && <div className="user-block__avatar">
          <img src="img/avatar.jpg" width="63" height="63" alt="User avatar"/>
        </div>}
        {!isLogged && !isAuthorizationRequired && <a className="user-block__link" href="#" onClick={() => this._onClick()}>Sign in</a>}
      </div>
    </header>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthorizationStatus(state),
  isLogged: getLoggedStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (status) => dispatch(ActionCreator.requireAuthorization(status))
});

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.PropTypes,
  isLogged: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired
};

export {Header};

const HeaderWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderWrapped;

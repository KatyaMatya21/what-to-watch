import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Operation} from '../../reducer/user/user';
import {getUserError, getLoadingStatus} from '../../reducer/user/selectors';

import Header from '../header/header.jsx';
import Sprite from '../sprite/sprite.jsx';
import Footer from '../footer/footer.jsx';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: null
    };
  }

  _onChangeEmail(value) {
    this.setState({
      email: value,
      error: value.length ? null : `Please enter a valid email address`
    });
  }

  _onChangePassword(value) {
    this.setState({
      password: value
    });
  }

  _onClick() {
    this.props.loginUser(this.state.email, this.state.password);
  }

  render() {

    return <React.Fragment>

      <Sprite />

      <div className="user-page">

        <Header />

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">

            {this.props.userError && <div className="sign-in__message">
              <p>{this.props.userError}</p>
            </div>}

            {this.state.error && <div className="sign-in__message">
              <p>{this.state.error}</p>
            </div>}

            <div className="sign-in__fields">
              <div className={`sign-in__field ${ this.state.error ? `sign-in__field--error` : ``}`}>
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  onKeyUp={(e) => this._onChangeEmail(e.target.value)}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  onKeyUp={(e) => this._onChangePassword(e.target.value)}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="button"
                onClick={() => this._onClick()}
              >
                {this.props.isLoading ? `Please wait...` : `Sign in`}
              </button>
            </div>
          </form>
        </div>

        <Footer />

      </div>

    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  userError: getUserError(state),
  isLoading: getLoadingStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(Operation.loginUser(email, password))
});

SignIn.propTypes = {
  userError: PropTypes.string,
  loginUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export {SignIn};

const SignInWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default SignInWrapped;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import LoginModal from '../components/utils/login_modal/login_modal';
import SignupModal from '../components/utils/signup_modal/signup_modal';
import ResetpassModal from '../components/utils/resetpass_modal/resetpass_modal';

import { getOverlayStatus } from '../store/actions/site_actions';

class Layout extends Component {
  state = {
    loginModal: false,
    signupModal: false,
    resetPassModal: false,
    switchToSignUp: false
  };

  showLoginModal = value => {
    this.setState({
      loginModal: value,
      signupModal: false,
      resetPassModal: false
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  showSignUpModal = value => {
    this.setState({
      signupModal: value,
      loginModal: false,
      resetPassModal: false,
      switchToSignUp: true
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate() {
    if (this.props.site.overlay) {
      if (this.props.site.overlay.showLogIn) {
        this.showLoginModal(true);
      }
    }
  }

  handleClickOutside = event => {
    if (!this.wrapperRef.contains(event.target)) {
      this.setState({
        signupModal: false,
        loginModal: false,
        resetPassModal: false,
        switchToSignUp: false
      });
      this.props.dispatch(getOverlayStatus(false));
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  switchToSignUp = value => {
    this.setState({
      switchToSignUp: value,
      signupModal: value,
      loginModal: false,
      resetPassModal: false
    });
  };

  switchToLogIn = value => {
    this.setState({
      switchToSignUp: false,
      signupModal: false,
      resetPassModal: false,
      loginModal: value
    });
  };

  switchToResetPass = value => {
    this.setState({
      resetPassModal: value,
      loginModal: false,
      signupModal: false
    });
  };

  closeOverlay = value => {
    this.props.dispatch(getOverlayStatus(value));
  };

  closeLogin = value => {
    this.setState({
      loginModal: value
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  closeSignUp = value => {
    this.setState({
      signupModal: value
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  render() {
    const overlayStyle =
      this.props.site.overlay && this.props.site.overlay.value
        ? 'flex'
        : 'none';

    return (
      <div>
        <Header
          showLoginModal={this.showLoginModal}
          showSignUpModal={this.showSignUpModal}
        />
        <div className="login-modal__overlay" style={{ display: overlayStyle }}>
          <div ref={this.setWrapperRef} className="login-modal__wrapper">
            {this.state.loginModal && !this.state.switchToSignUp ? (
              <LoginModal
                switchToSignUp={this.switchToSignUp}
                switchToResetPass={this.switchToResetPass}
                closeOverlay={this.closeOverlay}
                closeLoginModal={this.closeLogin}
              />
            ) : null}
            {this.state.signupModal && this.state.switchToSignUp ? (
              <SignupModal
                switchToLogIn={this.switchToLogIn}
                closeSignUpModal={this.closeSignUp}
              />
            ) : null}
            {this.state.resetPassModal ? (
              <ResetpassModal
                switchToSignUp={this.switchToSignUp}
                switchToLogIn={this.switchToLogIn}
              />
            ) : null}
          </div>
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(Layout);

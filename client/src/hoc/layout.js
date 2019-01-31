import React, { Component } from 'react';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import LoginModal from '../components/utils/login_modal/login_modal';
import SignupModal from '../components/utils/signup_modal/signup_modal';
import ResetpassModal from '../components/utils/resetpass_modal/resetpass_modal';

class Layout extends Component {
  state = {
    overlay: false,
    loginModal: false,
    signupModal: false,
    resetPassModal: false,
    switchToSignUp: false
  };

  showLoginModal = value => {
    this.setState({
      overlay: value,
      loginModal: value,
      signupModal: false
    });
  };

  showSignUpModal = value => {
    this.setState({
      overlay: value,
      signupModal: value,
      loginModal: false,
      switchToSignUp: true
    });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (!this.wrapperRef.contains(event.target)) {
      this.setState({
        overlay: false,
        signupModal: false,
        loginModal: false,
        switchToSignUp: false
      });
    }
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  switchToSignUp = value => {
    this.setState({
      switchToSignUp: value,
      signupModal: value,
      loginModal: false
    });
  };

  switchToLogIn = value => {
    this.setState({
      switchToSignUp: false,
      signupModal: false,
      loginModal: value
    });
  };

  switchToResetPass = value => {
    this.setState({
      resetPassModal: value,
      loginModal: false
    });
  };

  closeOverlay = value => {
    this.setState({
      overlay: value
    });
  };

  closeLogin = value => {
    this.setState({
      overlay: value,
      loginModal: value
    });
  };

  closeSignUp = value => {
    this.setState({
      overlay: value,
      signupModal: value
    });
  };

  render() {
    const overlayStyle = this.state.overlay ? 'flex' : 'none';
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
            {this.state.resetPassModal ? <ResetpassModal /> : null}
          </div>
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

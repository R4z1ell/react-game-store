import React, { Component } from 'react';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import LoginModal from '../components/utils/login_modal/login_modal';
import SignupModal from '../components/utils/signup_modal/signup_modal';

class Layout extends Component {
  state = {
    overlay: false,
    loginModal: false,
    signupModal: false,
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

  render() {
    const overlayStyle = this.state.overlay ? 'flex' : 'none';
    return (
      <div>
        <Header
          showLoginModal={this.showLoginModal}
          showSignUpModal={this.showSignUpModal}
        />
        <div className="login-modal__overlay" style={{ display: overlayStyle }}>
          <div
            ref={this.setWrapperRef}
            style={{ width: '390px', marginTop: '130px' }}
          >
            {this.state.loginModal && !this.state.switchToSignUp ? (
              <LoginModal switchToSignUp={this.switchToSignUp} />
            ) : null}
            {this.state.signupModal && this.state.switchToSignUp ? (
              <SignupModal switchToLogIn={this.switchToLogIn} />
            ) : null}
          </div>
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

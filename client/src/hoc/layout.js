import React, { Component } from 'react';
import { connect } from 'react-redux';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import LoginModal from '../components/utils/login_modal/login_modal';
import SignupModal from '../components/utils/signup_modal/signup_modal';
import RequestPassModal from '../components/utils/requestpass_modal/requestpass_modal';
import ResetPassModal from '../components/utils/resetpass_modal/resetpass_modal';
import SuccessMessage from '../components/utils/success_message/success_message';

import { getOverlayStatus } from '../store/actions/site_actions';

class Layout extends Component {
  state = {
    loginModal: false,
    signupModal: false,
    requestPassModal: false,
    resetPassModal: false,
    successMessage: false,
    switchToSignUp: false
  };

  showLoginModal = value => {
    this.setState({
      loginModal: value,
      signupModal: false,
      requestPassModal: false,
      successMessage: false
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  showResetPassModal = value => {
    this.setState({
      loginModal: false,
      signupModal: false,
      requestPassModal: false,
      resetPassModal: value,
      successMessage: false
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  showSignUpModal = value => {
    this.setState({
      signupModal: value,
      loginModal: false,
      requestPassModal: false,
      successMessage: false,
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
      if (this.props.site.overlay.showResetPass) {
        this.showResetPassModal(true);
      }
    }
  }

  handleClickOutside = event => {
    if (!this.wrapperRef.contains(event.target)) {
      if (
        this.state.signupModal ||
        this.state.loginModal ||
        this.state.requestPassModal ||
        this.state.resetPassModal ||
        this.state.switchToSignUp ||
        this.state.successMessage
      ) {
        this.setState({
          signupModal: false,
          loginModal: false,
          requestPassModal: false,
          resetPassModal: false,
          successMessage: false,
          switchToSignUp: false
        });
      }

      if (this.props.site.overlay && this.props.site.overlay.value) {
        this.props.dispatch(getOverlayStatus(false));
      }
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
      requestPassModal: false
    });
  };

  switchToLogIn = value => {
    this.setState({
      switchToSignUp: false,
      signupModal: false,
      requestPassModal: false,
      loginModal: value
    });
  };

  switchToRequestPass = value => {
    this.setState({
      requestPassModal: value,
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

  closeResetPass = value => {
    this.setState({
      resetPassModal: value
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  closeSignUp = value => {
    this.setState({
      signupModal: value
    });
    this.props.dispatch(getOverlayStatus(value));
  };

  showSuccessMessage = value => {
    this.setState({
      successMessage: value,
      requestPassModal: false,
      loginModal: false,
      signupModal: false
    });
  };

  closeSuccessMessage = value => {
    this.setState({
      successMessage: value
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
                switchToRequestPass={this.switchToRequestPass}
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
            {this.state.requestPassModal ? (
              <RequestPassModal
                switchToSignUp={this.switchToSignUp}
                switchToLogIn={this.switchToLogIn}
                closeLoginModal={this.closeLogin}
                showSuccessMessage={this.showSuccessMessage}
              />
            ) : null}
            {this.state.resetPassModal ? (
              <ResetPassModal closeResetPassModal={this.closeResetPass} />
            ) : null}
            {this.state.successMessage ? (
              <SuccessMessage closeSuccessMessage={this.closeSuccessMessage} />
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

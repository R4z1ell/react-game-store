import React, { Component } from 'react';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import LoginModal from '../components/utils/login_modal/login_modal';

class Layout extends Component {
  state = {
    loginModalStatus: false
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.loginModalStatus ? <LoginModal /> : null}
        <div className="login-modal__overlay">
          <LoginModal />
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

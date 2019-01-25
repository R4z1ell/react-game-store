import React, { Component } from 'react';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';

class Layout extends Component {
  state = {
    overlayStatus: false
  };

  checkOverlayStatus = value => {
    this.setState({
      overlayStatus: value
    });
  };

  render() {
    const overlayClass = this.state.overlayStatus
      ? 'menu-overlay is-visible'
      : 'menu-overlay';
    return (
      <div>
        <div className={overlayClass} />
        <Header searchBar={value => this.checkOverlayStatus(value)} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

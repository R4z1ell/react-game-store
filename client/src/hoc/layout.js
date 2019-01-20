import React, { Component } from 'react';
import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import HeaderSearch from '../components/Header_footer/Header/header_search/header_search';

class Layout extends Component {
  state = {
    inputStatus: ''
  };

  checkInputStatus = value => {
    this.setState({
      inputStatus: value
    });
  };

  render() {
    return (
      <div>
        <Header checkInputStatus={value => this.checkInputStatus(value)} />
        <HeaderSearch inputValue={this.state.inputStatus} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

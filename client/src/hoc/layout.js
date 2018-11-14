import React, { Component } from 'react';
import style from './layout.module.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={style.page_container}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;

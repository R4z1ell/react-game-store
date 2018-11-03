import React, { Component } from 'react';
import style from './index.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={style.header__bck}>
        <div className={style.header__container}>
          <div>STORE</div>
          <div>BROWSE</div>
        </div>
      </header>
    );
  }
}

export default Header;

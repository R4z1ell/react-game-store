import React, { Component } from 'react';

import './header_tray.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

class HeaderTray extends Component {
  render() {
    return (
      <div className="header__tray">
        <div className="header__item">
          <FontAwesomeIcon icon={faBell} />
          <span>0</span>
        </div>
        <div className="header__item">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>0</span>
        </div>
        <div className="header__item header__search">
          <div className="header-link header-link--last header-link--search header-link--icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="header-submenu">
            <div className="header-search-toolbar">
              <FontAwesomeIcon icon={faSearch} className="header-search-icon" />
              <div className="header-search-input">
                <input type="text" className="header-search-input__field" />
                <span className="header-search-input__clear">clear</span>
              </div>
              <div className="header-search-toolbar__results-count">
                <span>4</span>
                Games
                <span className="header-triangle header-triangle--centered" />
              </div>
            </div>
            {/* <div className="header-search__no-results"></div>
            <div className="header-search__results"></div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTray;

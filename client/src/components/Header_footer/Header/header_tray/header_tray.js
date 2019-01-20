import React, { Component } from 'react';

import './header_tray.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

class HeaderTray extends Component {
  state = {
    searchBar: false,
    inputStatus: ''
  };

  showSearchBar = () => {
    this.setState(
      {
        searchBar: true
      },
      () => this.props.searchBar(this.state.searchBar)
    );
  };

  hideSearchBar = () => {
    this.setState(
      {
        searchBar: false
      },
      () => this.props.searchBar(this.state.searchBar)
    );
  };

  handleChange = event => {
    this.setState(
      {
        inputStatus: event.target.value
      },
      () => this.props.inputStatus(this.state.inputStatus)
    );
  };

  clearInput = () => {
    this.setState(
      {
        inputStatus: ''
      },
      () => this.props.inputStatus(this.state.inputStatus)
    );
  };

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
            {this.state.searchBar ? (
              <svg
                preserveAspectRatio="xMidYMax meet"
                viewBox="0 0 14.9 15.2"
                id="icon-close4"
                width="100%"
                height="100%"
                className="header-icon-svg"
                onClick={this.hideSearchBar}
              >
                <path
                  d="M14.9,13.8l-1.4,1.4L7.6,9l-6.1,6.1L0,13.7l6.1-6.1L0.1,1.4L1.4,0l6.1,6.2L13.4,0l1.4,1.4L8.9,7.7
                L14.9,13.8z"
                />
              </svg>
            ) : (
              <FontAwesomeIcon icon={faSearch} onClick={this.showSearchBar} />
            )}
          </div>
          {this.state.searchBar ? (
            <div className="header-submenu">
              <div className="header-search-toolbar">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="header-search-icon"
                />
                <div className="header-search-input">
                  <input
                    type="text"
                    className="header-search-input__field"
                    onChange={this.handleChange}
                    value={this.state.inputStatus}
                    autoFocus={true}
                  />
                  {this.state.inputStatus !== '' ? (
                    <span
                      className="header-search-input__clear"
                      onClick={this.clearInput}
                    >
                      clear
                    </span>
                  ) : null}
                </div>
                {this.state.inputStatus !== '' ? (
                  <div className="header-search-toolbar__results-count">
                    <span>4</span>
                    Games
                    <span className="header-triangle header-triangle--centered" />
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HeaderTray;

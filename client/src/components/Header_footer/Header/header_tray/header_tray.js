import React, { Component } from 'react';

import './header_tray.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

import HeaderCart from '../header_cart/header_cart';

class HeaderTray extends Component {
  state = {
    searchBar: false,
    inputStatus: '',
    typingTimeout: 0,
    overlayStatus: false,
    headerCartStatus: false,
    active: false
  };

  closeOverlay = () => {
    this.setState(
      {
        overlayStatus: false,
        searchBar: false
      },
      () => this.props.searchBar(this.state.searchBar)
    );
  };

  showSearchBar = () => {
    this.setState(
      {
        searchBar: true,
        overlayStatus: true
      },
      () => this.props.searchBar(this.state.searchBar)
    );
  };

  hideSearchBar = () => {
    this.setState(
      {
        searchBar: false,
        inputStatus: '',
        overlayStatus: false
      },
      () => {
        this.props.inputStatus(this.state.inputStatus);
        this.props.searchBar(this.state.searchBar);
        this.props.clearStore();
      }
    );
  };

  handleChange = event => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState(
      {
        inputStatus: event.target.value,
        typingTimeout: setTimeout(() => {
          this.sendToParent(this.state.inputStatus);
        }, 500)
      },
      () => this.props.inputStatus(this.state.inputStatus)
    );

    if (!event.target.value) {
      this.props.clearStore();
    }
  };

  sendToParent = search => {
    this.props.searching(search);
  };

  clearInput = () => {
    this.setState(
      {
        inputStatus: ''
      },
      () => {
        this.props.inputStatus(this.state.inputStatus);
        this.props.clearStore();
      }
    );
  };

  toggleHeaderCart = () => {
    this.setState({
      headerCartStatus: !this.state.headerCartStatus,
      active: !this.state.active,
      overlayStatus: !this.state.overlayStatus
    });
  };

  closeAll = value => {
    this.setState({
      headerCartStatus: value,
      overlayStatus: value,
      active: value
    });
  };

  render() {
    const overlayClass =
      this.props.active || this.state.overlayStatus
        ? 'menu-overlay is-visible'
        : 'menu-overlay';

    const triangleClass = this.state.active
      ? 'cart-triangle cart-triangle-animated'
      : 'cart-triangle';

    const active = this.state.active ? 'block' : 'none';

    return (
      <div className="header__tray">
        <div className={overlayClass} onClick={this.closeOverlay} />
        <div className="header__item">
          <FontAwesomeIcon icon={faBell} />
          <span className="header__item-count">0</span>
        </div>
        <div className="header__item" onClick={this.toggleHeaderCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="header__item-count">0</span>
          <p className={triangleClass} style={{ display: active }} />
          {this.state.headerCartStatus ? (
            <HeaderCart
              closeAll={value => this.closeAll(value)}
              auth={this.props.auth}
            />
          ) : null}
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
                    {this.props.searchedGameLength.length > 0 ? (
                      <span>{this.props.searchedGameLength.length} Games</span>
                    ) : null}
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

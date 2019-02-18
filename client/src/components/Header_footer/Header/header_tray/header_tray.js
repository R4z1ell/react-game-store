import React, { Component } from 'react';

import './header_tray.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        searchBar: false,
        inputStatus: ''
      },
      () => {
        this.props.searchBar(this.state.searchBar);
        this.props.clearStore();
      }
    );
  };

  showSearchBar = () => {
    this.setState(
      {
        searchBar: true,
        overlayStatus: true,
        headerCartStatus: false,
        active: false
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
    if (!this.state.overlayStatus && !this.state.headerCartStatus) {
      this.setState(
        {
          headerCartStatus: true,
          active: !this.state.active,
          inputStatus: '',
          overlayStatus: true,
          searchBar: false
        },
        () => this.props.hideHeaderSearch()
      );
    }
    if (this.state.overlayStatus && this.state.headerCartStatus) {
      this.setState(
        {
          headerCartStatus: false,
          active: !this.state.active,
          inputStatus: '',
          overlayStatus: false,
          searchBar: false
        },
        () => this.props.hideHeaderSearch()
      );
    }
    if (this.state.searchBar && this.state.overlayStatus) {
      this.setState(
        {
          headerCartStatus: true,
          active: !this.state.active,
          inputStatus: '',
          overlayStatus: true,
          searchBar: false
        },
        () => this.props.hideHeaderSearch()
      );
    }
  };

  closeAll = value => {
    this.setState({
      headerCartStatus: value,
      overlayStatus: value,
      active: value
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.auth) {
      return (state = {
        cartItems: props.auth.cart.length
      });
    }
    return null;
  }

  render() {
    const overlayClass =
      this.props.active || this.state.overlayStatus
        ? 'menu-overlay is-visible'
        : 'menu-overlay';

    const triangleClass = this.state.active
      ? 'cart-triangle cart-triangle-animated'
      : 'cart-triangle';

    const cartClass =
      this.state.cartItems === 0
        ? 'header__item-count'
        : `header__item-count header__item-count--cart`;

    const svgClass = this.state.cartItems > 0 ? '1px' : '4px';

    const active = this.state.active ? 'block' : 'none';

    return (
      <div className="header__tray">
        <div className={overlayClass} onClick={this.closeOverlay} />
        <div
          className="header__item header__item-cart"
          style={{ paddingRight: '0px', marginRight: '20px' }}
          onClick={this.toggleHeaderCart}
        >
          <svg
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 17 16.1"
            className="menu-icon-svg"
            style={{ marginRight: svgClass }}
          >
            <path
              d="M16.8,1.5l-1.8,0L13,11l-1,1l-9,0l-1.1-1L0,3l1.5,0l2.1,7.6h7.7L13.4,1l1-1L17,0L16.8,1.5z
              M4.6,8.2V7.7h5.8v0.5L4.6,8.2L4.6,8.2z M4.3,5.6h6.2l0,0.5l-6.2,0V5.6L4.3,5.6z M3.5,4l0-0.4h7.9l0,0.4L3.5,4z M4.5,13
              C5.3,13,6,13.6,6,14.4c0,0,0,0.1,0,0.1c0,0.9-0.7,1.6-1.5,1.6c0,0,0,0,0,0C3.7,16,3,15.4,3,14.6c0,0,0-0.1,0-0.1
              c0-0.8,0.5-1.4,1.3-1.5C4.4,13,4.4,13,4.5,13L4.5,13z M10.4,13c0.8-0.1,1.6,0.6,1.6,1.4c0,0,0,0,0,0c0,0.9-0.7,1.6-1.6,1.6
              c-0.8,0-1.5-0.7-1.5-1.5C8.9,13.7,9.6,13,10.4,13L10.4,13L10.4,13z"
            />
          </svg>
          <span className={cartClass}>{this.state.cartItems}</span>
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

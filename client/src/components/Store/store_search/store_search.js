import React, { Component } from 'react';

import './store_search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAngleDown,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import CardBlock from '../../utils/card_block';

class StoreSearch extends Component {
  state = {
    dropdown: false,
    inputDefault: '',
    inputStatus: false,
    filterStatus: false,
    switchBtnGrid: false,
    switchBtnList: false,
    everything: false,
    upcoming: false,
    onSale: false,
    collapsedPrice: false,
    collapsedLanguage: false,
    priceSelected: false,
    under5: false
  };

  handleInput = event => {
    if (event.target.value) {
      this.setState({
        inputDefault: event.target.value,
        inputStatus: true
      });
    } else {
      this.setState({
        inputDefault: '',
        inputStatus: false
      });
    }
  };

  resetInputValue = () => {
    this.setState({
      inputDefault: '',
      inputStatus: false
    });
  };

  filterToggle = () => {
    this.setState({
      filterStatus: !this.state.filterStatus
    });
  };

  switchBtnGrid = () => {
    this.setState({
      switchBtnGrid: true,
      switchBtnList: false
    });
  };

  switchBtnList = () => {
    this.setState({
      switchBtnList: true,
      switchBtnGrid: false
    });
  };

  everything = () => {
    this.setState({
      everything: true,
      upcoming: false,
      onSale: false
    });
  };

  upcoming = () => {
    this.setState({
      everything: false,
      upcoming: true,
      onSale: false
    });
  };

  onSale = () => {
    this.setState({
      everything: false,
      upcoming: false,
      onSale: true
    });
  };

  togglePrice = () => {
    this.setState({
      collapsedPrice: !this.state.collapsedPrice
    });
  };

  toggleLanguage = () => {
    this.setState({
      collapsedLanguage: !this.state.collapsedLanguage
    });
  };

  togglePriceSelected = () => {
    this.setState({
      priceSelected: true,
      under5: true
    });
  };

  render() {
    let switchBtnGridStatus = this.state.switchBtnGrid ? '--active' : '';
    let switchBtnListStatus = this.state.switchBtnList ? '--active' : '';
    let everything = this.state.everything ? '--selected' : '';
    let upcoming = this.state.upcoming ? '--selected' : '';
    let onSale = this.state.onSale ? '--selected' : '';
    let collapsedPrice = this.state.collapsedPrice ? '--collapsed' : '';
    let collapsedLanguage = this.state.collapsedLanguage ? '--collapsed' : '';
    let under5 = this.state.under5 ? '--selected' : '';

    return (
      <React.Fragment>
        <div className="store-search">
          <div className="store-search__container">
            <div
              className={
                this.state.dropdown
                  ? 'store-search__dropdown dropdown dropdown--is-open'
                  : 'store-search__dropdown dropdown'
              }
              onClick={() =>
                this.setState({
                  dropdown: !this.state.dropdown
                })
              }
            >
              <span className="dropdown__trigger">
                <div className="search-categories">
                  <span>
                    <span className="selected-category">All games</span>
                  </span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="search-categories-icon"
                  />
                </div>
              </span>
              <div className="dropdown__layer">
                <div className="search-dropdown-content">
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox-single"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z M8,11 C6.34314575,11 5,9.65685425 5,8 C5,6.34314575 6.34314575,5 8,5 C9.65685425,5 11,6.34314575 11,8 C11,9.65685425 9.65685425,11 8,11 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      All games
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Role-playing
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Simulation
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Indie
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Racing
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Sports
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Action
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Strategy
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Shooter
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Adventure
                    </div>
                  </label>
                  <label className="search-dropdown-item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="search-dropdown-icon search-dropdown-icon--selected"
                    >
                      <path d="M3.42883516,-8.8817842e-16 L12.5711648,-8.8817842e-16 C14.4648582,-8.8817842e-16 16,1.53514179 16,3.42883516 L16,12.5723956 C16,14.466089 14.4648582,16.0012308 12.5711648,16.0012308 L3.42883516,16.0012308 C1.53514179,16.0012308 0,14.466089 0,12.5723956 L0,3.42883516 C0,1.53514179 1.53514179,-8.8817842e-16 3.42883516,-8.8817842e-16 Z M4.03165622,1 C2.37480197,1 1.03165622,2.34314575 1.03165622,4 L1.03165622,12 C1.03165622,13.6568542 2.37480197,15 4.03165622,15 L12.0305794,15 C13.6874336,15 15.0305794,13.6568542 15.0305794,12 L15.0305794,4 C15.0305794,2.34314575 13.6874336,1 12.0305794,1 L4.03165622,1 Z" />
                    </svg>
                    <input type="radio" className="search-dropdown-checkbox" />
                    <div className="search-dropdown-text search-dropdown-text--selected">
                      Movies for gamers
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="search-input-container">
              {this.state.inputDefault === '' ? (
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-input-icon"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-input-icon--with-content"
                />
              )}
              <input
                type="text"
                placeholder="Search for..."
                value={this.state.inputDefault}
                className="search-input"
                onChange={event => this.handleInput(event)}
              />
              {this.state.inputStatus ? (
                <div className="search-button-wrapper">
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="search-button-clear"
                    onClick={() => this.resetInputValue()}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="store-search__tabs-wrapper--row">
            <div
              className={`tabs-row-option tabs-row-option${everything}`}
              onClick={() => this.everything()}
            >
              Everything
            </div>
            <div
              className={`tabs-row-option tabs-row-option${upcoming}`}
              onClick={() => this.upcoming()}
            >
              Upcoming
            </div>
            <div
              className={`tabs-row-option tabs-row-option${onSale}`}
              onClick={() => this.onSale()}
            >
              On sale
            </div>
          </div>
          <div className="store-search__filters-sorting">
            <div
              className="filters__toggle"
              onClick={() => this.filterToggle()}
            >
              <div className="filters-status">
                {this.state.filterStatus ? (
                  <svg
                    preserveAspectRatio="xMidYMax meet"
                    viewBox="0 0 13 11"
                    id="icon-toggle-filters"
                    width="100%"
                    height="100%"
                    className="filters__toggle-icon--opened"
                  >
                    <path d="M7 5H1V0H0v11h1V6h6v3l6-3.5L7 2z" />
                  </svg>
                ) : (
                  <svg
                    preserveAspectRatio="xMidYMax meet"
                    viewBox="0 0 13 11"
                    id="icon-toggle-filters"
                    width="100%"
                    height="100%"
                    className="filters__toggle-icon"
                  >
                    <path d="M7 5H1V0H0v11h1V6h6v3l6-3.5L7 2z" />
                  </svg>
                )}

                <span className="filters-applied-label">Filters</span>
              </div>
            </div>
            <div className="view-switch">
              <svg
                preserveAspectRatio="xMidYMax meet"
                id="icon-grid"
                width="100%"
                height="100%"
                className={`view-switch-btn view-switch-btn-grid${switchBtnGridStatus}`}
                onClick={() => this.switchBtnGrid()}
              >
                <path d="M11 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-5 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-5 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm10-5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM6 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM1 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10-5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM1 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                preserveAspectRatio="xMidYMax meet"
                id="icon-list"
                width="100%"
                height="100%"
                className={`view-switch-btn view-switch-btn-list${switchBtnListStatus}`}
                onClick={() => this.switchBtnList()}
              >
                <path d="M5 11h9v2H5v-2zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm4-4h9v2H5V6zM1 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-4h9v2H5V1zM1 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="container--catalog">
          <div className="catalog__body">
            <div className="catalog__sidebar">
              <div className={`filter__item filter__item${collapsedPrice}`}>
                <div
                  className="filter__header"
                  onClick={() => this.togglePrice()}
                >
                  <div className="filter__clear-wrapper">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-clear"
                      width="100%"
                      height="100%"
                      className="filter__clear"
                    >
                      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1.33-8L12 5.33 10.67 4 8 6.67 5.33 4 4 5.33 6.67 8 4 10.67 5.33 12 8 9.33 10.67 12 12 10.67 9.33 8z" />
                    </svg>
                  </div>
                  <div className="filter__toggle">
                    <div className="filter__title">Price</div>
                    <div className="filter__arrow-wrapper">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="filter__arrow"
                      />
                    </div>
                  </div>
                </div>
                <div className="filter__item-options">
                  <label
                    className="option__item"
                    onClick={() => this.togglePriceSelected()}
                  >
                    {this.state.priceSelected ? (
                      <svg
                        preserveAspectRatio="xMidYMax meet"
                        viewBox="0 0 16 16"
                        id="icon-checkbox-single"
                        width="100%"
                        height="100%"
                        className="option-icon option-icon--selected"
                      >
                        <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    ) : (
                      <svg
                        preserveAspectRatio="xMidYMax meet"
                        viewBox="0 0 16 16"
                        id="icon-checkbox"
                        width="100%"
                        height="100%"
                        className="option-icon"
                      >
                        <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                      </svg>
                    )}
                    <input type="radio" className="option__checkbox" />
                    <span className={`option__text option__text${under5}`}>
                      Under € 5
                    </span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Under € 10</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Under € 15</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Under € 25</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">€ 25+</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Free</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">discounted</span>
                  </label>
                </div>
              </div>
              <div className={`filter__item filter__item${collapsedLanguage}`}>
                <div
                  className="filter__header"
                  onClick={() => this.toggleLanguage()}
                >
                  <div className="filter__clear-wrapper">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-clear"
                      width="100%"
                      height="100%"
                      className="filter__clear"
                    >
                      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1.33-8L12 5.33 10.67 4 8 6.67 5.33 4 4 5.33 6.67 8 4 10.67 5.33 12 8 9.33 10.67 12 12 10.67 9.33 8z" />
                    </svg>
                  </div>
                  <div className="filter__toggle">
                    <div className="filter__title">Language</div>
                    <div className="filter__arrow-wrapper">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="filter__arrow"
                      />
                    </div>
                  </div>
                </div>
                <div className="filter__item-options">
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">English</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Deutsch</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">French</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Spanish</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Italian</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Portuguese</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Russian</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Polish</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Japanese</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Czech</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Dutch</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Chinese</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Korean</span>
                  </label>
                  <label className="option__item">
                    <svg
                      preserveAspectRatio="xMidYMax meet"
                      viewBox="0 0 16 16"
                      id="icon-checkbox"
                      width="100%"
                      height="100%"
                      className="option-icon"
                    >
                      <path d="M3.43 0h9.14C14.47 0 16 1.54 16 3.43v9.14c0 1.9-1.54 3.43-3.43 3.43H3.43A3.43 3.43 0 0 1 0 12.57V3.43C0 1.53 1.54 0 3.43 0zm.6 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-8z" />
                    </svg>
                    <input type="radio" className="option__checkbox" />
                    <span className="option__text">Turkish</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="catalog__games-list">
              {this.props.games ? <CardBlock list={this.props.games} /> : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StoreSearch;

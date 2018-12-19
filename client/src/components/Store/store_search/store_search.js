import React, { Component } from 'react';

import './store_search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faAngleDown,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

class StoreSearch extends Component {
  state = {
    dropdown: false,
    inputDefault: '',
    inputStatus: false,
    filterStatus: false
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

  render() {
    return (
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
              <FontAwesomeIcon icon={faSearch} className="search-input-icon" />
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
          <div className="tabs-row-option">Everything</div>
          <div className="tabs-row-option">Upcoming</div>
          <div className="tabs-row-option">On sale</div>
        </div>
        <div className="store-search__filters-sorting">
          <div className="filters__toggle" onClick={() => this.filterToggle()}>
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
              className="view-switch-btn view-switch-btn-grid"
            >
              <path d="M11 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-5 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-5 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm10-5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM6 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM1 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10-5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM1 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z" />
            </svg>
            <svg
              preserveAspectRatio="xMidYMax meet"
              id="icon-list"
              width="100%"
              height="100%"
              className="view-switch-btn view-switch-btn-list"
            >
              <path d="M5 11h9v2H5v-2zm-4-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm4-4h9v2H5V6zM1 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-4h9v2H5V1zM1 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreSearch;

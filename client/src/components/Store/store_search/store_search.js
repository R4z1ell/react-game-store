import React, { Component } from 'react';

import './store_search.scss';

class StoreSearch extends Component {
  render() {
    return (
      <div className="store-search">
        <div className="store-search__container">
          <div className="store-search__dropdown dropdown">
            <span className="dropdown__trigger">
              <div className="search-categories">
                <span>
                  <span className="selected-category">All games</span>
                </span>
                <svg className="search-categories-icon" />
              </div>
            </span>
            <div className="dropdown__layer">
              <div className="search-dropdown-content">
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    All games
                  </div>
                </label>
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    Role-playing
                  </div>
                </label>
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    Simulation
                  </div>
                </label>
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    Indie
                  </div>
                </label>
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    Action
                  </div>
                </label>
                <label className="search-dropdown-item">
                  <svg className="search-dropdown-icon search-dropdown-icon--selected" />
                  <input type="radio" className="search-dropdown-checkbox" />
                  <div className="search-dropdown-text search-dropdown-text--selected">
                    Strategy
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="store-search__search-input" />
        </div>
      </div>
    );
  }
}

export default StoreSearch;

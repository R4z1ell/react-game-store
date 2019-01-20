import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header_search.scss';

class HeaderSearch extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.inputValue ? (
          <div className="header-search__no-results">
            <div className="header-search-empty">
              <div className="header-search-empty__header">
                <svg
                  preserveAspectRatio="xMidYMax meet"
                  viewBox="0 0 13.8 15"
                  id="icon-search2"
                  width="100%"
                  height="100%"
                  className="header-search-empty__header-icon"
                >
                  <path
                    d="M13.8,13.7L12.2,15L9,11.1C8.1,11.7,7.1,12,6,12c-3.2,0.1-5.9-2.4-6-5.6C0,6.3,0,6.1,0,6
                c0-3.3,2.7-6,6-6s6,2.7,6,6c0,1.5-0.6,3-1.6,4.1L13.8,13.7z M6,1.6c-2.3-0.1-4.3,1.6-4.5,4c0,0.1,0,0.3,0,0.4c0,2.5,1.9,4.5,4.4,4.6
                s4.5-1.9,4.6-4.4C10.5,3.7,8.6,1.6,6,1.6C6.1,1.6,6,1.6,6,1.6z"
                  />
                </svg>
                No results found
              </div>
              <hr className="header-search-empty__line" />
              <div className="header-search-empty__description">
                Try adjusting the terms of your search, you can search by game
                titles, publishers, and developers.
              </div>
              <Link to="/games" className="header-search-empty__btn">
                Browse all games
              </Link>
            </div>
          </div>
        ) : null}
      </React.Fragment>
      /* <div className="header-search__results"></div>  */
    );
  }
}

export default HeaderSearch;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderTray from './header_tray/header_tray';
import HeaderSearch from './header_search/header_search';
import { searchGameByTitle } from '../../../store/actions/games_actions';

class Header extends Component {
  state = {
    logoStatus: true,
    inputValue: '',
    searchedGame: [],
    errorTab: false,
    linkClickStatus: false
  };

  searchBar = value => {
    if (value) {
      this.setState({
        logoStatus: false
      });
    }
    if (!value) {
      this.setState({
        logoStatus: true
      });
    }
    this.props.searchBar(value);
  };

  clearStore = () => {
    this.setState({
      searchedGame: [],
      errorTab: false
    });
  };

  inputStatus = value => {
    this.setState({
      inputValue: value
    });
  };

  searchValue = search => {
    if (search !== '') {
      this.props.dispatch(searchGameByTitle(search));
      setTimeout(() => {
        if (this.props.games.searchedGame) {
          this.setState({
            searchedGame: this.props.games.searchedGame,
            errorTab: true
          });
        }
      }, 500);
    }
  };

  linkClickStatus = value => {
    this.setState(
      {
        linkClickStatus: value
      },
      () => this.refs.child.hideSearchBar()
    );
  };

  render() {
    return (
      <header className="header__bck">
        <div className="header__container">
          <div className="header__menu">
            <div className="header__item header__store">
              <Link to="/games">
                STORE <FontAwesomeIcon icon={faAngleDown} />
              </Link>
            </div>
            <div className="header__item">
              BROWSE <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="header__item">ON SALE</div>
          </div>
          <HeaderTray
            searchBar={value => this.searchBar(value)}
            searching={search => this.searchValue(search)}
            inputStatus={value => this.inputStatus(value)}
            clearStore={() => this.clearStore()}
            searchedGameLength={this.state.searchedGame}
            ref="child"
          />
          <HeaderSearch
            searchResult={this.state.searchedGame}
            errorTab={this.state.errorTab}
            linkClickStatus={value => this.linkClickStatus(value)}
          />
          {this.state.logoStatus ? (
            <div className="logo__container">
              <Link to="/">
                <div className="logo__name">JetDeals</div>
              </Link>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(Header);

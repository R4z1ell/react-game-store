import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderTray from './header_tray/header_tray';
import HeaderSearch from './header_search/header_search';
import { getGamesToStore } from '../../../store/actions/games_actions';

class Header extends Component {
  state = {
    logoStatus: true,
    inputValue: '',
    fromStore: [],
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
  };

  clearStore = () => {
    this.setState({
      fromStore: [],
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
      this.props.dispatch(getGamesToStore('', [], '', search));
      setTimeout(() => {
        if (this.props.games.toStore) {
          this.setState({
            fromStore: this.props.games.toStore,
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
            fromStoreLength={this.state.fromStore}
            ref="child"
          />
          <HeaderSearch
            searchResult={this.state.fromStore}
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

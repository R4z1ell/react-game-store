import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import HeaderTray from './header_tray/header_tray';
import HeaderSearch from './header_search/header_search';
import HeaderLogin from './header_login/header_login';
import HeaderAccount from './header_account/header_account';
import { searchGameByTitle } from '../../../store/actions/games_actions';
import { logoutUser } from '../../../store/actions/user_actions';

class Header extends Component {
  state = {
    logoStatus: true,
    inputValue: '',
    searchedGame: [],
    errorTab: false,
    linkClickStatus: false,
    active: false
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

  showSignIn = () => {
    this.setState({
      active: true
    });
  };

  hideSignIn = () => {
    this.setState({
      active: false
    });
  };

  showLoginModal = value => {
    this.props.showLoginModal(value);
  };

  showSignUpModal = value => {
    this.props.showSignUpModal(value);
  };

  logoutHandler = () => {
    this.props.dispatch(logoutUser()).then(response => {
      if (response.payload.success) {
        this.props.history.push('/');
      }
    });
  };

  hideHeaderSearch = () => {
    this.setState({
      searchedGame: [],
      errorTab: false,
      logoStatus: true
    });
  };

  closeHeaderAccount = () => {
    this.setState({
      active: false
    });
  };

  triangleRightStyle = () => {
    if (this.props.user.userData) {
      if (!this.props.user.userData.isAuth) {
        return '87%';
      } else {
        return '84.3%';
      }
    }
  };

  render() {
    const active = this.state.active ? 'block' : 'none';
    const triangleClass = this.state.active
      ? 'menu-triangle menu-triangle-animated'
      : 'menu-triangle';

    return (
      <header className="header__bck">
        <div className="header__container">
          <div className="header__menu">
            <div className="header__item header__store">
              <Link to="/games">STORE</Link>
            </div>
            <div
              className="header__item header__signIn"
              style={{ paddingRight: '0px' }}
              onMouseEnter={this.showSignIn}
              onMouseLeave={this.hideSignIn}
            >
              {this.props.user.userData ? (
                this.props.user.userData.isAuth ? (
                  <img
                    src="/images/avatar_small.jpg"
                    alt="avatar-small"
                    className="header__img-avatar"
                  />
                ) : null
              ) : null}
              {this.props.user.userData ? (
                !this.props.user.userData.isAuth ? (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className="header__sign-in">SIGN IN</p>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="header__dropdown-icon"
                    />
                  </div>
                ) : (
                  <div style={{ display: 'inline-block' }}>
                    <p className="header__logged-in">
                      {this.props.user.userData.username}
                    </p>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="header__dropdown-icon"
                    />
                  </div>
                )
              ) : null}
              <p
                className={triangleClass}
                style={{ display: active, right: this.triangleRightStyle() }}
              />
              {this.state.active && !this.props.user.userData.isAuth ? (
                <HeaderLogin
                  showLoginModal={value => this.showLoginModal(value)}
                  showSignUpModal={value => this.showSignUpModal(value)}
                />
              ) : null}
              {this.state.active && this.props.user.userData.isAuth ? (
                <HeaderAccount
                  closeHeaderAccount={this.closeHeaderAccount}
                  userData={this.props.user.userData}
                  logoutUser={this.logoutHandler}
                />
              ) : null}
            </div>
          </div>
          <HeaderTray
            searchBar={value => this.searchBar(value)}
            searching={search => this.searchValue(search)}
            inputStatus={value => this.inputStatus(value)}
            clearStore={() => this.clearStore()}
            searchedGameLength={this.state.searchedGame}
            active={this.state.active}
            auth={this.props.user.userData}
            hideHeaderSearch={this.hideHeaderSearch}
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
    games: state.games,
    user: state.user,
    site: state.site
  };
};

export default connect(mapStateToProps)(withRouter(Header));

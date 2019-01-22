import React, { Component } from 'react';
import { connect } from 'react-redux';

import './layout.scss';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import HeaderSearch from '../components/Header_footer/Header/header_search/header_search';
import { getGamesToStore } from '../store/actions/games_actions';

class Layout extends Component {
  state = {
    inputStatus: '',
    fromStore: [],
    errorTab: false
  };

  checkInputStatus = value => {
    this.setState({
      inputStatus: value
    });
  };

  clearStore = () => {
    this.setState({
      fromStore: [],
      errorTab: false
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
      }, 1000);
    }
  };

  render() {
    return (
      <div>
        <Header
          checkInputStatus={value => this.checkInputStatus(value)}
          searchValue={search => this.searchValue(search)}
          clearStore={() => this.clearStore()}
          fromStoreLength={this.state.fromStore}
        />
        <HeaderSearch
          //inputValue={this.state.inputStatus}
          searchResult={this.state.fromStore}
          errorTab={this.state.errorTab}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(Layout);

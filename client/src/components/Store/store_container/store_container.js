import React, { Component } from 'react';
import { connect } from 'react-redux';

import './store_container.scss';

import { price, languages } from '../../utils/Form/fixed_categories';
import {
  getGenres,
  getGamesToStore,
  getGames
} from '../../../store/actions/games_actions';

import CardBlock from '../../utils/card_block';
import StoreFilters from '../store_filters/store_filters';
import StoreSearch from '../store_search/store_search';

class StoreContainer extends Component {
  state = {
    slideSidebar: true,
    languages: [],
    price: [],
    genres: null,
    search: null
  };

  componentDidMount() {
    this.props.dispatch(getGames());
    this.props.dispatch(getGenres());
    //window.scrollTo(0, 0);
  }

  handlePriceFilters = item => {
    let price = '';
    let languages = this.state.languages;
    let genres = this.state.genres !== null ? this.state.genres : '';
    let search = this.state.search !== null ? this.state.search : '';

    if (item) {
      if (item.styleName === 'under5') price = 'u5';
      if (item.styleName === 'under10') price = 'u10';
      if (item.styleName === 'under15') price = 'u15';
      if (item.styleName === 'under25') price = 'u25';
      if (item.styleName === 'above25') price = 'a25';

      this.setState({ price }, () =>
        this.props.dispatch(getGamesToStore(price, languages, genres, search))
      );
    }

    if (!item && this.state.languages.length === 0) {
      this.props.dispatch(getGamesToStore('', [], genres, search));
    }

    if (!item && this.state.languages.length > 0) {
      this.props.dispatch(
        getGamesToStore('', this.state.languages, genres, search)
      );
    }
  };

  handleLanguagesFilters = item => {
    let newLanguages = [...this.state.languages];
    let genres = this.state.genres !== null ? this.state.genres : '';
    let search = this.state.search !== null ? this.state.search : '';

    if (item) {
      if (newLanguages.length === 0) {
        newLanguages.push(item.name);
        this.setState({ languages: newLanguages });
        this.props.dispatch(
          getGamesToStore(this.state.price, newLanguages, genres, search)
        );
      }

      if (newLanguages.length > 0) {
        if (!newLanguages.includes(item.name)) {
          newLanguages.push(item.name);
          this.setState({ languages: newLanguages });
          this.props.dispatch(
            getGamesToStore(this.state.price, newLanguages, genres, search)
          );
        }
      }

      if (this.state.languages.includes(item.name)) {
        const index = newLanguages.indexOf(item.name);
        newLanguages.splice(index, 1);
        this.setState({ languages: newLanguages });
        this.props.dispatch(
          getGamesToStore(this.state.price, newLanguages, genres, search)
        );
      }
    }

    if (!item && this.state.price.length === 0) {
      this.props.dispatch(getGamesToStore('', [], genres, search));
    }

    if (!item && this.state.price.length > 0) {
      this.props.dispatch(
        getGamesToStore(this.state.price, [], genres, search)
      );
    }
  };

  clearStateLanguages = () => {
    this.setState({
      languages: []
    });
  };

  clearStatePrice = () => {
    this.setState({
      price: []
    });
  };

  slideSidebar = value => {
    this.setState({
      slideSidebar: value
    });
  };

  searching = (genres, value) => {
    this.props.dispatch(
      getGamesToStore(this.state.price, this.state.languages, genres, value)
    );
    this.setState({
      genres,
      search: value
    });
  };

  render() {
    let slideSidebar = this.state.slideSidebar ? '--slide' : '';

    return (
      <div className="container--catalog">
        <StoreSearch
          slideSidebar={this.slideSidebar}
          genres={this.props.games.genres}
          searching={(genres, value) => this.searching(genres, value)}
        />
        <div className={`catalog__body catalog__body${slideSidebar}`}>
          <div className="catalog__sidebar">
            <StoreFilters
              title={'Price'}
              price={price}
              clearStatePrice={this.clearStatePrice}
              handlePriceFilters={item => this.handlePriceFilters(item)}
            />
            <StoreFilters
              title={'Language'}
              languages={languages}
              clearStateLanguages={this.clearStateLanguages}
              handleLanguagesFilters={item => this.handleLanguagesFilters(item)}
            />
          </div>
          <div className="catalog__games-list">
            {this.props.games.allGames && !this.props.games.toStore ? (
              <CardBlock
                list={this.props.games.allGames}
                slide={this.state.slideSidebar}
              />
            ) : (
              <CardBlock
                list={this.props.games.toStore}
                slide={this.state.slideSidebar}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(StoreContainer);

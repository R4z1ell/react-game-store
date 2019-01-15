import React, { Component } from 'react';
import { connect } from 'react-redux';

import './store_container.scss';

import { price, languages } from '../../utils/Form/fixed_categories';
import {
  getGenres,
  getGames,
  getGamesToStore
} from '../../../store/actions/games_actions';

import CardBlock from '../../utils/card_block';
import StoreFilters from '../store_filters/store_filters';
import StoreSearch from '../store_search/store_search';

class StoreContainer extends Component {
  state = {
    slideSidebar: true,
    languages: [],
    price: []
  };

  componentDidMount() {
    this.props.dispatch(getGames());
    this.props.dispatch(getGenres());
    //window.scrollTo(0, 0);
  }

  handlePriceFilters = item => {
    let price = '';
    let languages = this.state.languages;

    if (item) {
      if (item.styleName === 'under5') price = 'u5';
      if (item.styleName === 'under10') price = 'u10';
      if (item.styleName === 'under15') price = 'u15';
      if (item.styleName === 'under25') price = 'u25';
      if (item.styleName === 'above25') price = 'a25';

      this.setState({ price }, () => console.log(this.state.price));
      this.props.dispatch(getGamesToStore(price, languages));
    }

    if (!item && this.state.languages.length === 0) {
      this.props.dispatch(getGamesToStore('', []));
    }

    if (!item && this.state.languages.length > 0) {
      this.props.dispatch(getGamesToStore('', this.state.languages));
    }
  };

  handleLanguagesFilters = item => {
    let newLanguages = [...this.state.languages];

    if (item) {
      if (newLanguages.length === 0) {
        newLanguages.push(item.name);
        this.setState({ languages: newLanguages });
        this.props.dispatch(getGamesToStore(this.state.price, newLanguages));
      }

      if (newLanguages.length > 0) {
        if (!newLanguages.includes(item.name)) {
          newLanguages.push(item.name);
          this.setState({ languages: newLanguages });
          this.props.dispatch(getGamesToStore(this.state.price, newLanguages));
        }
      }

      if (this.state.languages.includes(item.name)) {
        const index = newLanguages.indexOf(item.name);
        newLanguages.splice(index, 1);
        this.setState({ languages: newLanguages });
        this.props.dispatch(getGamesToStore(this.state.price, newLanguages));
      }
    }

    if (!item && this.state.price.length === 0) {
      this.props.dispatch(getGamesToStore('', []));
    }

    if (!item && this.state.price.length > 0) {
      this.props.dispatch(getGamesToStore(this.state.price, []));
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

  render() {
    let slideSidebar = this.state.slideSidebar ? '--slide' : '';

    return (
      <div className="container--catalog">
        <StoreSearch
          slideSidebar={this.slideSidebar}
          genres={this.props.games.genres}
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

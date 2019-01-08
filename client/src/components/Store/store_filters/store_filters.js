import React, { Component } from 'react';

import './store_filters.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class StoreFilters extends Component {
  state = {
    collapsedFilter: false,
    under5: '',
    under10: '',
    under15: '',
    under25: '',
    above25: '',
    discounted: '',
    en: false,
    de: false,
    fr: false,
    es: false,
    it: false,
    pt: false,
    ru: false,
    pl: false,
    jp: false,
    cz: false,
    du: false,
    cn: false,
    ko: false,
    tr: false
  };

  collapseFilter = () => {
    this.setState({
      collapsedFilter: !this.state.collapsedFilter
    });
  };

  toggleSelected = item => {
    this.setState({
      [item.styleName]: item.styleName
    });
  };

  render() {
    let collapsedFilter = this.state.collapsedFilter ? '--collapsed' : '';

    return (
      <div className={`filter__item filter__item${collapsedFilter}`}>
        <div className="filter__header" onClick={() => this.collapseFilter()}>
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
            <div className="filter__title">{this.props.title}</div>
            <div className="filter__arrow-wrapper">
              <FontAwesomeIcon icon={faAngleDown} className="filter__arrow" />
            </div>
          </div>
        </div>
        <div className="filter__item-options">
          {this.props.price
            ? this.props.price.map((item, i) => (
                <label
                  className="option__item"
                  onClick={() => this.toggleSelected(item)}
                  key={i}
                >
                  {this.state[item.styleName] ? (
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
                  <input
                    type="radio"
                    className="option__checkbox"
                    value={item.styleName}
                    checked={this.state[item.styleName] === item.styleName}
                    onChange={this.toggleSelected}
                  />
                  <span
                    className={`option__text option__text--${item.styleName}`}
                  >
                    {item.name}
                  </span>
                </label>
              ))
            : null}
          {this.props.languages
            ? this.props.languages.map((item, i) => (
                <label
                  className="option__item"
                  onClick={() => this.toggleSelected(item)}
                  key={i}
                >
                  {this.state[item.styleName] ? (
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
                  <input
                    type="radio"
                    className="option__checkbox"
                    value={item.styleName}
                    checked={this.state[item.styleName] === item.styleName}
                    onChange={this.toggleSelected}
                  />
                  <span
                    className={`option__text option__text--${item.styleName}`}
                  >
                    {item.name}
                  </span>
                </label>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default StoreFilters;

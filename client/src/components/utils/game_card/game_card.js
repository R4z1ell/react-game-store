import React from 'react';
import { Link } from 'react-router-dom';

import './game_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FaWindows } from 'react-icons/fa';

const GameCard = props => {
  return props.grid ? (
    <Link to={`/game/${props.title}`}>
      <div className="game-card">
        <div className="game-card__cover">
          <img src={props.images.card} alt="cover" />
        </div>
        <div className="game-card__info">
          <div className="game-card__platform">
            <img src="/images/windows.png" alt="window-logo" />
          </div>
          <div className="game-card__buy-block">
            <FontAwesomeIcon icon={faEuroSign} />
            {props.prices.basePrice / 100}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="product-tile product-tile--list">
      <Link to={`/game/${props.title}`} className="product-tile__content">
        <div className="product-tile__cover">
          <img
            src={props.images.card}
            alt="cover"
            className="product-tile__cover-img"
          />
        </div>
        <div className="product-tile__title">
          {props.title}
          <div className="product-tile__platform">
            <FaWindows
              fill="#999"
              size="0.9em"
              className="product-tile__windows"
            />
          </div>
        </div>
        <div className="product-tile__info">
          <div className="product-tile__buy-block">
            <div className="product-tile__prices">
              {/* <span className="product-tile__discount"></span> */}
              <div className="product-tile__prices-inner">
                <span className="product-tile__price-discounted">
                  <FontAwesomeIcon icon={faEuroSign} />
                  {props.prices.basePrice / 100}
                </span>
              </div>
            </div>
            {/* <button className="product-tile__button"></button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;

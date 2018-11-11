import React from 'react';

import './game_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const GameCard = props => {
  return (
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
  );
};

export default GameCard;

import React from 'react';
import { Link } from 'react-router-dom';

import './game_card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

// todo --> background: #ececec; box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);

const GameCard = props => {
  return (
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
  );
};

export default GameCard;

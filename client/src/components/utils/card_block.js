import React from 'react';

import GameCard from './game_card/game_card';

const CardBlock = props => {
  const renderCards = () =>
    props.list
      ? props.list.map((card, i) => <GameCard key={i} {...card} />)
      : null;

  return (
    <div className="card_block" style={{ marginTop: '40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex'
          }}
        >
          {renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;

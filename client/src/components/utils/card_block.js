import React from 'react';

import GameCard from './game_card/game_card';

const CardBlock = props => {
  const renderCardsForHome = () =>
    props.list
      ? props.list.map((card, i) => {
          if (i <= 3 && props.fromHome) {
            return (
              <GameCard
                key={i}
                {...card}
                grid={props.gridView}
                list={props.listView}
              />
            );
          }
          return null;
        })
      : null;

  const renderCards = () =>
    props.list
      ? props.list.map((card, i) => (
          <GameCard
            key={i}
            {...card}
            grid={props.gridView}
            list={props.listView}
          />
        ))
      : null;

  let slideStatus = props.slide ? '' : 'card_wrapper--slide';
  let gridStatus = props.gridView ? 'card_wrapper--grid' : '';
  let listStatus = props.listView ? 'card_wrapper--list' : '';

  return (
    <div className="card_block" style={{ marginTop: '40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex'
          }}
          className={`card_wrapper ${slideStatus} ${gridStatus} ${listStatus}`}
        >
          {props.fromHome
            ? renderCardsForHome(props.list)
            : renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;

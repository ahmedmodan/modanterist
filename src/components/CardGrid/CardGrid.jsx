import React, { PropTypes } from 'react';

import Card from './../card/card.jsx';

require('./cardgrid.scss');

export function CardGrid({ arrOfCards }) {
  return (
    <div className="card-columns">
      { arrOfCards.map((card) => <Card key={ card } />) }
    </div>
  );
}

CardGrid.propTypes = {
  arrOfCards: PropTypes.array.isRequired
};

export default CardGrid;

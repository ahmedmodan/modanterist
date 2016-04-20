import React, { PropTypes } from 'react';

import Card from './../card/card';

require('./cardgrid.scss');

export function CardGrid({ arrOfCards }) {
  return (
    <div className="card-columns card-grid">
      { arrOfCards.map((card) => <Card key={ card._id } {...card} />) }
    </div>
  );
}

CardGrid.propTypes = {
  arrOfCards: PropTypes.object.isRequired
};

export default CardGrid;

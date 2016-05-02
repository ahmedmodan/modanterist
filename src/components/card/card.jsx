import React, { PropTypes } from 'react';

require('./modanteristcard.scss');

export function Card({ title, description, image_url, tags_ids }) {
  const tags = tags_ids.join(' ');
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={ image_url } alt={ title } />
        <span className="card-title">
          { title }
        </span>
      </div>
      <div className="card-content">
        <p>{ description }</p>
      </div>
      <div className="card-action">
        { tags }
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags_ids: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image_url: PropTypes.string.isRequired,
};


export default Card;

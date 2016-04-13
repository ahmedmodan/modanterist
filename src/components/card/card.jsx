import React, { PropTypes } from 'react';

require('./modanteristcard.scss');

export function Card({ title, description, image_url, link, tags_ids }) {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={ image_url } alt="placeholder" />
      <div className="card-block">
        <p className="text-muted">
          <small>this is the amount of pins</small>
        </p>
        <h5 className="card-title">
          <strong>{ title }</strong>
        </h5>
        <p className="card-text">{ description }</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p><small>this is the board the pin came from</small></p>
        </li>
        <li className="list-group-item">
          <p className="text-muted"><small>{ tags_ids.map(tag => tag) }</small></p>
        </li>
      </ul>
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

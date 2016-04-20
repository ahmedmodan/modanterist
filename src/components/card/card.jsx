import React, { PropTypes } from 'react';

require('./modanteristcard.scss');

export function Card({ title, description, image_url, tags_ids }) {
  const tags = tags_ids.join(' ');
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={ image_url } alt="placeholder" />
      <div className="card-block">
        <h5 className="card-title">
          <strong>{ title }</strong>
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p className="card-text">{ description }</p>
        </li>
        <li className="list-group-item">
          <p className="text-muted"><small>{ tags }</small></p>
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

import React, { PropTypes } from 'react';

const Row = ({ children }) => (
  <div className="row">
    { children }
  </div>
);

Row.propTypes = {
  children: PropTypes.element.isRequired
};

export default Row;

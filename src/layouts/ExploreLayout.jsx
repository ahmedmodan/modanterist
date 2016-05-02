import React, { PropTypes } from 'react';


require('./layouts.scss');

export function ExploreLayout({ children }) {
  return (
    <div>
      <div className="explore-content">
        { children }
      </div>
    </div>
  );
}

ExploreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default ExploreLayout;

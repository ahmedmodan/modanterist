import React, { PropTypes } from 'react';

function LandingLayout({ children }) {
  return (
    <div>
      <h1>Modanterist</h1>
      <p>This is the landing page layout.</p>
      {children}
    </div>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.element
};

export default LandingLayout;

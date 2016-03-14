import React, { PropTypes } from 'react';

function CoreLayout({ children }) {
  return (
    <div>
      <h3>This is the Counter page layout</h3>
      {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};

export default CoreLayout;

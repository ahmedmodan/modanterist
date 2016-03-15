import React, { PropTypes } from 'react';

function CoreLayout({ children }) {
  return (
    <div className="container-fluid">
      {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};

export default CoreLayout;

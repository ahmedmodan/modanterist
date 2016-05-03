import React, { PropTypes } from 'react';

export function SmallFormInput(props) {
  const { field, inputLabel, optionalDescriptor } = props;
  return (
    <div className="input-field">
      <label htmlFor="input-small">
        { inputLabel }
        <small>{ optionalDescriptor }</small>
      </label>
      <input type="text"
        id="input-small"
        { ...field }
      />
    </div>
  );
}

SmallFormInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  optionalDescriptor: PropTypes.string,
  field: PropTypes.object.isRequired
};

export default SmallFormInput;

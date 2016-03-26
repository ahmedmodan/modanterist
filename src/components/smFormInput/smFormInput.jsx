import React, { PropTypes } from 'react';

function SmallFormInput(props) {
  const { field, inputLabel, optionalDescriptor } = props;
  return (
    <div className="form-group">
      <label htmlFor="input-small">
        { inputLabel }
        <small className="text-muted">{ optionalDescriptor }</small>
      </label>
      <input type="text"
        className="form-control form-control-sm"
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

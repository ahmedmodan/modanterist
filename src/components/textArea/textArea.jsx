import React, { PropTypes } from 'react';

export function TextArea(props) {
  const { field, inputLabel, optionalDescriptor, rows, columns } = props;
  return (
    <div className="form-group">
      <label htmlFor="text-area-component">
        { inputLabel }
        { optionalDescriptor }
      </label>
      <textarea
        className="form-control"
        id="text-area-component"
        rows={ rows }
        columns={ columns }
        { ...field }
      />
    </div>
  );
}

TextArea.propTypes = {
  field: PropTypes.object.isRequired,
  inputLabel: PropTypes.string.isRequired,
  optionalDescriptor: PropTypes.string,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number
};

export default TextArea;

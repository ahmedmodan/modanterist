import React, { PropTypes } from 'react';

export function TextArea(props) {
  const { field, inputLabel, optionalDescriptor, rows, columns } = props;
  return (
    <div className="input-field">
      <label htmlFor="text-area-component">
        { inputLabel }
        <small>{ optionalDescriptor }</small>
      </label>
      <textarea
        className="materialize-textarea"
        id="text-area-component"
        rows={ rows }
        columns={ columns }
        { ...field }
        value={ field.value || '' }
        spellCheck="true"
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

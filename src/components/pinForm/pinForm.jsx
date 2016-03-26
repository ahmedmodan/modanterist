import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import DropZone from 'react-DropZone';
import SmallFormInput from './../smFormInput/smFormInput.jsx';

export class PinForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  handleImage(imageFile) {
    return imageFile;
  }

  render() {
    const { fields: { title, description, tags, link, image }, handleSubmit } = this.props;
    return (
      <form className="form-horizontal" onSubmit={ handleSubmit } >
        <div className="form-group">
          <DropZone
            { ...image }
            onDrop={ this.handleImage }
          >
            <div>Drag and Drop your image here, or click to select an image.</div>
          </DropZone>
          <div>
          </div>
        </div>
        <SmallFormInput field={ title } inputLabel="Title" />
        <div className="form-group">
          <label htmlFor="pin-description">Description</label>
          <textarea
            className="form-control"
            id="pin-description"
            rows="3"
            { ...description }
          />
        </div>
        <SmallFormInput field={ link } inputLabel="Link" />
        <SmallFormInput field={ tags }
          inputLabel="Tags"
          optionalDescriptor=" separated by commas"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'postPin',
  fields: ['title', 'description', 'tags', 'link', 'image']
})(PinForm);

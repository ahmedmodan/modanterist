import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import DropZone from 'react-DropZone';

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
        <div className="form-group">
          <label htmlFor="pin-title">Title</label>
          <input type="text"
            className="form-control form-control-sm"
            id="pin-title"
            { ...title }
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-description">Description</label>
          <textarea
            className="form-control"
            id="pin-description"
            rows="3"
            { ...description }
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-link">Link</label>
          <input type="text"
            className="form-control form-control-sm"
            id="pin-link"
            { ...link }
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin-tags">
            Tags
            <p className="text-muted"><small>(separated by a comma)</small></p>
          </label>
          <input type="text"
            className="form-control form-control-sm"
            id="pin-tags"
            { ...tags }
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'postPin',
  fields: ['title', 'description', 'tags', 'link', 'image']
})(PinForm);

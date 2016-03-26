import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import DropZone from 'react-DropZone';
import SmallFormInput from './../smallFormInput/smallFormInput.jsx';
import TextArea from './../textArea/textArea.jsx';

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
        </div>
        <SmallFormInput field={ title } inputLabel="Title" />
        <TextArea field={ description }
          inputLabel="Description"
          rows={ 3 }
        />
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

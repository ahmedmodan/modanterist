import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { actions as pinActions } from './../../redux/modules/explore';

import SmallFormInput from './../smallFormInput/smallFormInput';
import TextArea from './../textArea/textArea';
import ImageUploader from './../imageUploader/ImageUploader';

const mapStateToProps = ({ explore }) => ({
  imagePreview: explore.get('imagePreview')
});

export class PinForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    savePin: PropTypes.func.isRequired,
    renderPreview: PropTypes.func.isRequired,
    imagePreview: PropTypes.string
  };

  handleImage(imageFile) {
    this.props.renderPreview(imageFile[0].preview);
    return imageFile;
  }

  render() {
    const { fields: {
      title, description, tags, link, image
    }, handleSubmit, imagePreview } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.props.savePin) } >
        <div className="col s10 offset-s1">
          <ImageUploader
            field={ image }
            imageHandler={ ::this.handleImage }
            filePreview={ imagePreview }
          />
        </div>
        <div className="col s12">
          <SmallFormInput field={ title } inputLabel="Title" />
        </div>
        <div className="col s12">
          <TextArea field={ description } inputLabel="Description" rows={ 3 } />
        </div>
        <div className="col s12">
          <SmallFormInput field={ link } inputLabel="Link" />
        </div>
        <div className="col s12">
          <SmallFormInput field={ tags } inputLabel="Tags"
            optionalDescriptor=" separated by a space"
          />
        </div>
        <button type="submit" className="btn waves-effect waves-light">Save Pin</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'savePin',
  fields: ['title', 'description', 'tags', 'link', 'image']
}, mapStateToProps, pinActions)(PinForm);

import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import DropZone from 'react-dropzone';


export class PinButtonModal extends React.Component {
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
      <div>
        <button className="btn btn-secondary"
          id="pin-button"
          data-toggle="modal"
          data-target="#myModal"
        >
          PIN
        </button>

        <div className="modal fade" id="myModal"
          tabIndex="-1" role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        > /
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times; </span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Create a Pin</h4>
              </div>
              <div className="modal-body">


                <form className="form-horizontal" onSubmit={ handleSubmit } >
                  <div className="form-group">
                    <DropZone
                      { ...image }
                      onDrop={ ::this.handleImage }
                    >
                      <div>Drag and Drop your image here, or click to select and image.</div>
                    </DropZone>
                    <div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pin-title">Title</label>
                    <input type="text"
                      className="form-control
                      form-control-sm"
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
                      className="form-control
                      form-control-sm"
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
                      className="form-control
                      form-control-sm"
                      id="pin-tags"
                      { ...tags }
                    />
                  </div>
                </form>


              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'postPin',
  fields: ['title', 'description', 'tags', 'link', 'image']
})(PinButtonModal);

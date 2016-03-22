import React, { PropTypes } from 'react';
// import { reduxForm } from 'redux-form';

export default class PinButtonModal extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }


  render() {
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
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times; </span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>there is stuff here</p>
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


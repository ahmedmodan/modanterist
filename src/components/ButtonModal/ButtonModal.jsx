import React, { PropTypes } from 'react';

export function ButtonModal({ buttonName, modalTitle, modalBody, buttonAction }) {
  return (
    <div>
      <button className="btn btn-secondary"
        id="pin-button"
        onClick={ buttonAction }
      >
        { buttonName }
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
              <h4 className="modal-title" id="myModalLabel">{ modalTitle }</h4>
            </div>
            <div className="modal-body">
              { modalBody }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ButtonModal.propTypes = {
  buttonName: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.element.isRequired,
  saveButtonName: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default ButtonModal;

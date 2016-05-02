import React, { PropTypes } from 'react';

export function ButtonModal({ buttonName, modalTitle, modalBody, buttonAction }) {
  return (
    <div>
      <button className="btn-floating btn-large waves-effect waves-light"
        id="pin-button"
        onClick={ buttonAction }
      >
        { buttonName }
      </button>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>{ modalTitle }</h4>
          { modalBody }
        </div>
      </div>
    </div>
  );
}

ButtonModal.propTypes = {
  buttonName: PropTypes.object.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalBody: PropTypes.element.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default ButtonModal;

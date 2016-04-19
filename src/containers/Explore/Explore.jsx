import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPins, openModal } from './../../redux/modules/explore';

import NavBar from './../../components/navbar/navbar';
import CardGrid from './../../components/CardGrid/CardGrid';
import ButtonModal from './../../components/ButtonModal/ButtonModal';
import PinForm from './../../components/pinForm/pinForm';

require('./explore.scss');

const mapStateToProps = ({ explore }) => ({
  pins: explore.get('pins'),
  modalOpenStatus: explore.get('modalOpenStatus')
});


export class Explore extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    pins: PropTypes.array.isRequired,
    modalOpenStatus: PropTypes.object.isRequired,
    getPins: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
  }


  componentWillMount() {
    this.props.getPins(['art', 'diy', 'food', 'fitness']);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalOpenStatus.status === false) {
      $('#myModal').modal('hide');
    }
    if (nextProps.modalOpenStatus.status === true) {
      $('#myModal').modal('show');
    }
  }

  handleModalOpen() {
    this.props.openModal();
  }

  get pinFormForModal() {
    return <PinForm />;
  }

  render() {
    return (
      <div className="card-grid-container">
        <NavBar location={this.props.location} />
        <CardGrid arrOfCards={ this.props.pins } />
        <ButtonModal className="pin-button"
          buttonName="PIN"
          buttonAction={ ::this.handleModalOpen }
          modalTitle="Create a Pin"
          saveButtonName="Save Pin"
          modalBody={ this.pinFormForModal }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPins, openModal })(Explore);

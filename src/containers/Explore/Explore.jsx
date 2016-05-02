import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPins, openModal, setCloseState } from './../../redux/modules/explore';

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
    pins: PropTypes.object.isRequired,
    modalOpenStatus: PropTypes.object.isRequired,
    getPins: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    setCloseState: PropTypes.func.isRequired,
  }


  componentWillMount() {
    this.props.getPins(['art', 'diy', 'food', 'fitness']);
    this.props.setCloseState();
  }

  componentDidMount() {

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.modalOpenStatus.status === false) {
      $('#modal1').closeModal();
    }
    if (nextProps.modalOpenStatus.status === true) {
      $('#modal1').openModal();
    }
  }

  componentWillUnmount() {
    this.props.setCloseState();
  }


  handleModalOpen() {
    this.props.openModal();
  }

  get pinFormForModal() {
    return <PinForm />;
  }

  get saveButton() {
    return <i className="material-icons">add</i>;
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location} />
        <div className="card-grid-container">
          <CardGrid arrOfCards={ this.props.pins } />
          <ButtonModal className="pin-button"
            buttonName={ this.saveButton }
            buttonAction={ ::this.handleModalOpen }
            modalTitle="Create a Pin"
            modalBody={ this.pinFormForModal }
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPins, openModal, setCloseState })(Explore);

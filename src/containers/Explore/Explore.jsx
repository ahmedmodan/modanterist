import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPins } from './../../redux/modules/pin.jsx';

import NavBar from './../../components/navbar/navbar';
import CardGrid from './../../components/CardGrid/CardGrid';
import ButtonModal from './../../components/ButtonModal/ButtonModal';
import PinForm from './../../components/pinForm/pinForm';

require('./explore.scss');

const mapStateToProps = (state) => ({
  pins: state.pin.get('pins')
});

export class Explore extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    pins: PropTypes.array,
    getPins: PropTypes.func.isRequired,
  }


  componentWillMount() {
    this.props.getPins(['art', 'diy', 'food', 'fitness']);
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
          modalTitle="Create a Pin"
          saveButtonName="Save Pin"
          modalBody={ this.pinFormForModal }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, { getPins })(Explore);

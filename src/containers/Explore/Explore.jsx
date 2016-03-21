import React, { PropTypes } from 'react';

import NavBar from './../../components/navbar/navbar.jsx';
import CardGrid from './../../components/CardGrid/CardGrid.jsx';

export class Explore extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location} />
        <CardGrid arrOfCards={[1, 2, 3, 4, 5]} />
      </div>
    );
  }
}

export default Explore;

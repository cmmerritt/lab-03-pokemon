import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.css';

class PokeList extends Component {

  render() {
    const { pokes } = this.props;

    console.log(pokes);

    return (
      <ul className="PokeList">
        {pokes.map(poke => (
          <PokeItem key={poke._id} poke={poke}/>
        ))}
      </ul>
    );
  }

}

export default PokeList;
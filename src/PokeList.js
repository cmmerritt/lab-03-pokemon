import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import './PokeList.css';

class PokeList extends Component {

  render() {
    return (
      <ul className="PokeList">
        <PokeItem/>
      </ul>
    );
  }

}

export default PokeList;
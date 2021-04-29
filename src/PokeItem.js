import React, { Component } from 'react';
import './PokeItem.css';

class PokeItem extends Component {

  render() {
    const poke = this.props.poke;

    return (
      <li className="PokeItem ">
        <h2>{poke.pokemon}</h2>
        <img src={poke.url_image} alt={poke.pokemon}/>
        <p>Type 1: {poke.type_1}</p>
        <p>Type 2: {poke.type_1}</p>
      </li>
    );
  }

}

export default PokeItem;
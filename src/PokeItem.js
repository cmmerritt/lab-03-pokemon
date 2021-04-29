import React, { Component } from 'react';
import './PokeItem.css';

class PokeItem extends Component {

  render() {
    return (
      <li className="PokeItem ">
        <h2>Venusaur</h2>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png" alt="venusaur"/>
        <p>Type 1: Grass</p>
        <p>Type 2: Poison</p>
      </li>
    );
  }

}

export default PokeItem;
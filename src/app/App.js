import React, { Component } from 'react';
import PokeList from '../PokeList';
import request from 'superagent';
import './App.css';

class App extends Component {
  state = {
    pokemons: [],
  }

  async componentDidMount() {
    const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const response = await request.get(url);
    this.setState({ pokemons: response.body.results });
  }
  
  render() {
    return (
      <div className="App">

        <main>
          <PokeList pokes={this.state.pokemons}/>
        </main>
      
      </div>
    );
  }

}

export default App;

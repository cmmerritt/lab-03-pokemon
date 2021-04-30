import React, { Component } from 'react';
import PokeList from '../PokeList';
import request from 'superagent';
import Search from '../Search';
import './App.css';

const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: null,
    loading: false,
  }

  //moved async after componentDidMount and made into arrow function why???

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon(search) {
    this.setState({ loading: true });
    try {
      const response = await request
        .get(url)
        .query({ pokemon: search });

      this.setState({ pokemon: response.body.results });
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search }) => {
    this.fetchPokemon(search);
  }
  
  render() {
    const { pokemon, loading } = this.state;

    return (
      <div className="App">

        <section className="search-options">  
          <Search onSearch={this.handleSearch}/>
          {/* <Paging/> */}
        </section>

        <main>
          {pokemon && pokemon.length
            ? <PokeList pokemon={pokemon}/>
            : <p>Sorry no Pokemon</p>
          }
        </main>
      
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import PokeList from '../PokeList';
import request from 'superagent';
import Search from '../Search';
import Paging from '../Paging';
import './App.css';

const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: null,
    loading: false,
    search: '',
    sort: undefined,
    page: 1
  }

  //moved async after componentDidMount and made into arrow function why???

  componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { search, sort, page } = this.state;
    this.setState({ loading: true });
    try {
      const response = await request
        .get(url)
        .query({ pokemon: search })
        .query({ sort: 'pokemon' })
        .query({ direction: sort })
        .query({ page: page });

      this.setState({ pokemon: response.body.results });
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search, sort }) => {
    this.setState(
      { 
        search: search, 
        sort: sort || undefined, 
        page: 1 
      },
      () => this.fetchPokemon());
  }
  
  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemon()
    );
  }

  handleNextPage = () => {
    this.setState(
      { page: Math.max(this.state.page + 1, 1) },
      () => this.fetchPokemon()
    );
  }

  render() {
    const { pokemon, loading, page } = this.state;

    return (
      <div className="App">

        <section className="search-options">  
          <Search 
            onSearch={this.handleSearch}/>
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}/>
        </section>

        <main>
          {pokemon && pokemon.length
            ? <PokeList pokemon={pokemon}/>
            : <p>Sorry no Pokemon</p>
          }

          {loading && <img className="loading" src="./pokeball-spinner.gif" alt="loading"/>}

        </main>
      
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import PokeList from '../PokeList';
import request from 'superagent';
import Search from '../Search';
import './App.css';

const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {
  state = {
    pokemon: [],
  }

  //moved async after componentDidMount and made into arrow function why???

  componentDidMount = async () => {
    const response = await request.get(url);
    this.setState({ pokemon: response.body.results });
  }

  handleSearch = async ({ search }) => {
    const response = await request
      .get(url)
      .query({ pokemon: search });

    this.setState({ pokemon: response.body.results });
  }
  
  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">

        <section className="search-options">  
          <Search onSearch={this.handleSearch}/>
          {/* <Paging/> */}
        </section>

        <main>
          <PokeList pokemon={this.state.pokemon}/>
        </main>
      
      </div>
    );
  }

}

export default App;

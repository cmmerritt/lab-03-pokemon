import React, { Component } from 'react';
import PokeList from '../PokeList';
import pokemon from '../static-data';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <main>
          <PokeList pokes={pokemon}/>
        </main>
      
      </div>
    );
  }

}

export default App;

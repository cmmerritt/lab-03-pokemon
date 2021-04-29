import React, { Component } from 'react';
import PokeList from '../PokeList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <main>
          <PokeList/>
        </main>
      
      </div>
    );
  }

}

export default App;

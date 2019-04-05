import React, { Component } from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonSearch name="John Doe" numberOfPokemons={5} />
      </div>
    );
  }
}

export default App;

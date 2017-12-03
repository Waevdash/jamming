import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <!-- <SearchBar /> -->
            <!-- <Playlist /> -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;

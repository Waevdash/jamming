import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

const playlistName = 'My Playlist'
const playlistTracks = []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: {
        name: ,
        artist: ,
        album:
      };
    };
  }
  addTrack(track) {
    if (this.state.id)
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

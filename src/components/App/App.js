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
    this.state.addTrack = this.state.addTrack.bind(this)
  }
  addTrack(track) {
    if (!this.state.playlistTracks.id.include(track.id)) {
        let pushTrack = this.state.playlistTrack.push(track)
      this.setState({
          playlistTrack: pushTrack
      })
    }
  }
  removeTrack(track){
    if (this.state.playlistTracks.id.include(track.id)) {
      let filterTrack = this.state.playlistTrack.filter(tracks => {
        tracks.id != this.state.playlistTracks.id
      })
      this.setState({
        playlistTrack: filterTrack
      })
    }
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

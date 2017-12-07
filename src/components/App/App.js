import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlayListName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }
  addTrack(track) {
    //his will work through the array, then return `true` if it finds at least one case where `t.id === track.id`
    if (!this.state.playlistTracks.id.some(t => t.id === track.id)) {
        let pushTrack = this.state.playlistTrack;
        pushTrack.push(track);
      this.setState({
          playlistTrack: pushTrack
      })
    }
  }
  removeTrack(track){
    if (this.state.playlistTracks.id.some(t => t.id === track.id)) {
      let filterTrack = this.state.playlistTrack.filter(tracks => tracks.id != track.id)
      this.setState({
        playlistTrack: filterTrack
      })
    }
  }
  updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }
  savePlaylist(){
    let trackURIs = []
  }
  search(searchTerm){
    console.log(searchTerm)
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

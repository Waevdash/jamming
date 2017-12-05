import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
          <TrackList onRemove={this.props.onRemove} /> 
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;

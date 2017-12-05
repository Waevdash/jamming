import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  constructor(props){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value)
  }
  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
          <TrackList onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;

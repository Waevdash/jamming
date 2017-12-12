import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
  constructor(props){
    super(props)
    this.removeCopy = this.removeCopy.bind(this)
  }
  removeCopy(){
    if(this.props.searchResults.id.some(s => s.id == this.state.playlistTracks.id)) {
      let removeCopy = this.props.searchResults.filter(tracks => tracks.id != this.state.playlistTrack.id);
      return removeCopy
    };
  }
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} removeCopy={this.removeCopy}/>
      </div>
    );
  }
}

export default SearchResults;

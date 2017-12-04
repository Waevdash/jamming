import React, { Component } from 'react';
import logo from './logo.svg';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList Track={this.props.searchResults}  playlistName={this.props.playlistName} playlistTracks={this.props.playlistTracks} />
      </div>
    );
  }
}

export default SearchResults;

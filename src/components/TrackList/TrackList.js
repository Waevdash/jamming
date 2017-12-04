import React, { Component } from 'react';
import logo from './logo.svg';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.searchResults.map(result => {
            return <Track searchResult={result} key={track.id} /> 
          })}
      </div>
    );
  }
}

export default TrackList;

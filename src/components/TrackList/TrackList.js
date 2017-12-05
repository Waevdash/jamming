import React, { Component } from 'react';
import logo from './logo.svg';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.searchResults.map(result => {
            return <Track searchResult={result} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
          })}
      </div>
    );
  }
}

export default TrackList;

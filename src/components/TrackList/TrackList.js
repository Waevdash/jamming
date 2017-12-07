import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.searchResults.map(result => {
            return <Track track={result} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
          })}
      </div>
    );
  }
}

export default TrackList;

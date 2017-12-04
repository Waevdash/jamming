import React, { Component } from 'react';
import logo from './logo.svg';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.searchResult.name}</h3>
          <p>{this.props.searchResult.artist}| {this.props.searchResult.album}</p>
        </div>
        <a className="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}

export default Track;

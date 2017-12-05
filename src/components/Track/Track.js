import React, { Component } from 'react';
import logo from './logo.svg';
import './Track.css';

class Track extends Component {
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this)
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.searchResult.name}</h3>
          <p>{this.props.searchResult.artist}| {this.props.searchResult.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}><!-- + or - will go here --></a>
      </div>
    );
  }
  addTrack(){
    this.props.track = this.props.onAdd
  }
}

export default Track;

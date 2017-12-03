import React, { Component } from 'react';
import logo from './logo.svg';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a class="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}

export default Track;

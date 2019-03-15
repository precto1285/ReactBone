import React, { Component } from 'react';
import Biography from './../Sub/Biography';

export default class Bio extends Component {
  render() {
    return (
      <div className="my-1 py-2">
        <h1>Bios</h1>
        <Biography />
      </div>
    )
  }
}
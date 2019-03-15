import React, { Component } from 'react';
import Photo from './../Sub/Photo';

export default class Photos extends Component {
  render() {
    return (
      <div className="my-1 py-2">
        <h1>Photos</h1>
        <Photo />
      </div>
    )
  }
}
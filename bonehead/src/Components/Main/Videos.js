import React, { Component } from 'react';
import Video from './../Sub/Video';

export default class Videos extends Component {

  render() {
    return (
      <div className="text-center">
        <h1 className="my-5">VIDEOS:</h1>
        <Video />
      </div>
    )
  }
}
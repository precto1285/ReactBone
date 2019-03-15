import React, { Component } from 'react';
import Songs from '../Sub/Songs';

export default class AlbumSongs extends Component {
  render() {
    return (
      <div className="my-1 py-2">
        <h1>Album and Songs</h1>
        <Songs />
      </div>
    )
  }
}
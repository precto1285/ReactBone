import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Jumbotron className="bg primary text-center text-white">
          <h1>BONEHEAD</h1>
        </Jumbotron>
      </div>
    )
  }
}
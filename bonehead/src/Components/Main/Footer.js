import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron className="bg-dark text-white text-center my-5">
          <h3>Copyright &copy; 2019</h3>
        </Jumbotron>
      </div>
    )
  }
}
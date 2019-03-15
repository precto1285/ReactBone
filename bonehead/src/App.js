import React, { Component } from 'react';
import { Row, Col, Jumbotron, Nav, } from 'reactstrap';
import './App.css';
import AlbumSongs from './Components/Main/Albums-Songs';
import Bio from './Components/Main/Bio';
import Members from './Components/Main/Members';
import Photos from './Components/Main/Photos';
import Videos from './Components/Main/Videos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav className="bg-dark text-white pl-3 py-2">
            <p>Bonehead</p>
          </Nav>

          <Jumbotron className="bg primary text-center text-white">
            <h1>BONEHEAD</h1>
          </Jumbotron>

          <Row>
            <Col>
              <Photos />
            </Col>
            <Col>
              <Bio />
            </Col>
          </Row>
          <Row>
            <Col>
              <AlbumSongs />
            </Col>
            <Col>
              <Videos />
            </Col>
          </Row>
          <Row className="bg-dark text-white">
            <Col className="text-center">
              <Members />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
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
      <Router>
        <div className="App">
          <div className="container">
            <Nav className="bg-dark text-white pl-3 py-2">
              <p>Bonehead</p>
            </Nav>
            <Route className="text-white" path='/' exact strict render={() => {
              return (
                <Jumbotron className="bg primary text-center text-white">
                  <h1>BONEHEAD</h1>
                </Jumbotron>
              )
            }
            } />
            <Row>
              <Col>
                <Route className="text-white" path='/Photos' component={Photos} exact strict />
              </Col>
              <Col>
                <Route className="text-white" path='/Bio' component={Bio} exact strict />
              </Col>
            </Row>
            <Row>
              <Col>
                <Route className="text-white" path='/AlbumSongs' component={AlbumSongs} exact strict />
              </Col>
              <Col>
                <Route className="text-white" path='/Videos' component={Videos} exact strict />
              </Col>
            </Row>
            <Row className="bg-dark text-white">
              <Col className="text-center">
                <Route className="text-white" path='/Members' component={Members} exact strict />
              </Col>
            </Row>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

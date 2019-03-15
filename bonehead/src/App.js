import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Jumbotron, Nav } from 'reactstrap';
import './App.css';
import AlbumSongs from './Components/Main/Albums-Songs';
import Bio from './Components/Main/Bio';
import Footer from './Components/Main/Footer';
import Home from './Components/Main/Home';
import Members from './Components/Main/Members';
import Photos from './Components/Main/Photos';
import Videos from './Components/Main/Videos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Jumbotron className="bg-dark text-center">
              <Link className="text-white" to="/"><h1>BONEHEAD</h1></Link>
            </Jumbotron>
            <Nav className="bg-dark text-white py-2">
              <div className="collapse navbar-collapse"></div>
              <ul className="navbar nav">
                <li className="nav-item mr-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/Photos">Photos</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/Videos">Videos</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/Bio">Biography</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/Members">Members</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/AlbumSongs">Albums & Songs</Link>
                </li>
              </ul>
            </Nav>
            <Route className="text-white" path='/' exact strict component={Home} />
            <Route className="text-white" path='/Photos' component={Photos} exact strict />
            <Route className="text-white" path='/Bio' component={Bio} exact strict />
            <Route className="text-white" path='/AlbumSongs' component={AlbumSongs} exact strict />
            <Route className="text-white" path='/Videos' component={Videos} exact strict />
            <Route className="text-white" path='/Members' component={Members} exact strict />
          </div>

        </Router>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

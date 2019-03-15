import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Nav } from 'reactstrap';
import './App.css';
import AlbumSongs from './Components/Main/Albums-Songs';
import Bio from './Components/Main/Bio';
import Home from './Components/Main/Home';
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
              <Link className="text-white" to="/"><h3>BONEHEAD</h3></Link>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Photos">Photos</Link>
                </li>
                <li>
                  <Link to="/Videos">Videos</Link>
                </li>
                <li>
                  <Link to="/Bio">Biography</Link>
                </li>
                <li>
                  <Link to="/Members">Members</Link>
                </li>
                <li>
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
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Me from './components/Me';
import Experience from './components/Experience';
import Project from './components/Project';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
      
    <Router>
      <div className="App">
      <header className="App-header">
        <ul>
          <li>
          <Link to="/me"><img src={logo} className="App-logo" alt="logo" /></Link>
          </li>
          <li>
          <Link to="/experience">Experience</Link>
          </li>
          <li>
          <Link to="/project">Projects</Link>
          </li>
          <li>
          <Link to="/education">Education</Link>
          </li>
          <li>
          <Link to="/hobbies">Hobbies</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul></header><body>
        <Switch>
          <Route exact path="/me" component={Me}/>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/education" component={Education}/>
          <Route exact path="/hobbies" component={Hobbies}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </body>
      <footer className="App-footer">
        <p>Soy el footer</p>
      </footer>
    </div>
  </Router>
  
      
  );
}

export default App;

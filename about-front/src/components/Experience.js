import React, { Component } from 'react';
import './Experience.css';
import qa from '../lupa.png';
import tools from '../tools.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import QAEngineer from './QAEngineer';
import Developer from './Developer';

class Experience extends Component {

    render() {
        return (
            <Router>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 offset-2">
                        <div className="card mb-4 shadow-sm">
                            <Link to="/qaengineer">
                                <div class="card-body">
                                    <img src={qa} className="Me-qa" alt="qa"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card mb-4 shadow-sm">
                            <Link to="/developer">
                                <div class="card-body">
                                    <img src={tools} className="Me-tools" alt="tools"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <br></br>
                <Switch>
                    <Route exact path="/qaengineer" component={QAEngineer}/>
                    <Route exact path="/developer" component={Developer}/>
                </Switch>
            </div>
        </Router>
           
        )
      }
}
export default Experience;
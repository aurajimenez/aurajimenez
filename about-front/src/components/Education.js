import React, { Component } from 'react';
import './Education.css';
import curso from '../curso.png';
import certificate from '../certificate.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Certificate from './Certificate';
import Course from './Course';

class Education extends Component {
    render() {
        return (
            <Router>
                <div className="containerH" >
                    <div className="row" >
                                <div class="card-body">
                                    <h6><b>B.S. System Engineer</b></h6>
                                    <h6><b>Information Systems Technology</b></h6>
                                </div>
                            
                                <Link to="/certificate">
                                    <div class="card-body">
                                        <img src={certificate} className="Me-qa" alt="certificate"/>
                                    </div>
                                </Link>
                                <Link to="/course">
                                    <div class="card-body">
                                        <img src={curso} className="Me-tools" alt="curso"/>
                                    </div>
                                </Link>
                        
                    </div>
                    <br></br>
                    <Switch>
                        <Route exact path="/certificate" component={Certificate}/>
                        <Route exact path="/course" component={Course}/>
                    </Switch>
                </div>
            </Router>
        )
      }
}
export default Education;
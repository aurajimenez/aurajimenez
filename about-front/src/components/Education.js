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
                <div className="container" >
                    <div className="container" >
                        <div className="col-lg-8 offset-2">
                            <h5><b>B.S. System Engineer: </b>Universidad del Valle, Cali, Colombia</h5>
                            <h5><b>Information Systems Technology: </b>Universidad del Valle, Cali, Colombia</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 offset-2">
                            <div className="card mb-4 shadow-sm">
                                <Link to="/certificate">
                                    <div class="card-body">
                                        <p>Certificaciones</p>
                                        <img src={certificate} className="Me-qa" alt="certificate"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-4 shadow-sm">
                                <Link to="/course">
                                    <div class="card-body">
                                    <p>Cursos</p>
                                        <img src={curso} className="Me-tools" alt="curso"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
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
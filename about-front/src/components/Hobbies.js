import React, { Component } from 'react';
import './Hobbies.css';
import sport from '../sport.png';
import food from '../food.png';
import travel from '../travel.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Sport from './Sport';
import Food from './Food';
import Travel from './Travel';

class Hobbies extends Component {
    render() {
        return (
            <Router>
                <div className="containerH" >
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card mb-4 shadow-sm">
                                <Link to="/sport">
                                    <div class="card-body">
                                        <img src={sport} className="Me-qa" alt="certificate"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-4 shadow-sm">
                                <Link to="/food">
                                    <div class="card-body">
                                        <img src={food} className="Me-tools" alt="curso"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-4 shadow-sm">
                                <Link to="/travel">
                                    <div class="card-body">
                                        <img src={travel} className="Me-tools" alt="curso"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="col-8">
                    <Switch>
                        <Route exact path="/sport" component={Sport}/>
                        <Route exact path="/food" component={Food}/>
                        <Route exact path="/travel" component={Travel}/>
                    </Switch>
                    </div>
                </div>
            </Router>
        )
      }
}
export default Hobbies;
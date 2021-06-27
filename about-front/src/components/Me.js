import React, { Component } from 'react';
import foto from '../foto.png';
import './Me.css';

class Me extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-6 mx-auto col-md-4 order-md-2" >
                        <img src={foto} className="Me-foto" alt="foto" />                          
                        <h3 > AURA JIMENEZ </h3> 
                        <p>Mid QA Engineer & Jr Developer</p>    
                    </div> 
                    <div className="card mb-4 shadow-sm">
                        <p align="center">I'm a Computer Scientist, certified at ISTQB Foundation Level and SCRUM Foundation with 3 years of
                        experience in the area of software quality assurance in different sectors such as Banking, Pharmaceutical
                        and Education. In several projects I have worked with agile methodologies like SCRUM. I am interested
                        in strengthening my skills in the field of software development in both web and mobile applications.</p>
                    </div> 
                </div>
            </div>
        );
      }
}
export default Me;
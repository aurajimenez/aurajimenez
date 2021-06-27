import React, { Component } from 'react';
import './QAEngineer.css';
import data2 from '../data/experience.json';

const experiences = data2;

class QAEngineer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
      componentDidMount() {
        fetch("http://localhost:8000/api/experience/experiences")
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
      render() {
        if (this.state.loaded === false){
          console.log(experiences)
          return (
            <ul>
              
              {experiences.filter(per => per.role === 'QA').map((qaexperience) => (
              <div key={qaexperience.pk}>
                  {qaexperience.description} - {qaexperience.company} - {qaexperience.date}
                </div>
                ))}
            </ul>
          );
        }
        return (
          <ul>
            
            {this.state.data.filter(experience => experience.role === 'QA').map(qaexperience => {
              return (
                
                  <div key={qaexperience.pk}>
                  {qaexperience.description} - {qaexperience.company} - {qaexperience.date}
                </div>
                
              );
            })}
            
          </ul>
        );
      }
    }
    
export default QAEngineer;
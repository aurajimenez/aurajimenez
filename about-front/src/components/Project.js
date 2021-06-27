import React, { Component } from 'react';
import './Project.css';
import data2 from '../data/project.json';

const projects = data2;

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000/api/project/projects")
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
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
          return (
            <ul >
                  {projects.map((project) => (
                  <li key={project.pk}>
      

                    


                      {project.date} - {project.techonologies} - {project.description}
          
                      
                      {project.name} - {project.company} - {project.link}
                  </li>))}
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.map(project => {
              return (
                
                    <li key={project.pk}>
                      <div className="card mb-4 shadow-sm">
                        {project.date} - {project.techonologies} - {project.description} - {project.name}- {project.company}- {project.link}
                      </div>
                    </li>
            
              );
            })}
          </ul>
        );
      }
    }
export default Project;
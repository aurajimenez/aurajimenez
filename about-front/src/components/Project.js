import React, { Component } from 'react';
import './Project.css';
import data2 from '../data/project.json';
import { Card, CardGroup } from 'react-bootstrap';

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
           <ul>
             <CardGroup> 
                  {projects.map((project) => (
                  <li key={project.pk}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{project.name} - {project.company} - {project.date} - <a href={project.link} target="_blank">View</a></Card.Title>
                        <Card.Text>
                         {project.description} 
                        </Card.Text>
                        <Card.Text>
                         {project.techonologies}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </li>))}
              </CardGroup>
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.map(project => {
              return (
                <CardGroup> 
                  {projects.map((project) => (
                    <li key={project.pk}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{project.name} - {project.company} - {project.date} - <a href={project.link} target="_blank">View</a></Card.Title>
                          <Card.Text>
                          {project.description} 
                          </Card.Text>
                          <Card.Text>
                          {project.techonologies}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </li>))}
                </CardGroup>
              );
            })}
          </ul>
        );
      }
    }
export default Project;
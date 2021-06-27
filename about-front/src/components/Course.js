import React, { Component } from 'react';
import './Course.css';
import data2 from '../data/education.json';

const educations = data2;

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000/api/education/education")
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
              {educations.filter(course => course.type_of_education === 'COURSE').map((course) => (
              <div key={course.pk}>
                  {course.date} - {course.name_of_education} - {course.institution} - <a href={course.link} target="_blank">View</a> - {course.description}
                </div>))}
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.filter(course => course.type_of_education === 'COURSE').map(course => {
              return ( 
                <div key={course.pk}>
                  {course.date} - {course.name_of_education} - {course.institution} - <a href={course.link} target="_blank">View</a> - {course.description}
                </div>
              );
            })}
          </ul>
        );
      }
    }
export default Course;
import React, { Component } from 'react';
import './Certificate.css';
import data2 from '../data/education.json';

const educations = data2;

class Certificate extends Component {
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
              {educations.filter(certificate => certificate.type_of_education === 'CERTIFICATE').map((certificate) => (
              <div key={certificate.pk}>
                  {certificate.date} - {certificate.name_of_education} - {certificate.institution}
                  <a href={certificate.link} target="_blank">View</a> - {certificate.description}
              </div>))}
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.filter(certificate => certificate.type_of_education === 'CERTIFICATE').map(certificate => {
              return ( 
                <div key={certificate.pk}>
                  {certificate.date} - {certificate.name_of_education} - {certificate.institution} - <a href={certificate.link} target="_blank">View</a> - {certificate.description}
                </div>
              );
            })}
          </ul>
        );
      }
    }
export default Certificate;
import React, { Component } from 'react';
import './Travel.css';
import data2 from '../data/hobbies.json';

const hobbies = data2;

class Travel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000/api/hobbies/hobbies")
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
              {hobbies.filter(per => per.types === 'Travel').map((hobbies) => (<li key={hobbies.pk}>
                 {hobbies.description} - {hobbies.name} - {hobbies.images}
                </li>))}
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.filter(hobbie => hobbie.types === 'Travel').map(travel => {
              return ( 
                <li key={travel.pk}>
                  {travel.name} - {travel.images} - {travel.description}
                </li>
              );
            })}
          </ul>
        );
      }
    }
export default Travel;
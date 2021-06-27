import React, { Component } from 'react';
import './Food.css';
import data2 from '../data/hobbies.json';

const hobbies = data2;

class Food extends Component {
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
              {hobbies.filter(per => per.types === 'Food').map((hobbies) => (<div key={hobbies.pk}>
                {hobbies.description} - {hobbies.name} - {hobbies.images}
                </div>))}
            </ul>
          );
        }
        return (
          <ul>
            {this.state.data.filter(hobbie => hobbie.types === 'Food').map(food => {
              return ( 
                <div key={food.pk}>
                  {food.name} -{food.images} - {food.description}
                </div>
              );
            })}
          </ul>
        );
      }
    }
export default Food;
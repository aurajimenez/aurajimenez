import React, { Component } from 'react';
import './Developer.css';
import data2 from '../data/experience.json';

const experiences = data2;

class Developer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount(){
        fetch("http://localhost:8000/api/experience/experiences")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                       return { placeholder: "Something went wrong!"}; 
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

    render(){
        if (this.state.loaded === false){
            console.log(experiences)
            return (
                
              <ul>
                {experiences.filter(per => per.role === 'DEV').map((qaexperience) => (
                <div key={qaexperience.pk}>
                    {qaexperience.description} - {qaexperience.company} - {qaexperience.date}
                  </div>))}
              </ul>
            );
          }
        return (
            <ul>
                {this.state.data.filter(per => per.role === 'DEV').map(developer => {
                    return (
                        <div key={developer.pk}>
                        {developer.description} - {developer.company} - {developer.date}
                        </div>
                    )
                })}
            </ul>
        )
    }
}
export default Developer;
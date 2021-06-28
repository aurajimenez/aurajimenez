import React, { Component } from 'react';
import gmail from '../gmail.png';
import twitter from '../twitter.png';
import linkedin from '../linkedin.png';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="col-md-4 offset-4">                  
                <h3> Contact </h3>                           
                <div className="containerH">
                    <div>
                        <img src={gmail} className="Contact-gmail" alt="gmail" />
                        <p align="center">auracristina.jimenezg@gmail.com</p>
                    </div>
                    <div>
                        <img src={twitter} className="Contact-twitter" alt="twitter" />
                        <p align="center">github.com/aurajimenez</p>
                    </div>
                    <div>
                        <img src={linkedin} className="Contact-linkedin" alt="linkedin" />
                        <p align="center">linkedin.com/in/aurajimenez/</p>
                    </div>
                </div>
            </div>
        )
      }
}
export default Contact;
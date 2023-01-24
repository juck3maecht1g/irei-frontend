import React from 'react'
import { Link } from 'react-router-dom';
import './navigationButton.css'

class NavigationButton extends React.Component {
    location = null
    state = {  }
    render() { 
        return ( 
            <Link to={this.destinationLink}>
            <button>{this.destination}</button>
            </Link>
         );
    }
}
 
export default NavigationButton;
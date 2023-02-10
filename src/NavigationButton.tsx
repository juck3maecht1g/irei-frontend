import React from 'react'
import { Link } from 'react-router-dom';
import './navigationButton.css'

class NavigationButton extends React.Component {
    location = null
    state = {  }
    render() { 
        return ( 
            <Link to={this.props.destinationLink}>
                <button className="navigation-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{this.props.destination}</button>
            </Link>
         );
    }
}

export default NavigationButton;
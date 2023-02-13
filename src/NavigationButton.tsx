import React from 'react'
import { Link } from 'react-router-dom';
import './navigationButton.css'

function NavigationButton (props) {
    return ( 
        <Link to={props.destinationLink}
              state={{ from: "Burgermenu"}}>
            <button className="navigation-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">{props.destination}</button>
        </Link>
     );     
    
}

export default NavigationButton;
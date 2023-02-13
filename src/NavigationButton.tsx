import React from 'react'
import { Link } from 'react-router-dom';
import './navigationButton.css'
import './theme.css'
import './irei_styles.css'

function NavigationButton(props) {
    return ( 
        <Link to={props.destinationLink} state={{ from: "Burgermenu"}} 
                className="irei-button navigation-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            {props.destination}
        </Link>
        );

}

export default NavigationButton;
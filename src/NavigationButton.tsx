import React from 'react'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import './navigationButton.css'

class NavigationButton extends React.Component {

    
    render() { 
        return ( 
            <Link to={this.props.destinationLink}>
                <button className="navigationButton">{this.props.destination}</button>
=======

class NavigationButton extends React.Component {
   
    constructor(props) {
        super(props);
    }
    location = null
    state = {  }
    render() { 
        return ( 
            <Link to={this.location}>
            <button></button>
>>>>>>> refs/remotes/origin/main
            </Link>
         );
    }
}
 
export default NavigationButton;
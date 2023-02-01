import React from 'react'
import { Link } from 'react-router-dom';
import '../Choose.css';

/**
 * The ChooseLaboratoryButton is used to choose 
 * the Laboratory which is displayed from this Button
 */
export default function ChooseLaboratoryButton (props) {

    const robots = props.function(props.name);

    return ( 
        <div>
        <Link
           to = {"/ChooseExperimentRobots"}
           state = {{help: robots}}
        >
        <button className='not_chosen'>
            {props.name}
        </button>
        </Link>
        </div>
        
     );
}
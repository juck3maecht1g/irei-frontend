import React from 'react'
import { Link } from 'react-router-dom';
import '../Choose.css';

/**
 * The ChooseLaboratoryButton is used to choose 
 * the Laboratory which is displayed from this Button
 */
export default function ChooseLaboratoryButton (props) {

    const arrLabs = Array.from(props.map, function (entry) {
        return { key: entry[0], value: entry[1]};
      });

    return ( 
        <Link
           to = {"/ChooseExperimentRobots"}
           state = {props.map}
        >
        <button className='not_chosen'>
            {props.name}
        </button>
        </Link>
        
     );
}
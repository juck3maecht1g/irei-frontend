import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../Choose.css';
import ChooseButton from '../ChooseButton';

/**
 * The ChooseLaboratoryButton is used to choose 
 * the Laboratory which is displayed from this Button
 */
export default function ChooseLaboratoryButton (props) {


    const roboter = (props.buttons(props.name))
   //   const [robots, setRobots] = useState(props.buttons(props.name))

    return ( 
        <Link
           to = {"/ChooseExperimentRobots"}
           state = {{from: roboter}}
        >
        <button className='not_chosen'>
            {props.name}
        </button>
        </Link>
     );
}
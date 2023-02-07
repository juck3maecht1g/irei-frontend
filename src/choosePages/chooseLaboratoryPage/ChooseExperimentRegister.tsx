import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { GetExperiments } from '../Other FetchAndSet';
import TopBar from '../../TopBar';
import '../Choose.css';

/**
 * The ChooseExperimentRegister is used to choose 
 * the experiment class the user wants to execute
 */
export default function ChooseExperimentRegister() {

    const [exp, setExperiment] = useState([]);
    GetExperiments(setExperiment);
    const buttons = exp.map((number) => {
        return <ChooseRegisterButton name={number}/>
    })

    return (
        <div>
            <TopBar title="Choose Experiment"></TopBar>
            {buttons}
        </div>
    )
}

/**
 * The ChooseRegisterButton is used to choose 
 * the Esperiment out of the register which is displayed by this Button
 */

function ChooseRegisterButton (props) {

    return ( 
        <Link
           to = {"/Controlpage"}
        >
        <button onClick={SaveChoice} 
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            {props.name}
        </button>
        </Link>
     );
}

function SaveChoice () {
    //sent to Backend
}
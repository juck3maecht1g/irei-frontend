import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { ExecuteActionList, SetButtonIndex } from './ActionPage/ActionFetch';
import './../irei_styles.css'

export default function ActionListButton (props) {
    
    const [actionlist, setActionList] = useState("")

    const execute = ()=> {
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)
    }

const informPosition = () => {
    console.log("hi")
    SetButtonIndex(props.index, props.errorfunction, props.setErrorMessage)
}


    return (
        <div>
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                onClick={execute}>
                <div>
                    {props.index}
                </div>
                <div>
                    {actionlist}
                </div>
            </button>
            
            <Link to={"/ActionListPage"} state={{execute: setActionList}} >
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={informPosition}>
                    edit
                </button>
            </Link>
        </div>
        
    )
}

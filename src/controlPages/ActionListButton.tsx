import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { ExecuteActionList } from './ActionPage/ActionFetch';
import './../irei_styles.css'

export default function ActionListButton (props) {
    
    const [actionlist, setActionList] = useState("")

    const execute = ()=> {
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)
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
            
            <Link to={"/ActionListPage"} state={{execute: setActionList}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    edit
                </button>
            </Link>
        </div>
        
    )
}
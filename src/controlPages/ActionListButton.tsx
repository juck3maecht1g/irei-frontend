import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { ExecuteActionList } from './ActionPage/ActionFetch';

export default function ActionListButton (props) {
    const [actionlist, setActionList] = useState("")

    const execute = ()=> {
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)
    }


    return (
        <div>
            <button onClick={execute}>
            <div>{props.index}</div>
            <div>{actionlist}</div>
            </button>
            
            <Link to = {"/ActionListPage"}
                  state = {{execute: setActionList}}>
                <button>edit</button>
            </Link>
        </div>
        
    )
}
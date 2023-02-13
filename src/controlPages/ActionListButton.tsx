import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function ActionListButton (props) {
    const [actionlist, setActionList] = useState("")
    return (
        <div>
            <button>
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
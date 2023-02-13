import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../TopBar';
import { GetActionListNames } from './ActionFetch';

/**
 * The ChooseListPage is used to choose an existing list of action 
 */
export default function ChooseListPage (props) {
    const [lists, setList] = useState([]);
    GetActionListNames(setList)

    const buttons = lists.map((number) => {
        return <Link
        to = {"/ActionListPage"}
     >
     <button onClick = {sentToBackend}
     className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
         {number}
     </button>
     </Link>
    })

    return (
        <div>
            <TopBar title="Choose Action List"/>
            {buttons}
        </div>
    )
}

function sentToBackend () {

} // noch implementiert werden mit Button
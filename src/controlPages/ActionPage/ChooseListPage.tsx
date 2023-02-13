import React from 'react';
import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from '../../TopBar';
import { GetActionListNames, SetActionList } from './ActionFetch';

/**
 * The ChooseListPage is used to choose an existing list of action 
 */
export default function ChooseListPage (props) {
    

    const location = useLocation();
    const { execute } = location.state;

    const [lists, setList] = useState([]);
    GetActionListNames(setList)

    const sentChoiceBack = (name) => {
        execute(name);
        SetActionList(name);
    }

    const buttons = lists.map((number) => {
        return <Link
        to = {"/ActionListPage"}
     >
     <button onClick = {() => sentChoiceBack(number)}
     className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
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
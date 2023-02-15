import React from 'react';
import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from '../../TopBar';
import { GetActionListNames, SetActionList } from './ActionFetch';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';
import './../../theme.css'
import './../../irei_styles.css'

/**
 * The ChooseListPage is used to choose an existing list of action 
 */
export default function ChooseListPage (props) {
    const [errorMessage, setErrorMessage] = useState("sorry position could not be saved")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
       }





    const location = useLocation();
    const { execute } = location.state;

    const [lists, setList] = useState([]);
    GetActionListNames(setList)

    const sentChoiceBack = (name) => {
        execute(name);
        SetActionList(errorState, name, setErrorMessage); 
    }

    const buttons = lists.map((number) => {
        return <Link to = {"/ActionListPage"}>
     <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
        onClick ={() => sentChoiceBack(number)}>
        {number}
     </button>
     </Link>
    })

    return (
        <div>
            <TopBar title="Choose Action List"/>
            {buttons}
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
    )
}
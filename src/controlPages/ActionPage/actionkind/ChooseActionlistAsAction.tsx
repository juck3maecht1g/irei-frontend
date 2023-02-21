import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../../TopBar';
import { GetActionListNames, appendAction} from '../ActionFetch';
import { ErrorPopUp } from '../../../PopUp/ErrorPopUP';
import '../../../theme.css'
import '../../../irei_styles.css'

/**
 * The ChooseListPage is used to choose an existing list of action 
 */
export default function ChooseActionlistAsAction () {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("sorry position could not be saved")
    const [error, setError] = useState(false)

    const errorState = () => {
        setError(current => !current)
       }

    const [lists, setList] = useState([]);
    GetActionListNames(setList)

    const sentChoiceBack = (name) => {
        var action = new Map();
        action.set("key", "list")
        action.set("name", name)
        appendAction(errorState, name, setErrorMessage)
        navigate("/ActionListPage")
        // fehlt noch bzw stimmt es so??????
    }

    const buttons = lists.map((number) => {
        return  <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
        onClick ={() => sentChoiceBack(number)}>
        {number}
     </button>
    
     
    })

    return (
        <div>
            <TopBar title="Choose Action List"/>
            {buttons}
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
    )
}
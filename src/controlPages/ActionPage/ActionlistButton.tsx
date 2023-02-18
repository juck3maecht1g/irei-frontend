import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../irei_styles.css'
import { SetMappingPos } from './ActionFetch';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';
import './Actionlist.css'

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionlistButton (props) {

    const [errorMessage, setErrorMessage] = useState("sorry robots couldnt be changed")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
    }
    
    const action = props.element;

    const [state, setState] = useState(false);

    

    const createButtons = () => {
        if (action.get("content") !== undefined) {
        return action.get("content").map((currElement, index) => {
            var listIndex = [...props.listPlace];
            listIndex.push(index)
            return <div className="secondRow">
                <ActionlistButton key={index} element={currElement} listPlace={listIndex}/>
            </div>
        })}
        return <></>
    }
    
    const open = createButtons();


    if (action.get("key") === "sequential_list") { 
        return (
            <div>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick = {() => setState(prevState => !prevState)}>
                    <div>{action.get("name")}</div>
                    <div>sequential_list</div>
                </button>
                <Link to={"/MappingRobotsPage"}
                 state = {{index: props.listPlace}}>
                    <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        edit mapping
                    </button>
                </Link>
                {state && open}
            </div>
        )
    } else if (action.get("key") === "parallel_list") {
        return (
            <div>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick = {() => setState(prevState => !prevState)}>
                    <div>{action.get("name")}</div>
                    <div>parallel_list</div>
                </button>
                <Link to={"/MappingRobotsPage"}>
                    <button onClick={() =>SetMappingPos(props.listPlace, errorState, setErrorMessage)} 
                        className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        edit mapping
                    </button>
                </Link>
                {state && open}
                <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
            </div>
        )
    }

    return (
        <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> 
            <div>{action.get("key")}</div>
            <div>{props.second}</div>
        </button>
    )

}
import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { appendAction } from '../ActionFetch';

export default function SetTimePage() {
    const [errorMessage, setErrorMessage] = useState("sorry robots couldnt be changed")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
    }
    const [time, setTime] = useState('0')

    const location = useLocation();
    const { kind } = location.state;
    const { ip } = location.state;


    const sentToBackend = () => {
        var actionParameters = new Map<string, string>();
        actionParameters.set("key", kind);
        actionParameters.set("robot", ip);
        actionParameters.set("time", time);
        appendAction(errorState, actionParameters, setErrorMessage);
    }

    return (
        <div>
            <form>
                <div>
                    <label>please set a time:</label>
                </div>
                <div>
                    <input
                        type= "number"
                        required
                        value= {time}
                        onChange = {(e) => setTime(e.target.value)}
                    />
                </div>
                <Link to = {"/ActionListPage"}>
                    <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                        onClick = {sentToBackend}>
                        confirm 
                    </button>
                </Link>
            </form>
        </div>
    )
}
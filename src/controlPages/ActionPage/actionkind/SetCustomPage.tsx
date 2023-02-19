import React from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { appendAction } from '../ActionFetch';

export default function SetCustomPage() {
    const [errorMessage, setErrorMessage] = useState("sorry robots couldnt be changed")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
    }
    const [name, setName] = useState("")

    const location = useLocation();
    const { kind } = location.state;
    const { ip } = location.state;


    const sentToBackend = () => {
        var actionParameters = new Map<string, string>();
        actionParameters.set("key", kind);
        actionParameters.set("robot", ip);
        actionParameters.set("action", name);
        appendAction(errorState, actionParameters, setErrorMessage);
    }

    return (
        <div>
            <form>
                <div>
                    <label>please enter the name of the custom action:</label>
                </div>
                <div>
                    <input
                        type= "text"
                        required
                        value= {name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <Link to = {"/ActionListPage"}>
                    <button onClick = {sentToBackend}> confirm </button>
                </Link>
            </form>
        </div>
    )
}
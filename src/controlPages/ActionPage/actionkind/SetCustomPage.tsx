import React from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { appendAction } from '../ActionFetch';

export default function SetCustomPage() {
    const [name, setName] = useState("")

    const location = useLocation();
    const { kind } = location.state;
    const { ip } = location.state;


    const sentToBackend = () => {
        var actionParameters = new Map<string, string>();
        actionParameters.set("key", kind);
        actionParameters.set("robot", ip);
        actionParameters.set("action", name);
        appendAction(actionParameters);
    }

    return (
        <div>
            <form>
                <div>
                    <label>please set a time:</label>
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
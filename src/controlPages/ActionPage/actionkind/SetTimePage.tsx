import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SetTimePage() {
    const [time, setTime] = useState('0')

    const location = useLocation();
    const { kind } = location.state;
    const { ip } = location.state;


    const sentToBackend = () => {
        var actionParameters = kind + "!" + ip + "!" + time;
        //post this just where
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
                    <button onClick = {sentToBackend}> confirm </button>
                </Link>
            </form>
        </div>
    )
}
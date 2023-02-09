import React from 'react'
import {useState} from 'react'
import {GetGripperRobots, GetExpRobots} from './FetchRobots'
import {SetChangeGripperRobots} from './SetRobots'
import ChooseButton from '../ChooseRobotButton';
import { Link } from 'react-router-dom';
import TopBar from '../../TopBar';

export default function ChooseMultipleGripper (props) {
    const [possibleRobots, setPossibleRobots] = useState (new Map<string, string>());
    GetExpRobots(setPossibleRobots);

    const [prechosen, setPreChosen] = useState (new Map<string, string>());
    GetGripperRobots(setPreChosen);

    const arrPossible = Array.from(possibleRobots, function (entry) {
        return { key: entry[0], value: entry[1]};
    });

    var chosen = new Map<string, string>() // the chosen robots 

    const clickedBot = (ip, name) => {
        if (chosen.has(ip))  {
            chosen.delete(ip)
        } else {
            chosen.set(ip,name)
        }
    }

    const buttons = arrPossible.map((number) => {
        var chosen = false;
        if (prechosen.get(number.key)) {
            chosen = true;
        }
        return <ChooseButton name={number.key} 
        ip = {number.value} 
        state = {chosen}
        action = {clickedBot}/>
      })

    const confirm = () => {
        SetChangeGripperRobots(chosen)
    }

    return (
        <div>
            <TopBar title="Choose Robots"></TopBar>
            {buttons}
            <Link to = {"/Controlpage"}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
             onClick = {confirm}>confirm</button>
            </Link>
        </div>
    )
}
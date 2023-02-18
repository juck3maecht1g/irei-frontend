import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { GetExpRobots } from '../../backendComunication/FetchRobots';
import TopBar from '../../TopBar';
import {appendAction} from '../../controlPages/ActionPage/ActionFetch';

/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseRobotPage(props){
  const [errorMessage, setErrorMessage] = useState("sorry position could not be saved")
  const [error, setError] = useState(false)
  const errorState = () => {
      setError(current => !current)
     }
    const location = useLocation();
    const {action} = location.state;
    const {link} = location.state;

    const sentToBackend = (ip) => {
      if (link === "/ActionListPage") {
        var help = new Map();
        help.set("key", action);
        help.set("robot", ip)
        appendAction(errorState, help, setErrorMessage);
      }
    }

    var [robots, setRobots] = useState(new Map<string, string>());
    GetExpRobots(setRobots)

    const arrRobots = Array.from(robots, function (entry) {
      return { key: entry[0], value: entry[1]};
    });

    const buttons = arrRobots.map((number) => {
      return <RobotButton key={number.key}
      data_key= {number.key} 
      name= {number.value}
      actionKind={action}
      linkTo={link}
      action = {sentToBackend}/>
    })

    return (
      <div>
        <TopBar title="Choose Robot"/>
        {buttons}
      </div>
    )
}

/**
 * The RobotButton is used to choose 
 * the Robot which is displayed from this Button
 */
function RobotButton (props) {

  return (   // noch zurückschicken wenn Gripper
    <Link to = {props.linkTo}
          state = {{kind: props.actionKind, ip: props.data_key}}>
        <button onClick = {() => props.action(props.data_key)}
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <div>{props.name}</div>
          <div>{props.data_key}</div>
        </button>
    </Link>
   );
}
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { GetExpRobots } from '../../backendComunication/FetchRobots';
import TopBar from '../../TopBar';

/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseRobotPage(props){

    const location = useLocation();
    const { kind } = location.state;
    const { link } = location.state;
    const { execute } = location.state;

    var [robots, setRobots] = useState(new Map<string, string>());
    GetExpRobots(setRobots)

    const arrRobots = Array.from(robots, function (entry) {
      return { key: entry[0], value: entry[1]};
    });

    const buttons = arrRobots.map((number) => {
      return <RobotButton key={number.key}
      data_key= {number.key} 
      name= {number.value}
      actionKind={kind}
      linkTo={link}
      action = {execute}/>
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
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <div>{props.name}</div>
          <div>{props.data_key}</div>
        </button>
    </Link>
   );
}
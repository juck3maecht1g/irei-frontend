import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseRobotPage(props){

  const location = useLocation();
  const { kind } = location.state;

    var [robots, setRobots] = useState(new Map<string, string>());
    props.fetch(setRobots)

    const arrRobots = Array.from(robots, function (entry) {
      return { key: entry[0], value: entry[1]};
    });

    const buttons = arrRobots.map((number) => {
      return <RobotButton key={number.key} name= {number.value} action={kind}/>
    })

    return (<></>)
}


/**
 * The RobotButton is used to choose 
 * the Robot which is displayed from this Button
 */
function RobotButton (props) {

  return ( 
      <Link
         to = {"/ChooseExperimentRobots"}
         state = {{ip: props.key, kind: props.action}}
      >
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          {props.name}
      </button>
      </Link>
   );
}
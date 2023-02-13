import React from 'react';
import TopBar from '../../../TopBar';
import { Link } from 'react-router-dom';
import { appendAction } from '../ActionFetch';


/**
 * The ActionKindPage is the page where the user chooses the kind of a new action
 */
export default function ActionListPage (props) {

  const nothing = (map) => {}

    return ( 
        <div>
            <TopBar title="Choose action kind"></TopBar>
            
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "gripperOpen", link:"/ActionListPage", execute: appendAction}}>
                <button>gripper open</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "gripperClose", link:"/ActionListPage", execute: appendAction}}>
                <button>gripper close</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "steering", link:"/ChooseVariablePage", execute: nothing}}>
                <button>steering</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "wait", link:"/setTime", execute: nothing}}>
                <button>wait</button>
            </Link>
            <Link to = {"/ChooseRobot"} // fehlt noch.....
                  state = {{kind: "custom", link:"/giveName", execute: nothing}}>
                <button>Custom</button>
            </Link>
        </div>
     );
}


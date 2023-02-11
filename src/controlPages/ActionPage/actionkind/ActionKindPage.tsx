import React from 'react';
import TopBar from '../../../TopBar';
import { Link } from 'react-router-dom';

/**
 * The ActionKindPage is the page where the user chooses the kind of a new action
 */
export default function ActionListPage (props) {

  

    return ( 
        <div>
            <TopBar title="Choose action kind"></TopBar>
            
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "gripperOpen", link:"/ActionListPage"}}>
                <button>gripper open</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "gripperClose", link:"/ActionListPage"}}>
                <button>gripper close</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "steering", link:"/ChooseVariablePage"}}>
                <button>steering</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{kind: "wait", link:"/setTime"}}>
                <button>wait</button>
            </Link>
        </div>
     );
}


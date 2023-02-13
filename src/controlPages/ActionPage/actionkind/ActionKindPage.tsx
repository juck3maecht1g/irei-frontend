import React from 'react';
import TopBar from '../../../TopBar';
import { Link } from 'react-router-dom';


/**
 * The ActionKindPage is the page where the user chooses the kind of a new action
 */
export default function ActionKindPage (props) {

    return ( 
        <div>
            <TopBar title="Choose action kind"></TopBar>
            
            <Link 
              to = {"/ChooseRobot"}
              state = {{action: "gripperOpen", link:"/ActionListPage"}}>
                <button>gripper open</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "gripperClose", link:"/ActionListPage"}}>
                <button>gripper close</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "steering", link:"/ChooseVariablePage"}}>
                <button>steering</button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "wait", link:"/setTime"}}>
                <button>wait</button>
            </Link>
            <Link to = {"/ChooseRobot"} 
                  state = {{ action: "custom", link:"/giveName"}}>
                <button>Custom</button>
            </Link>
        </div>
     );
}


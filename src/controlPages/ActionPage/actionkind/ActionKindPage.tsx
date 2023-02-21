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
              state = {{action: "open_gripper", link:"/ActionListPage"}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  gripper open
                </button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "close_gripper", link:"/ActionListPage"}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  gripper close
                </button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "move", link:"/ChooseVariablePage"}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  steering
                </button>
            </Link>
            <Link to = {"/ChooseRobot"}
                  state = {{ action: "wait", link:"/SetTimePage"}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  wait
                </button>
            </Link>
            <Link to = {"/ChooseRobot"} 
                  state = {{ action: "custom", link:"/SetCustomPage"}}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Custom
                </button>
            </Link>
            <Link to = {"/AddList"}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  actionlist
                </button>
            </Link>
        </div>
     );
}


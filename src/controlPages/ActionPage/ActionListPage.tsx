import React from 'react';
import {useState} from 'react';
import TopBar from '../../TopBar';
import ActionlistButton from './ActionlistButton';
import { Link } from 'react-router-dom';
import '../../irei_styles.css'
import { GetActionListContent, DeleteAction } from './ActionFetch';

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionListPage (props) {

    const [errorMessage, setErrorMessage] = useState("sorry robots couldnt be changed")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
    }

    const [actionlist, setActionlist] = useState(test);
    GetActionListContent(setActionlist)

    const deleteAction = (position) => {
        DeleteAction(errorState, position, setErrorMessage)
    }
    
    return ( 
        
        <div>
        <div className="test">
            <TopBar title="Actionlist"></TopBar>
                <Link to={"/MappingRobotsPage"}
                    state = {{index: [-1]}}>
                    <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                        edit mapping
                    </button>
                </Link>
            {
                actionlist.map((currElement, index) => {
                    var listIndex = [index];
                    return <div className="action-list-grid">
                        <div>
                        <ActionlistButton key={index} element={currElement} listPlace={listIndex}/>
                        </div>
                        <div>
                        <button onClick={() =>deleteAction(index)} className="icon-button irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            <i className="material-icons">delete</i>
                        </button>
                        </div>
                    </div>
                })
            }
            <Link to = {"/ActionKindPage"}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                <i className="material-icons">add</i>
                </button>
            </Link>
        </div>
            <div>
                <Link to = {"/ControlPage"}>
                    <button className="irei-back-button irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    <i className="material-icons">arrow_back</i>
                    </button>
                </Link>
            </div>
        </div>

     );
}


var position = new Map()
    position.set("name", "bett")
     position.set("coordinates", new Map([["?????", 234634]]))
var robot = new Map ()
    robot.set("name", "bot1")
     robot.set("ip", 1)
var closeGripper = new Map()
    closeGripper.set("key", "close_gripper")
     closeGripper.set("robots", [robot])
var openGripper = new Map()
    openGripper.set("key", "open_gripper")
     openGripper.set("robots", [robot])   
var custom = new Map()
    custom.set("key", "custom"); custom.set("robots", [robot])
    custom.set("action", "tischtennis")
var wait = new Map()
    wait.set("key", "wait"); wait.set("robots", [robot]); wait.set("time", 1235)
var move = new Map()
    move.set("key", "move"); move.set("robots", [robot]); move.set("position", position)
var sList = new Map()
    sList.set("key", "sequential_list");sList.set("name", "kochen"); sList.set("content", [closeGripper, openGripper])
var pList = new Map()
    pList.set("key", "parallel_list"); pList.set("name", "backen"); pList.set("content", [closeGripper, openGripper, sList])

    var test = [closeGripper]
    test.push(openGripper); test.push(custom); test.push(wait); test.push(move); test.push(sList); test.push(pList)
    
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import TopBar from '../../../TopBar';
import { SetCoordinateType, GetPositions, appendAction } from '../ActionFetch';


/**
 * The ChooseVariablePage is used to choose 
 * a variable for a robot to approach
 */
export default function ChooseVariablePage (props) {

    const location = useLocation();
    const { kind } = location.state;
    const { ip } = location.state;

    const [positions, setPositions] = useState(new Map())

    var state = "joint";
    
    const changeType = () => {
        if (state === "kartesisch") {
            state = "kartesisch";
        } else {
            state = "joint";
        }
        SetCoordinateType(state);
        GetPositions(setPositions)
    }
    
    const arrayPosition = Array.from( positions, function (entry) {
        return { key: entry[0], value: entry[1]}})


    const buttons = arrayPosition.map((number) => {
        return <PositionButton name= {number.value} 
        position={number.key} 
        kind={kind} ip={ip}/>
    })

    return (
        <div>
            <TopBar title="Choose Position" />
            <button onClick = {changeType}>
                {state? "joint" : "kartesisch"}
            </button>
            { buttons}
        </div>
    );
}

function PositionButton (props) {

    const sent = () => {
        var help = new Map();
        help.set("key", props.kind);
        help.set("robot", props.ip);
        help.set("position", props.position)
        appendAction(help);
    } 

    return ( 
    <Link to = {"/ActionListPage"}>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick = {sent}>
        {props.name}
      </button>
    </Link>
     );
  }
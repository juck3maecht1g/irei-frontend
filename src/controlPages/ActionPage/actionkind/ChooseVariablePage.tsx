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

    var state = "joint";
    const [positions, setPositions] = useState([]) // ähhhh array oder map?????????
    
    const press = () => {
        if (state === "kartesisch") {
            state = "kartesisch";
        } else {
            state = "joint";
        }
        SetCoordinateType(state);
        GetPositions(setPositions)
    }

    return (
        <div>
            <TopBar title="Choose Position" />
            <button onClick = {press}>
                {state? "joint" : "kartesisch"}
            </button>
            {positions.map((number) => {
                return <></>
            })}
        </div>
    );
}

function PositionButton (props) {

    const sent = () => {
        appendAction("")
    } // Was genau und wie übergeben

    return ( 
    <Link to = {"/ActionListPage"}>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick = {sent}>
        {props.name}
      </button>
    </Link>
     );
  }
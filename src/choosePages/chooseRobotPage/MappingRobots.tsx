import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from '../../TopBar';
import Popup from '../../PopUp/PopUp';
import ChooseRobotsForMappingPage from './ChooseRobotsForMapping';
import '../../irei_styles.css'
import { convertBackToFrontMapping, GetMapping, SetMapping, SetMappingPos } from '../../controlPages/ActionPage/ActionFetch';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';

export default function MappingRobotsPage () {

    const [errorMessage, setErrorMessage] = useState("sorry robots couldnt be changed")
    const [error, setError] = useState(false)
    const errorState = () => {
        setError(current => !current)
    }



    var [roles, setRoles] = useState([help1, help2, help3, help4])
    GetMapping(setRoles)

    const setChoice = (ip, number) => {
        var changed = [...roles]
        changed[number].set("robot", ip);
        setRoles(changed)
    }

    const sentToBackend = () => {
        /*var changed = []
        for (let i=0; i<roles.length; i++) {
            changed.push(roles[i].get("robot"));
        }
        console.log(changed) // changed to Backend
        console.log(index) // changed to Backend
        */
        SetMapping(roles, errorState, setErrorMessage)
    }

    const buttons = roles.map((element, index) => {
        console.log(element)
        return <MappingRobotsButton index = {index} element={element.get("robot")} action={element.get("name")} chosen={setChoice} />
    })

    return (
        <div>
            <TopBar title= "mapping of robots"/>
            {buttons}
            <Link to={"/ActionListPage"}>
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={sentToBackend}>
                    confirm
                </button>
            </Link>
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
    )
}

function MappingRobotsButton (props) {
    const [open, setOpen] = useState(false);


    const setChoice = (ip, number) => {
        props.chosen(ip,number)
        setOpen(false);
    }

    return (
        <div>
            {props.index} 
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick = {() => setOpen(true)}>
                {props.element}
            </button>
            {props.action}
            <Popup trigger = {open}>
            <ChooseRobotsForMappingPage number = {props.index} execute={setChoice}/>
             </Popup>
        </div>
    )
}

const help1 = new Map();
help1.set("name", "gripperOpen")
help1.set("robot", "234.846.984")

const help2 = new Map();
help2.set("name", "steering")
help2.set("robot", "435.600.000")

const help3 = new Map();
help3.set("name", "gripperClose")
help3.set("robot", "129.666.876")

const help4 = new Map();
help4.set("name", "wait")
help4.set("robot", "657.674.111")
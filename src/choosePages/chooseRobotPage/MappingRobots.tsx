import React from 'react';
import { useState } from 'react';
import TopBar from '../../TopBar';
import Popup from '../../PopUp/PopUp';
import ChooseRobotsForMappingPage from './ChooseRobotsForMapping';

export default function MappingRobotsPage () {
    var [roles, setRoles] = useState(["undefined", "undefined", "undefined"])
    // fetch methode vom Backend mit undefined array größe x


    const setChoice = (ip, number) => {
        var changed = [...roles]
        changed[number] = ip;
        setRoles(changed)

    }

    const buttons = roles.map((element, index) => {
        return <MappingRobotsButton index = {index} element={element} chosen={setChoice} />
    })

    return (
        <div>
            <TopBar name= "mapping of robots"/>
            {buttons}
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
            <button onClick = {() => setOpen(true)}>{props.element}</button>
            <Popup trigger = {open}>
            <ChooseRobotsForMappingPage number = {props.index} execute={setChoice}/>
             </Popup>
        </div>
    )
}

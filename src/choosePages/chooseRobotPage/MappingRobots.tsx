import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../../TopBar';
import Popup from '../../PopUp/PopUp';
import ChooseRobotsForMappingPage from './ChooseRobotsForMapping';

export default function MappingRobotsPage () {
    var [roles, setRoles] = useState([help1, help2, help3, help4])
    // fetch methode vom Backend mit undefined array größe x



    const setChoice = (ip, number) => {
        var changed = [...roles]
        changed[number].set("robot", ip);
        setRoles(changed)
    }

    const sentToBackend = () => {
        var changed = []
        for (let i=0; i<roles.length; i++) {
            changed.push(roles[i].get("robot"));
        }
        console.log(changed) // changed to Backend
    }

    const buttons = roles.map((element, index) => {
        return <MappingRobotsButton index = {index} element={element.get("robot")} action={element.get("name")} chosen={setChoice} />
    })

    return (
        <div>
            <TopBar name= "mapping of robots"/>
            {buttons}
            <Link to={"/ActionListPage"}>
                <button onClick={sentToBackend}>confirm</button>
            </Link>
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
            {props.index} {props.acion}
            <button onClick = {() => setOpen(true)}>{props.element}</button>
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
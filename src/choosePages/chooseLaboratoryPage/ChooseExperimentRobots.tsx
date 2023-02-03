import React from 'react'
import TopBar from '../../TopBar';
import ChooseButton from '../ChooseButton';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { prependOnceListener } from 'process';
/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseExperimentRobots(){

    const location = useLocation();
    const { from } = location.state;

    var [chosen, setChosen] = useState(new Map<string, string>()) // the chosen robots 


    const clickedBot = (ip, name) => {
        if (chosen.has(ip))  {
            chosen.delete(ip)
        } else {
            chosen.set(ip,name)
        }
    }

    const confirm = () => {
        // to do sent map chosen back to the backend
    }

    const button = from.map((number) => { 
        return <ChooseButton name={number.value} 
        ip={number.key}
        action = {clickedBot}/>
    })


    const chooseAll = () => {
        for(var i = 0;i<from.length;i++) { 
           if (!chosen.has(from[i].key)) {
            chosen.set(from[i].key,from[i].value)
           }
         }
    }

    return ( 
        <div>
        <TopBar title="Choose Robot"></TopBar>
        {button}
        <Link 
            to = {"/ChooseExperimentRobots"}
        >
            <button onClick={confirm}>confirm</button>
        </Link>
        <button onClick={chooseAll}>choose all</button>
        </div>
    );
}
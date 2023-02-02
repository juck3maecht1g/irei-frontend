import React from 'react'
import TopBar from '../../TopBar';
import ChooseButton from '../ChooseButton';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseExperimentRobots(){

    const location = useLocation();
    const { from } = location.state;
  //  var map = new Map<string, string>();

    var [chosen, setChosen] = useState(new Map<string, string>())

    const clickedBot = (ip, name) => {
        if (chosen.has(ip))  {
            chosen.delete(ip)
        } else {
            chosen.set(ip,name)
        }
    }

    return ( 
        <div>
        <TopBar title="Choose Robot"></TopBar>
        {from.map((number) => {
                return <ChooseButton name={number.key} ip={number.value} action = {clickedBot}/>
              }) }
        </div>
    );
}
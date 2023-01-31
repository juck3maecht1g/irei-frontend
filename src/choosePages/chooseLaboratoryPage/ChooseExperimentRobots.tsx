import React from 'react'
import { useState } from 'react'
import TopBar from '../../TopBar';
import ChooseButton from '../ChooseButton';
import { useLocation } from "react-router-dom";
/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseExperimentRobots(props){

    const location = useLocation();
    const { from } = location.state;

    const [robots, setRobots] = useState(new Map<string, string>());
    setRobots(from);

    return ( 
        <div>
        <TopBar title="Choose Robot"></TopBar>
        {
        arrLabs.map((number) => {
          return <ChooseButton name={number.key}/>
        })
        }
        </div>
    );
}
import React from 'react'
import TopBar from '../../TopBar';
import ChooseButton from '../ChooseButton';
import { useLocation } from "react-router-dom";
/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export default function ChooseExperimentRobots(){

    const location = useLocation();
    const { from } = location.state;

    return ( 
        <div>
        <TopBar title="Choose Robot"></TopBar>
        {from.map((number) => {
                return <ChooseButton name={number.key} ip={number.value}/>
              }) }
        </div>
    );
}
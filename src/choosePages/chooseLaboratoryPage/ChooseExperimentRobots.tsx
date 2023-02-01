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
    const { help } = location.state;

    console.log(help)

    return ( 
        <div>
        <TopBar title="Choose Robot"></TopBar>
        {help}
        </div>
    );
}
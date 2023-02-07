import React, {useState} from 'react';
import LoggerButton from './LoggerButton';

import TopBar from './../TopBar'
import GrippperButton from "./GripperButton"
import ResetButton from './ResetButton';
import SavePositionButton, { BaseNamePosition, informSavePosition } from './SavePositionButton';
import EmergencyExit from './EmergencyExit';
import ModeButton from './ModeButton';
import "./../Theme.css"
import PopUp from '../choosePages/PopUp';
import { NamingPopUp } from './NamingPopUp';
import { ErrorPopUp } from './ErrorPopUP';
//import ApproachPositionActionButton from '../ApproachPositionActionButton';

/**
 * The ControlPage is used to record an experiment
 * or to control Robots in the current scene
 */
function ControlPage (props) {
    const errorMessagePosition= "sorry position could not be saved"
    
    const [started, setIsStarted] = useState(false);
    const [notSaved, setNotSaved] = useState(false)
    const [namePosition, setNamePosition] = useState(false)
    const [nameSave, setNameSave] = useState(false)
    const [noPosition, setNoPosition] = useState(false)

    const noPositionSaved = () => {
       setNoPosition(current => !current)
      }
      
    const namePos= () => {
        setNamePosition(current => !current)
    }
   
    const startedLogging = () => {
      setIsStarted(current => !current)
    }


    return ( 
        <div >
            <TopBar title="Control"></TopBar>
            <h1>
                <ResetButton/>
                <SavePositionButton action={namePos}/>
                <GrippperButton/>
                <LoggerButton state={started} action={startedLogging}/>
                <EmergencyExit />
                <ModeButton />
            </h1>
            <NamingPopUp active = {namePosition} deactivate={namePos} forErrors={noPositionSaved}
            confirm={informSavePosition} getBaseName={BaseNamePosition}/>
            <ErrorPopUp active={noPosition} deactivate={noPositionSaved} message={errorMessagePosition}/>
        </div>
     );
}
 
export default ControlPage;






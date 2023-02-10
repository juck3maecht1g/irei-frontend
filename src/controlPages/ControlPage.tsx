import React, {useState} from 'react';
import LoggerButton, { BaseNameStop , postLoggingStop}  from './LoggerButton';
import TopBar from './../TopBar'
import GrippperButton from "./GripperButton"
import ResetButton from './ResetButton';
import SavePositionButton, { BaseNamePosition, informSavePosition } from './SavePositionButton';
import EmergencyExit from './EmergencyExit';
import ModeButton from './ModeButton';
import "./../Theme.css"
import { NamingPopUp } from '../PopUp/NamingPopUp';
import { ErrorPopUp } from '../PopUp/ErrorPopUP';


//import ApproachPositionActionButton from '../ApproachPositionActionButton';

/**
 * The ControlPage is used to record an experiment
 * or to control Robots in the current scene
 */
function ControlPage (props) {
    const [errorMessage, setErrorMessage] = useState("sorry position could not be saved")
    const [started, setIsStarted] = useState(false);
    const [namePosition, setNamePosition] = useState(false)
    const [nameSave, setNameSave] = useState(false)
    const [error, setError] = useState(false)

    const errorState = () => {
       setError(current => !current)
      }
      
    const namePos= () => {
        setNamePosition(current => !current)
    }
    const nameSaved= () => {
        setNameSave(current => !current)
    }
   
    const startedLogging = () => {
      setIsStarted(current => !current)
    }


    return ( 
        <div >
            <TopBar title="Control"></TopBar>
            <h1>
                <ResetButton forErrors={errorState} errorMessage={setErrorMessage}/>
                <SavePositionButton action={namePos}/>
                <GrippperButton forErrors={errorState} errorMessage={setErrorMessage}/>
                <LoggerButton state={started} action={startedLogging} stoped={nameSaved}/>
                <EmergencyExit />
                <ModeButton forErrors={errorState} errorMessage={setErrorMessage}/>
            </h1>
            <NamingPopUp active = {namePosition} deactivate={namePos} forErrors={errorState}
            confirm={informSavePosition} getBaseName={BaseNamePosition} errorMessage={setErrorMessage}/>
             <NamingPopUp active = {nameSave} deactivate={nameSaved} forErrors={errorState}
            confirm={postLoggingStop} getBaseName={BaseNameStop} errorMessage={setErrorMessage}/>
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
     );
}
 
export default ControlPage;






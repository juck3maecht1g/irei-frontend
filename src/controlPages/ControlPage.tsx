import React, {useState} from 'react';
import LoggerButton from './LoggerButton';

import TopBar from './../TopBar'
import GrippperButton from "./GripperButton"
import ResetButton from './ResetButton';
import SavePositionButton from './SavePositionButton';
import EmergencyExit from './EmergencyExit';
import ModeButton from './ModeButton';
//import ApproachPositionActionButton from '../ApproachPositionActionButton';

/**
 * The ControlPage is used to record an experiment
 * or to control Robots in the current scene
 */
function ControlPage (props) {

    
    const [started, setIsStarted] = useState(false);

    const startedLogging = () => {
      setIsStarted(current => !current)
    }


    return ( 
        <div>
            <TopBar title="Control"></TopBar>
            <h1>
                <ResetButton/>
                <SavePositionButton/>
                <GrippperButton/>
                <LoggerButton state={started} action={startedLogging}/>
                <EmergencyExit />
                <ModeButton />
            </h1>
        </div>
     );
}
 
export default ControlPage;



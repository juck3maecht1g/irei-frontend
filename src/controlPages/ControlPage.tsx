import React from 'react'
import LoggerButton from './LoggerButton'
import TopBar from './../TopBar'
import GrippperButton from "./GripperButton"
import ResetButton from './ResetButton';
import SavePositionButton from './SavePositionButton';
//import ApproachPositionActionButton from '../ApproachPositionActionButton';

/**
 * The ControlPage is used to record an experiment
 * or to control Robots in the current scene
 */
class ControlPage extends React.Component {

    render() { 
        return ( 
            <div>
                <TopBar title="Control"></TopBar>
                <h1>
                    <ResetButton/>
                    <SavePositionButton/>
                    <GrippperButton/>
                    <LoggerButton state={false}/>
                </h1>
            </div>
         );
    }
}
 
export default ControlPage;
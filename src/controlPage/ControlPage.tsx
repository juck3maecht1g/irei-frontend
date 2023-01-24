import React from 'react'
import LoggerButton from './LoggerButton'
<<<<<<< HEAD:src/ActionPages/controlPage/ControlPage.tsx
import TopBar from '../../TopBar';
=======
import GrippperButton from "./GripperButton"
import ResetButton from './ResetButton';
import SavePositionButton from './SavePositionButton';
//import ApproachPositionActionButton from '../ApproachPositionActionButton';
>>>>>>> refs/remotes/origin/main:src/controlPage/ControlPage.tsx

/**
 * The ControlPage is used to record an experiment
 * or to control Robots in the current scene
 */
class ControlPage extends React.Component {

    constructor(props) {
        super(props);
      }

    render() { 
        return ( 
            <div>
                <h1>
<<<<<<< HEAD:src/ActionPages/controlPage/ControlPage.tsx
                    <TopBar title="ControlPage"></TopBar>
=======
                    <ResetButton/>
                    <SavePositionButton/>
                    <GrippperButton/>
>>>>>>> refs/remotes/origin/main:src/controlPage/ControlPage.tsx
                    <LoggerButton state={false}/>
                </h1>
            </div>
         );
    }
}
 
export default ControlPage;
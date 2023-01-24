import React from 'react'
import LoggerButton from './LoggerButton'
import TopBar from '../../TopBar';

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
                    <TopBar title="ControlPage"></TopBar>
                    <LoggerButton state={false}/>
                </h1>
            </div>
         );
    }
}
 
export default ControlPage;
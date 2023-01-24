import React from 'react'
import ChoosePage from '../ChoosePage';

/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
class ChooseRobotPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <ChoosePage title="ChooseRobotPage"></ChoosePage>
            </div>
         );
    }
}
 
export default ChooseRobotPage;
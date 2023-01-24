import React from 'react'
import TopBar from '../../TopBar';

/**
 * The ChooseLaboratoryPage is used to choose 
 * the Laboratory the user wants to work in
 */
class ChooseLaboratoryPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <TopBar title="ChooseLaboratoryPage"></TopBar>
            </div>
         );
    }
}
 
export default ChooseLaboratoryPage;
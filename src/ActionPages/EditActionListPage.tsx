import React from 'react'
import TopBar from '../TopBar';

/**
 * The EditActionListPage is used to edit a list of actions
 */
class EditActionListPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <TopBar title="EditActionListPage"></TopBar>
            </div>
         );
    }
}
 
export default EditActionListPage;
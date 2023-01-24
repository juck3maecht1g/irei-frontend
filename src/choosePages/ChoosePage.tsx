import React from 'react'
import TopBar from '../TopBar';


class ChoosePage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <TopBar title={this.props.title}></TopBar>
        );
    }
}
 
export default ChoosePage;
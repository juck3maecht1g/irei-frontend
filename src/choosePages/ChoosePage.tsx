import React from 'react'
import TopBar from '../TopBar';


class ChoosePage extends React.Component {
    render() { 
        return (
            <TopBar title={this.props.title}></TopBar>
        );
    }
}
 
export default ChoosePage;
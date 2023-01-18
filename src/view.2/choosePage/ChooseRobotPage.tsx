import React from 'react';
import './components/Styles.css';
import ChoosePage from './ChoosePage'

class ChooseRobotPage extends React.Components {
    render() {
        return (
            <ChoosePage Titel="Choose Robots" function="" ButtonContent={getAllRobots()}></ChoosePage>
        );
    }
}

function getAllRobots() {

}

export default ChoosePage
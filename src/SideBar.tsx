import React from 'react'
import NavigationButton from './NavigationButton';

class SideBar extends React.Component {
    render() { 
        return (  
            <div>
                <NavigationButton destination="Control" destinationLink="/ControlPage"></NavigationButton>
                <NavigationButton destination="Edit ActionList" destinationLink="/EditActionListPage"></NavigationButton>
                <NavigationButton destination="C ActionList" destinationLink="/ChooseActionListPage"></NavigationButton>
                <NavigationButton destination="C Directory" destinationLink="/ChooseDirectoryPage"></NavigationButton>
                <NavigationButton destination="C Laboratory" destinationLink="/ChooseLaboratoryPage"></NavigationButton>
                <NavigationButton destination="C Language" destinationLink="/ChooseLanguagePage"></NavigationButton>
                <NavigationButton destination="C Name" destinationLink="/ChooseNamePage"></NavigationButton>
                <NavigationButton destination="C Robot" destinationLink="/ChooseRobotPage"></NavigationButton>
                <NavigationButton destination="C Variable" destinationLink="/ChooseVariablePage"></NavigationButton>
                <NavigationButton destination="Lobby" destinationLink="/LobbyPage"></NavigationButton>
            </div>
        );
    }
}
 
export default SideBar;
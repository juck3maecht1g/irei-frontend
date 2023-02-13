import {useState} from 'react';
import './theme.css'
import './irei_styles.css'
import 'material-icons'
import { Link } from 'react-router-dom';
import NavigationButton from './NavigationButton'

function TopBar(props) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return(
    <div class ='bar'>
      <div class="title_wrapper">
        <p className="title">
          {props.title}
        </p> 
      </div>
      <div class='wrapper'>
      <button id="menu" class="mdl-button mdl-js-button mdl-button--icon" onClick={handleClick}>
        <i class="material-icons">more_vert</i>
      </button>

      <div id='nav-list-container'class= {isActive ? "mdl-menu__container is-visible" : "mdl-menu__container"}>
        <ul id="nav-list" class="mdl-menu__outline mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="menu">
          <li class="mdl-menu__item nav-list-item">
            {/*<NavigationButton destination="Control" destinationLink="/ControlPage"></NavigationButton>*/}
            <Link to="/ControlPage"  className="navigation-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Control
            </Link>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="Edit ActionList" destinationLink="/EditActionListPage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C ActionList" destinationLink="/ChooseActionListPage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Directory" destinationLink="/ChooseDirectoryPage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Laboratory" destinationLink="/ChooseLaboratoryPage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Language" destinationLink="/ChooseLanguagePage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Robot" destinationLink="/ChooseRobotPage"></NavigationButton>
          </li>
          <li class="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Variable" destinationLink="/ChooseVariablePage"></NavigationButton>
          </li>
        </ul>
      </div>
      
      </div>
    </div>
    
  )
}

export default TopBar
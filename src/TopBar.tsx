import {useState} from 'react';
import './theme.css'
import './irei_styles.css'
import 'material-icons'
import NavigationButton from './NavigationButton'

function TopBar(props) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return(
    <div className ='bar'>
      <div className="title_wrapper">
        <p className="title">
          {props.title}
        </p> 
      </div>
      <div className='wrapper'>
      <button id="menu" className="mdl-button mdl-js-button mdl-button--icon" onClick={handleClick}>
        <i className="material-icons">more_vert</i>
      </button>

      <div id='nav-list-container'className= {isActive ? "mdl-menu__container is-visible" : "mdl-menu__container"}>
        <ul id="nav-list" className="mdl-menu__outline mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        htmlFor="menu">
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="Control" destinationLink="/ControlPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="Edit ActionList" destinationLink="/EditActionListPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C ActionList" destinationLink="/ChooseActionListPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Directory" destinationLink="/ChooseDirectoryPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Laboratory" destinationLink="/ChooseLaboratoryPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Language" destinationLink="/ChooseLanguagePage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Robot" destinationLink="/ChooseRobotPage"></NavigationButton>
          </li>
          <li className="mdl-menu__item nav-list-item">
            <NavigationButton destination="C Variable" destinationLink="/ChooseVariablePage"></NavigationButton>
          </li>
        </ul>
      </div>
      
      </div>
    </div>
    
  )
}

export default TopBar
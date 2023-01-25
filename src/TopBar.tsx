import React, {useState} from "react";
import './topbar.css'
import NavigationButton from './NavigationButton'

function TopBar(props) {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <p className="title">
                        {props.title}
                </p>
                
            </nav>

            <div className={menu_class} >
                <div >
                <NavigationButton destination="Control" destinationLink="/ControlPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="Edit ActionList" destinationLink="/EditActionListPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C ActionList" destinationLink="/ChooseActionListPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Directory" destinationLink="/ChooseDirectoryPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Laboratory" destinationLink="/ChooseLaboratoryPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Language" destinationLink="/ChooseLanguagePage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Name" destinationLink="/ChooseNamePage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Robot" destinationLink="/ChooseRobotPage"></NavigationButton>
                </div>
                <div >
                <NavigationButton destination="C Variable" destinationLink="/ChooseVariablePage"></NavigationButton>
                </div>
            </div>
        </div>
    )
}

export default TopBar
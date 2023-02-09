import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP } from '../Other FetchAndSet';
import { Link } from 'react-router-dom';
import PopUp from '../PopUp'

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<String,[]>());
    GetDirectories(setDirectories);

    const navUp = () => {
        NavigateUP();
        window.location.reload()
    }

    const navDown = (folder) => {
        NavigateDown( folder);
        window.location.reload()
    }
    
    var [popUpName, setPopUpName] = useState(false);
    const [name, setName] = useState("")

    return ( 
        <div>
            <TopBar title="Choose Directory"></TopBar>
            <div>
                {
                    directories.get("to_navigate")?.map((number) => {
                    return <DirectoryButton name={number} action={navDown}/>
                    })
                }
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick = {navUp}>navigate up</button>
            <Link to = {"/ControlPage"}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >confirm</button>
            </Link>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick = {()=> setPopUpName(true)}>create</button>
            
        <PopUp trigger={popUpName}>
            <form>
                <div>
                    <label>name the folder:</label>
                </div>
                <div>
                    <input
                    type="text"
                    required
                    value= {name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
            </form>
            {(name != "")? 
            <Link to = {"/ChooseLaboratoryPage"}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >confirm</button>
            </Link> : <></>
            }
        </PopUp>
        </div>
     );
}
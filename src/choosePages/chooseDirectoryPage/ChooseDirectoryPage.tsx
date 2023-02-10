import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP, Create, DeleteDirectory, BaseNameDir } from '../../backendComunication/FetchAndSetDirExp';
import { Link } from 'react-router-dom';

import { informSavePosition } from '../../controlPages/SavePositionButton';
import { NamingPopUp } from '../../PopUp/NamingPopUp';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<String,[]>());
    const [errorMessage, setErrorMessage] = useState("sorry something went wrong")
    const [error, setError] = useState(false)
    GetDirectories(setDirectories);

    const errorState = () => {
        setError(current => !current)
       }

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

    const activatePopup = () => {
        setPopUpName(current => !current)
       }
       

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
            <NamingPopUp active = {popUpName} deactivate={activatePopup} forErrors={errorState}
            confirm={informSavePosition} getBaseName={BaseNameDir} errorMessage={setErrorMessage}/>
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
     );
}
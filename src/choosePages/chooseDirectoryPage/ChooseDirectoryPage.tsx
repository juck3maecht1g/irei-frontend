import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP, Create, DeleteDirectory, BaseNameDir, confirmDirChoise } from '../../backendComunication/FetchAndSetDirExp';
import { NamingPopUp } from '../../PopUp/NamingPopUp';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';
import './../../theme.css'
import './../../irei_styles.css'

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const navigate = useNavigate();
    const [directories, setDirectories] = useState(new Map<String,[]>());
    const [errorMessage, setErrorMessage] = useState("sorry something went wrong")
    const [error, setError] = useState(false)
    var [popUpName, setPopUpName] = useState(false);
    GetDirectories(setDirectories);

    const errorState = () => {
        setError(current => !current)
       }

    const createDir = (action, name, setErrorMessage) => {
          Create(action, name, setErrorMessage).then(res => {
            if(res) {
                navigate("/ChooseLaboratoryPage")
            }
        }
        )
    }

    const navUp = () => {
        NavigateUP(errorState,setErrorMessage).then(res => {
            if(res) {
            window.location.reload()
            }
        })
    }

    const navDown = (name) => {
        NavigateDown( errorState, name, setErrorMessage).then(res => {
            if(res) {
            window.location.reload()
            }
        })
    }
    
    const confirmChoise = () => {
        confirmDirChoise(errorState, setErrorMessage).then(res => {
            if(res) {
                navigate("/ControlPage")
            }
        }
        )
    }


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
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick = {navUp}>navigate up</button>
        
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={confirmChoise}
            >confirm</button>
         
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick = {()=> setPopUpName(true)}>create</button>
            <NamingPopUp active = {popUpName} deactivate={activatePopup} forErrors={errorState}
            confirm={createDir} getBaseName={BaseNameDir} errorMessage={setErrorMessage}/>
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
        </div>
     );
}
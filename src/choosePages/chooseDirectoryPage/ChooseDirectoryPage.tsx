import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP } from '../Other FetchAndSet';
import { Link } from 'react-router-dom';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<String,[]>());
    GetDirectories(setDirectories);
    var registerArray = directories.get("to_navigate")

    const navUp = () => {
 //       NavigateUP(setDirectories);
        window.location.reload()
    }

    const navDown = (folder) => {
 //       NavigateDown( folder);
        window.location.reload()
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
            <button onClick = {navDown}>navigate up</button>
            <Link to = {"/ChooseLaboratoryPage"}>
                <button>confirm</button>
            </Link>
        </div>
     );
}

/**registerArray?.map((number) => {
                    return <DirectoryButton name={number} action = {navDown}/>
                }) */
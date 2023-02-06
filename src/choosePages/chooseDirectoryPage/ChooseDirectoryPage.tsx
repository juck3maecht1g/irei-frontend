import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP } from '../Other FetchAndSet';
import { Link } from 'react-router-dom';
import { constants } from 'os';
import { dir } from 'console';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<String,[]>());
    GetDirectories(setDirectories);
    console.log(directories)
    var registerArray = directories.get("to_navigate")
    console.log(registerArray)
 

    function help () {
            if (registerArray !== undefined) {
                return registerArray.map((number) => {
                    return <DirectoryButton name={number} />
                })
            }
            return []
        }
        
   
    /*const [button, setButtons] = useState (directories.get("to_navigate")
    .map((number) => {
        return <DirectoryButton name={number}/>
    }))

   */
    const navUp = (folder) => {
        NavigateUP(setDirectories);
        const arrNew = directories.get("to_navigate")
        setButtons(arrNew?.map((number)=> {
            return <DirectoryButton name={number} action = {navDown}/>
        }))
    }

    const navDown = (folder) => {
        NavigateDown(setDirectories, folder);
        const arrNew = directories.get("to_navigate")
        setButtons(arrNew?.map((number)=> {
            return <DirectoryButton name={number.value} action = {navDown}/>
        }))
    }
    


    return ( 
        <div>
            <TopBar title="Choose Directory"></TopBar>
            <div>
                {registerArray?.map((number) => {
                    return <DirectoryButton name={number} action = {navDown}/>
                })}
            </div>
            <button>navigate up</button>
            <Link to = {"/ChooseLaboratoryPage"}>
                <button>confirm</button>
            </Link>
        </div>
     );
}


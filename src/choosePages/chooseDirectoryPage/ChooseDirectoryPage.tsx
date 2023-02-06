import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP } from '../Other FetchAndSet';
import { Link } from 'react-router-dom';
import { constants } from 'os';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<String,[]>());
    GetDirectories(setDirectories).then()
    console.log(directories)
    
    var registerArray = directories.get("to_navigate")

 

    function help () {
            if (registerArray !== undefined) {
                return registerArray.map((number) => {
                    return <DirectoryButton name={number} />
                })
            }
            return []
        }
        
   /*
    const buttons = useState (directories.get("to_navigate")
    .map((number) => {
        return <DirectoryButton name={number}/>
    }))

   
    const navUp = (folder) => {
        NavigateUP(setDirectories);
        const arrNew = Array.from(directories, function (entry) {
        return { key: entry[0], value: entry[1]}})
        setButtons(arrNew.map((number)=> {
            return <DirectoryButton name={number.value} action = {navDown}/>
        }))
    }

    const navDown = (folder) => {
        NavigateDown(setDirectories, folder);
        const arrNew = Array.from(directories, function (entry) {
        return { key: entry[0], value: entry[1]}})
        setButtons(arrNew.map((number)=> {
            return <DirectoryButton name={number.value} action = {navDown}/>
        }))
    }
    */


    return ( 
        <div>
            <TopBar title="Choose Directory"></TopBar>
            {registerArray.map((number) => {
                    return <DirectoryButton name={number} />
                })}
            <button>navigate up</button>
            <Link to = {"/ChooseLaboratoryButton"}>
                <button>confirm</button>
            </Link>
        </div>
     );
}


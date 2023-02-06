import React from 'react'
import {useState} from 'react'
import TopBar from '../../TopBar';
import DirectoryButton from './DirectoryButton';
import { GetDirectories, NavigateDown, NavigateUP } from '../Other FetchAndSet';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
export default function ChooseDirectoryPage () {
    const [directories, setDirectories] = useState(new Map<any,any>());
    GetDirectories(setDirectories);

    const arrRegister = Array.from(directories, function (entry) {
        return { key: entry[0], value: entry[1]}})

    const [buttons, setButtons] = useState (arrRegister.map((number) => {
        return <DirectoryButton name={number.value} action = {navDown}/>
    }))

    const navDown = (folder) => {
        NavigateDown(setDirectories, folder);
        const arrNew = Array.from(directories, function (entry) {
        return { key: entry[0], value: entry[1]}})
        setButtons(arrNew.map((number)=> {
            return <DirectoryButton name={number.value} action = {navDown}/>
        }))
    }

    return ( 
        <div>
            <TopBar title="Choose Directory"></TopBar>
            {buttons}
        </div>
     );
}
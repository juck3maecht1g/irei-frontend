import React from 'react'

/**
 * The DirectoryButton is used to navigate into the directory
 * this button displays
 */
export default function NewDirectoryButton (props) {

    const execute = () => {
        props.action(props.name)
    }

    return ( 
        <button onClick={execute}>{props.name}</button>
     );
}
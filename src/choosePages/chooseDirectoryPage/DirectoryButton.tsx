import React from 'react'

/**
 * The DirectoryButton is used to navigate into the directory
 * this button displays
 */
export default function DirectoryButton (props) {

    const execute = () => {
    }

    return ( 
        <button onClick={execute}>{props.name}</button>
     );
}
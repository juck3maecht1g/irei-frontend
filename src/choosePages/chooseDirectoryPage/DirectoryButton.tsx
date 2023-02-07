import React from 'react'

/**
 * The DirectoryButton is used to navigate into the directory
 * this button displays
 */
export default function DirectoryButton (props) {

    const execute = () => {
        props.action(props.name)
    }

    return ( 
        <div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
         onClick={execute}>{props.name}</button>
        </div>
        
     );
}
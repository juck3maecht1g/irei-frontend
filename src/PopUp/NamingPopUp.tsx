import React, { useState } from "react";
import PopUp from "./PopUp";
import './../theme.css'
import './../irei_styles.css'
import './Popup.css'



export function NamingPopUp(props) {
//active, confirm, forErrors, getBaseName
    const [name, setName] = useState("")
    props.getBaseName(setName)
    return (
        <PopUp trigger={props.active}>
            <form>
                <div>
                    <label>
                        please enter a name or accept the default name:
                    </label>
                </div>
                <div>
                    <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
            {(name !== "")? 
            <button className="popup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                onClick={
                    () => {
                        props.confirm(props.forErrors, name, props.errorMessage)
                        props.deactivate()
                    }
                }>
                confirm
            </button>
            
            
            : <></>
        } 
        <button className="popup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
            onClick={
                    () => {
                    props.deactivate()
                }
            }>
                cancel
        </button>    
        </PopUp>
        )
}
import React, { useState } from "react";
import PopUp from "../choosePages/PopUp";



export function NamingPopUp(props) {
//active, confirm, forErrors, getBaseName
    const [name, setName] = useState("")
    props.getBaseName(setName)


    return (
        <PopUp trigger={props.active}>
                    <form>
                        <div>
                            <label>please enter a name or accept the default name:</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            required
                            value= {name}
                            onChange = {(e) => setName(e.target.value)}
                            />
                        </div>
                    </form>
                    {(name != "")? 
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={() => {props.confirm(props.forErrors, name)
                    props.deactivate()
                    }}
                    >confirm</button>
                    
                    
                    : <></>
                }
                </PopUp>
        )
}
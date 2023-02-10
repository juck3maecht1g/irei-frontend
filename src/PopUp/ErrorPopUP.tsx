import React, { useState } from "react";
import PopUp from "./PopUp";



export function ErrorPopUp(props) {
//active deactivate


    return (
        <PopUp trigger={props.active}>
                    <form>
                        <div>
                            <label>{props.message}</label>
                        </div>
                       
                    </form>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                     onClick={props.deactivate} 
                    >ok</button>
                    : <></>
                </PopUp>
        )
}
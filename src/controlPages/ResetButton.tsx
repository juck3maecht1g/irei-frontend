import React from "react";
import { post } from "../backendComunication/BasicOpperations";

import "./../Theme.css"

const fetchAdress = "http://127.0.0.1:5000/api/reset"
const resetMessage = "reset"



function informReset(errorMessage, forErrors) {
    post(resetMessage, fetchAdress).then(res=> {
        if(res !== "Done") {
           errorMessage(res)
           forErrors()
            
        }
    })
}




/**
 * The ResetButton is used to reset a scene
 */
function ResetButton (props) {
    return ( 
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={()=> {informReset(props.errorMessage, props.forErrors)}}>reset</button>
     );
}
 
export default ResetButton;
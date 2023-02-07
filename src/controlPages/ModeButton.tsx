import React, { useState } from "react";
import { post, passDataDirect} from "../choosePages/Other FetchAndSet";
const postAdress = "http://127.0.0.1:5000/api/cycle_modes"
const fetchAdress = "http://127.0.0.1:5000/api/get_mode"
const cycleModeMassage = "cycle_modes"


function GetMode(setMode) {
    var [fetched, setFetched] = useState(false) 
    passDataDirect(setMode, fetched, setFetched, fetchAdress)



    
}


/**
 * The ResetButton is used to reset a scene
 */
function ModeButton () {
    var [mode, setMode] = useState() 
    var [fetched, setFetched] = useState(false) 
    GetMode(setMode)
    const test = () => {
    post(cycleModeMassage, postAdress).then(res => {
    if(res == "Done") {
        console.log("working")
    }
   }).then(res => {
    passDataDirect(setMode, fetched, setFetched, fetchAdress)
    .then(res => setFetched(false))
})
}

    return ( 
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={test
        }>{mode}</button>
     );
}
 
export default ModeButton;
import React, { useState } from 'react'
import {post, passDataDirect} from "../choosePages/Other FetchAndSet"
const fetchAdress = "http://127.0.0.1:5000/api/savePosition"
const fetchAdressName = "http://127.0.0.1:5000/api/get_base_name_save_position"
const savePositionMassage = "savePosition"
const successMarker = "Done"

export function informSavePosition(action, name) {
    var to_post = new Map()
    to_post.set("marker", savePositionMassage)
    to_post.set("name", name)
    const result = Object.fromEntries(to_post)
    post(result, fetchAdress).then(res => {
            if(res != "Done") {
                action()
            }
    })
}
/**
 * The SavePositionButton is used to save a Position 
 * for later use
 */
function SavePositionButton (props) {
    return ( 
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={props.action}>save position</button>
     );
}

 
export default SavePositionButton;


export function BaseNamePosition(setName) {
    var [fetched, setFetched] = useState(false) 
    passDataDirect(setName, fetched, setFetched, fetchAdressName)
}
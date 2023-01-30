import React from "react";
const fetchAdress = "http://127.0.0.1:5000/api/reset"
const resetMassage = "reset"

function informReset() {
    async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(resetMassage)
        })
        
    } 
    post()
}




/**
 * The ResetButton is used to reset a scene
 */
function ResetButton () {
    return ( 
        <button className='controlbutton' onClick={informReset}>reset</button>
     );
}
 
export default ResetButton;
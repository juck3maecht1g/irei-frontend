import React from "react";
const fetchAdress = "http://127.0.0.1:5000/reset"
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
}




/**
 * The ResetButton is used to reset a scene
 */
class ResetButton extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <button></button>
         );
    }
}
 
export default ResetButton;
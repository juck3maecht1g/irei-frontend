import React from "react";
const fetchAdress = "http://127.0.0.1:5000/cancel"
const cancelMassage = "cancel"

function informCancel() {
     async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(cancelMassage)
        })
       
    }
}









/**
 * The CancelButton is used when canceling/aborting an 
 * ongoing recording in the backend
 */
class CancelButton extends React.Component {
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
 
export default CancelButton;
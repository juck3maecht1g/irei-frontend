import React from 'react'
const fetchAdress = "http://127.0.0.1:5000/stop"
const StopMassage = "stopLogger"

function informCancel() {
     async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(StopMassage)
        })
        if(response.ok) {
            //todo
        }
       
    }
}
/**
 * The StopButton is used to stop and save an ongoing recording
 */
class StopButton extends React.Component {
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
 
export default StopButton;
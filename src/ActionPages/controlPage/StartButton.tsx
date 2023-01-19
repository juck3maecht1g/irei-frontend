import React from 'react'
const fetchAdress = "http://127.0.0.1:5000/start"
const startMassage = "start"

function informStart() {
     async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(startMassage)
        })
       
    }
}
/**
 * The StartButton is used to start a recording
 */
class StartButton extends React.Component {
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
 
export default StartButton;
import React from 'react'
const fetchAdress = "http://127.0.0.1:5000/api/emergency_stop"
const Massage = "emergency_stop"
function informEmergencyStop() {
    async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(Massage)
        })
        if(response.ok) {
            //todo
        }
    }
    
    post()
}
export default function EmergencyExit (props) {
    return <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"  onClick={informEmergencyStop}>emergency stop</button>
}
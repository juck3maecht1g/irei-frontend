import React from 'react';
const fetchAdressStop = "http://127.0.0.1:5000/stop"
const stopMessage = "stopLogger"
const fetchAdressStart = "http://127.0.0.1:5000/start"
const startMessage = "start"
const fetchAdressCancel = "http://127.0.0.1:5000/cancel"
const cancelMessage = "cancel"

export default function LoggerButton (props) {

      const start = (
        <div>
            <button onClick={startLogging}>Start</button>
        </div>
      )
  
      const stop = (
        <div>
          <button onClick={stopLogging}>Stop</button>
          <button onClick={cancelLogging}>Abort</button>
        </div>
      )
  
      return (
        <div onClick={props.action}>
          {props.state ? start : stop}
        </div>
      )
  };

function stopLogging() {
  async function post (){
       const response = await fetch(fetchAdressStop, {
           'method': 'POST',
           headers : {
           'Content-Type': 'application/json'
           },
           body : JSON.stringify(stopMessage)
       })
       if(response.ok) {
           //todo
       }
      
  }
  post()
};

function startLogging() {
  async function post (){
     const response = await fetch(fetchAdressStart, {
         'method': 'POST',
         headers : {
         'Content-Type': 'application/json'
         },
         body : JSON.stringify(startMessage)
     })
    
 }
 post()
}

function cancelLogging() {
  async function post (){
     const response = await fetch(fetchAdressCancel, {
         'method': 'POST',
         headers : {
         'Content-Type': 'application/json'
         },
         body : JSON.stringify(cancelMessage)
     })
    
 }
 post()
}
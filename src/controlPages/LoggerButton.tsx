import React, { useState } from 'react';
import { passDataDirect, post } from '../backendComunication/BasicOpperations';
import './Control.css';

const fetchAdressStop = "http://127.0.0.1:5000/api/stop"
const fetchAdressName = "http://127.0.0.1:5000/api/get_base_name_stop"
const stopMessage = "stop"
const fetchAdressStart = "http://127.0.0.1:5000/api/start"
const startMessage = "start"
const fetchAdressCancel = "http://127.0.0.1:5000/api/cancel"
const cancelMessage = "cancel"


export function postLoggingStop(errorfunction, name, setErrorMessage) {
  var to_post = new Map()
  to_post.set("marker", stopMessage)
  to_post.set("name", name)
  const result = Object.fromEntries(to_post)
  post(result, fetchAdressStop).then(res => {
    if(res != "Done") {
        setErrorMessage(res)
        errorfunction()
    }
  })
}

export function BaseNameStop(setName) {
  var [fetched, setFetched] = useState(false) 
  passDataDirect(setName, fetched, setFetched, fetchAdressName)
}

export default function LoggerButton (props) {

  function stopLogging() {
    props.action();
  }


  function startLogging() {
    async function post (){
       const response = await fetch(fetchAdressStart, {
           'method': 'POST',
           headers : {
           'Content-Type': 'application/json'
           },
           body : JSON.stringify(startMessage)
       })
  
       console.log(response)
      
   }
   post()
   props.action();
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
   props.action();
  }

  const start = (
    <div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={startLogging}>Start</button>
    </div>
  )

  const stop = (
    <div>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
       onClick={() => {
        props.stoped()
        stopLogging()}}>Stop</button>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
       onClick={cancelLogging}>Abort</button>
    </div>
  )

  return (
    <>
    {props.state ? stop : start}
    </>
  )
};
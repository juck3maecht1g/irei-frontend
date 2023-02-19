import React, { useState } from 'react';
import { passDataDirect, post } from '../backendComunication/BasicOpperations';
import './Control.css';
import './../theme.css'
import './../irei_styles.css'

const fetchAdressStop = "http://127.0.0.1:5000/api/stop"
const fetchAdressName = "http://127.0.0.1:5000/api/get_base_name_stop"
const stopMessage = "stop"
const fetchAdressStart = "http://127.0.0.1:5000/api/start"
const startMessage = "start"
const fetchAdressCancel = "http://127.0.0.1:5000/api/cancel"
const cancelMessage = "cancel"


export function postLoggingStop(errorfunction, name, setErrorMessage, started) {
  var to_post = new Map()
  to_post.set("marker", stopMessage)
  to_post.set("name", name)
  const result = Object.fromEntries(to_post)
  post(result, fetchAdressStop).then(
    res => {
      console.log(started)
      if(res !== "Done") {
          setErrorMessage(res)
          errorfunction()
      }else {
        started()
      }
    }
  )
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
    post(startMessage, fetchAdressStart).then(
      res => {
        if(res !== "Done") {
            props.errorMessage(res)
            props.errorfunction()
        }
        else {
          props.action();
        } 
      }
    )
 
  }

  function cancelLogging() {
    post(cancelMessage, fetchAdressCancel).then(
      res => {
        if(res !== "Done") {
          console.log(res)
          props.errorMessage(res)
          props.errorfunction()
        }
        else {
          props.action();
      }
      }
    )
  
  }

  const start = (
    <div>
      <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
        onClick={startLogging}>
        Start
      </button>
    </div>
  )

  const stop = (
    <div>
      <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        onClick={
        () => {
          props.stoped()
        }
        }>
        Stop
      </button>
      <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
       onClick={cancelLogging}>
        Abort
      </button>
    </div>
  )

  return (
    <>
    {props.state ? stop : start}
    </>
  )
};
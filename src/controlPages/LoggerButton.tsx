import { Action } from '@remix-run/router';
import React from 'react';
import './Control.css';
const fetchAdressStop = "http://127.0.0.1:5000/api/stop"
const stopMessage = "stopLogger"
const fetchAdressStart = "http://127.0.0.1:5000/api/start"
const startMessage = "start"
const fetchAdressCancel = "http://127.0.0.1:5000/api/cancel"
const cancelMessage = "cancel"

export default function LoggerButton (props) {

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
        <button className='controlbutton' onClick={startLogging}>Start</button>
    </div>
  )

  const stop = (
    <div>
      <button className='controlbutton' onClick={stopLogging}>Stop</button>
      <button className='controlbutton' onClick={cancelLogging}>Abort</button>
    </div>
  )

  return (
    <>
    {props.state ? stop : start}
    </>
  )
};
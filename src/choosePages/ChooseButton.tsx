import React, {useState} from 'react'
import './Choose.css'

export default function ChooseButton (props) {

    const [state, setState] = useState(false);

    const startedLogging = () => {
        setState(current => !current)
        props.action(props.ip,props.name)
    }
    
    const chosen = (
      <button className="chosen" onClick={startedLogging}>
        <div>{props.name}</div>
        <div>{props.ip}</div>
      </button>
      )
  
      const notChosen = (
        <button className="not_chosen" onClick={startedLogging}>
          <div>{props.name}</div>
          <div>{props.ip}</div>
        </button>
      )
  
      return (
        <div>
          {state ? chosen : notChosen}
        </div>
      )
}
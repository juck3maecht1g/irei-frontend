import React, {useState} from 'react'
import './Choose.css'

export default function ChooseButton (props) {

  const [state, setState] = useState(props.state);

    const startedLogging = () => {
        setState(current => !current)
        props.action(props.ip,props.name)
    }
    
    const chosen = (
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
      onClick={startedLogging}>
        <div>{props.name}</div>
        <div>{props.ip}</div>
      </button>
      )
  
      const notChosen = (
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
         onClick={startedLogging}>
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
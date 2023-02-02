import React, {useState} from 'react'
import './Choose.css'

export default function ChooseButton (props) {

    const [state, setState] = useState(false);

    const startedLogging = () => {
        setState(current => !current)
    }
    
    const chosen = (
      <button className="chosen" onClick={startedLogging}>{props.name}</button>
      )
  
      const notChosen = (
        <button className="not_chosen" onClick={startedLogging}>{props.name}</button>
      )
  
      return (
        <div>
          {state ? chosen : notChosen}
        </div>
      )
};
      
     
  
import React, {useState} from 'react'
import './Choose.css'

export default function ChooseButton (props) {

    const [state, setState] = useState(false);

    const startedLogging = () => {
        setState(current => !current)
    }
    
    const chosen = (
      <button className="chosen">{props.name}</button>
      )
  
      const notChosen = (
        <button className="not_chosen">{props.name}</button>
      )
  
      return (
        <div>
          {state ? chosen : notChosen}
        </div>
      )
};
      
  
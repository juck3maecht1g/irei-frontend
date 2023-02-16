import React from 'react';
import {useState} from 'react';
import { ExecuteActionList, SetButtonIndex } from './ActionPage/ActionFetch';
import './../irei_styles.css'
import ChooseListPage from './ActionPage/ChooseListPage';
import Popup from '../PopUp/PopUp';

export default function ActionListButton (props) {
    
    const [actionlist, setActionList] = useState("")
    const [choosing, setChoosing] = useState(false)

    const execute = ()=> {
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)
    }

    const informPosition = () => { //brauchen wir das
        console.log("hi")
        setChoosing(false)
        SetButtonIndex(props.index, props.errorfunction, props.setErrorMessage)
    }


    return (
        <div>
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                onClick={execute}>
                <div>
                    {props.index}
                </div>
                <div>
                    {actionlist}
                </div>
            </button>
            <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                    onClick={()=>setChoosing(true)}>
                    edit
            </button>
            <Popup trigger= {choosing}>
                <ChooseListPage execute={setActionList} close={informPosition}/>
            </Popup>
        </div>
        
    )
}
/*

<Link to={"/ChooseListPage"} state={{execute: {setActionList}}} >
                <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={informPosition}>
                    edit
                </button>
            </Link>
*/
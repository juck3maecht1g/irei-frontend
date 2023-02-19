import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { ExecuteActionList, SetButtonIndex } from './ActionPage/ActionFetch';
import './../irei_styles.css'
//import ChooseListPage from './ActionPage/ChooseListPage';
//import Popup from '../PopUp/PopUp';

export default function ActionListButton (props) {
    
    const [actionlist, setActionList] = useState("")
 //   const [choosing, setChoosing] = useState(false)

    const execute = ()=> {
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)
    }

    const informPosition = () => {
        SetButtonIndex(props.index, props.errorfunction, props.setErrorMessage)
    }


    return (
        <div className="actionlist-button-grid">
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
            </div>
            
            <div>
            <Link to={"/ChooseListPage"} >
                <button className="icon-button irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={informPosition}>
                <i className="material-icons">edit</i>
                </button>
            </Link>
            </div>
        </div>
    )
}
/*
<button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
                    onClick={()=>setChoosing(true)}>
                    edit
            </button>

            <Popup trigger= {choosing}>
                <ChooseListPage execute={setActionList} close={informPosition}/>
            </Popup>
*/
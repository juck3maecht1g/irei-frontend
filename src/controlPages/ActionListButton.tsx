import React from 'react';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExecuteActionList, SetButtonIndex } from './ActionPage/ActionFetch';
import './../irei_styles.css'
//import ChooseListPage from './ActionPage/ChooseListPage';
//import Popup from '../PopUp/PopUp';

export default function ActionListButton (props) {
    const navigate = useNavigate();
    const [actionlist, setActionList] = useState("")
 //   const [choosing, setChoosing] = useState(false)

    const execute = ()=> {
        informPosition()
        ExecuteActionList(actionlist, props.errorfunction, props.errorMessage)

    }

    const informPosition = () => {
        SetButtonIndex(props.index, props.errorfunction, props.setErrorMessage).then(res => {
            if(res){
                navigate("/ChooseListPage")
            }
        })
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
            
            
                <button className="icon-button irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={informPosition}>
                <i className="material-icons">edit</i>
                </button>
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
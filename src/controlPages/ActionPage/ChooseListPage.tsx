import React from 'react';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../../TopBar';
import { GetActionListNames, SetActionList, CreatetActionList } from './ActionFetch';
import { NamingPopUp } from '../../PopUp/NamingPopUp';
import { ErrorPopUp } from '../../PopUp/ErrorPopUP';
import Popup from '../../PopUp/PopUp';
import './../../theme.css'
import './../../irei_styles.css'

/**
 * The ChooseListPage is used to choose an existing list of action 
 */
export default function ChooseListPage () {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("sorry position could not be saved")
    const [error, setError] = useState(false)
    var [popUpNameActive, deactivatePopup] = useState(false);
    var [name, setName] = useState("");

    const saveName = (p1, pName, p3) => {
        setName(pName)
    }

    const errorState = () => {
        setError(current => !current)
       }

    const [lists, setList] = useState([]);
    GetActionListNames(setList)

    const sentChoiceBack = (name) => {
        SetActionList(errorState, name, setErrorMessage); 
    }

    const buttons = lists.map((number) => {
        return <Link to = {"/ActionListPage"}>
     <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" 
        onClick ={() => sentChoiceBack(number)}>
        {number}
     </button>
     </Link>
    })

    const newList = ( kind) => {
        console.log(name)
        CreatetActionList(name, kind, errorState, setErrorMessage)
        navigate("/ActionListPage")
    }

    return (
        <div>
            <TopBar title="Choose Action List"/>
            {buttons}
            <button onClick={()=>{deactivatePopup(true)}} className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> 
                new actionlist 
            </button>
            <NamingPopUp active = {popUpNameActive} deactivate={()=>{deactivatePopup(false)}} forErrors={errorState}
                        confirm={saveName} getBaseName={(key)=>{return ""}} errorMessage={setErrorMessage}/>
            <ErrorPopUp active={error} deactivate={errorState} message={errorMessage}/>
            <Popup trigger={(name !== "")}>
                <button onClick = {()=>{newList("parralel")}}>
                    parralel
                </button>
                <button onClick = {()=>{newList("sequential")}}>
                    sequential
                </button>
            </Popup>
        </div>
    )
}
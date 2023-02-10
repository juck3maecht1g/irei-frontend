import React from 'react'
import {useState} from 'react'
import { DeleteAction } from './ActionFetch';

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionlistButton (props) {
    
    const action = props.element;

    const [state, setState] = useState(false);


    const createButtons = () => {
        console.log(action.get("content"))
        if (action.get("content") != undefined) {
        return action.get("content").map((currElement, index) => {
            return <div>
                <ActionlistButton key={index} element={currElement} />
            </div>
        })}
        return <></>
    }
    
    const open = createButtons();


    if (action.get("key") === "sequential_list") { // kennung so oder anders
        return (
            <div>
                <button onClick = {() => setState(prevState => !prevState)}>
                    <div>{action.get("name")}</div>
                    <div>equential_list</div>
                </button>
                {state && open}
            </div>
        )
    } else if (action.get("key") === "parallel_list") {
        return (
            <div>
                <button onClick = {() => setState(prevState => !prevState)}>
                    <div>{action.get("name")}</div>
                    <div>parallel_list</div>
                </button>
                {state && open}
            </div>
        )
    }

    return (
        <button> 
            <div>{action.get("key")}</div>
            <div>{props.second}</div>
        </button>
    )

}

function actionButton (props) {
    return (
        <div>
            <button>{props.name}</button>
            <button>delete</button>
        </div> 
    )
}
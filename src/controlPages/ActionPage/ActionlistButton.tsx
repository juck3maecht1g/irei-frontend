import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { DeleteAction } from './ActionFetch';

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionlistButton (props) {
    
    
    const action = props.element;

    const [state, setState] = useState(false);

    

    const createButtons = () => {
        if (action.get("content") !== undefined) {
        return action.get("content").map((currElement, index) => {
            var listIndex = [...props.listPlace];
            listIndex.push(index)
            return <div>
                <ActionlistButton key={index} element={currElement} listPlace={listIndex}/>
            </div>
        })}
        return <></>
    }
    
    const open = createButtons();


    if (action.get("key") === "sequential_list") { 
        return (
            <div>
                <button onClick = {() => setState(prevState => !prevState)}>
                    <div>{action.get("name")}</div>
                    <div>sequential_list</div>
                </button>
                <Link to={"/MappingRobotsPage"}
                 state = {{index: props.listPlace}}>
                    <button >edit mapping</button>
                </Link>
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
                <Link to={"/MappingRobotsPage"}
                 state = {{index: props.listPlace}}>
                    <button >edit mapping</button>
                </Link>
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
import React from 'react'
import {useState} from 'react'

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionlistButton (props) {

    if (props.kind === "l") { // kennung so oder anders
        return (
            <ListButton name = {props.name} list = {props.second}/>
        )
    }

    return (
        <button> 
            <div>{props.name}</div>
            <div>{props.second}</div>
        </button>
    )
}

function ListButton (props) {
    const [state, setState] = useState(false);

    const createButtons = () => {
        const array = Array.from(props.list, function(entry) {
            return { key: entry[0], value: entry[1]}
        })
        return array.map((number) => {
            return <div>
                <ActionlistButton 
                key = {number.key} 
                name = {number.value[0]} 
                second = {number.value[1]}/>
        
            </div>
        })
    }
    const open = createButtons();

    return ( 
        <div>
            <button onClick = {() => setState(prevState => !prevState)}>{props.name}</button>
            {state && open}
        </div>
     );
}

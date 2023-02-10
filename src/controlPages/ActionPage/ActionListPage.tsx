import React from 'react';
import {useState} from 'react';
import TopBar from '../../TopBar';
import ActionlistButton from './ActionlistButton';

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionListPage (props) {
    

    //const [actionlist, setActionlist] = useState(new Map<string, []>());
    //über Fetch set ActionList
    const [actionlist, setActionlist] = useState( CreaateArray());

    const array = Array.from(actionlist, function(entry) {
        return { key: entry[0], value: entry[1]}
    })

    return ( 
        <div>
            <TopBar title="Actionlist"></TopBar>
            {
                array.map((number) => {
                    return <div>
                        <ActionlistButton key={number.key} 
                        name={number.value[0]} 
                        second={number.value[1]}
                         kind={number.value[2]} />
                    </div>
                })
            }
        </div>
     );
}

const CreaateArray = () => { // Müll zum testen

    var happines = new Map()
    happines.set("7", ["steering", "Niclas", "a"])
    happines.set("8", ["steering", "dominik", "a"])
    happines.set("9", ["steering", "rudolf", "a"])

    var maood = new Map()
    maood.set("1", ["gripper", "Niclas", "action"])
    maood.set("2", ["gripper", "dominik", "a"])
    maood.set("3", ["gripper", "rudolf", "a"])
    maood.set("4", ["listeeee", happines, "l"])
    maood.set("5", ["gripper", "tessa", "a"])
    maood.set("6", ["gripper", "julie", "a"])

    

    return maood;
}
 
import React from 'react';
import TopBar from '../../TopBar';
import ActionlistButton from './ActionlistButton';

/**
 * The ActionListPage is used to edit a list of actions by adding new action and deleting others
 */
export default function ActionListPage (props) {
    

    //const [actionlist, setActionlist] = useState(new Map<string, []>());
    //über Fetch set ActionList
    const actionlist = test;
    return ( 
        <div>
            <TopBar title="Actionlist"></TopBar>
            {
                actionlist.map((currElement, index) => {
                    return <div>
                        <ActionlistButton key={index} element={currElement} />
                    </div>
                })
            }
        </div>
     );
}


var position = new Map()
    position.set("name", "bett")
     position.set("coordinates", new Map([["?????", 234634]]))
var robot = new Map ()
    robot.set("name", "bot1")
     robot.set("ip", 1)
var closeGripper = new Map()
    closeGripper.set("key", "close_gripper")
     closeGripper.set("robots", [robot])
var openGripper = new Map()
    openGripper.set("key", "open_gripper")
     openGripper.set("robots", [robot])   
var custom = new Map()
    custom.set("key", "custom"); custom.set("robots", [robot])
    custom.set("action", "tischtennis")
var wait = new Map()
 
    wait.set("key", "wait"); wait.set("robots", [robot]); wait.set("time", 1235)
var move = new Map()
    move.set("key", "move"); move.set("robots", [robot]); move.set("position", position)
var sList = new Map()
    sList.set("key", "sequential_list");sList.set("name", "kochen"); sList.set("content", [closeGripper, openGripper])
var pList = new Map()
    pList.set("key", "parallel_list"); pList.set("name", "backen"); pList.set("content", [closeGripper, openGripper])
var test = [closeGripper]
    test.push(openGripper); test.push(custom); test.push(wait); test.push(move); test.push(sList); test.push(pList)
    
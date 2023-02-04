import { useEffect, useState } from "react"
import { passDataDirect , post} from "./Other FetchAndSet"

const fetchAdressAllActionLists = "/api/get-action_lists"
const postAdressActionList = "/api/set_action_list"
const fetchAdressContentActiveList = "/api/get_action_list_content"
const postAdressAppendAction = "/api/append_action"
const postAdressDeleteAction = "/api/delete_action"
const postAdressSwapActions = "/api/swap_action"
const postAdressCreateActionList = "/api/create_action_list"
const postAdressExecuteList = "/api/executeList"
const postAdressCoordinateType = "/api/set_coordinate_type"
const fetchAdressPositionList = "/api/get_coordinates"

/**gets a list of dictionarrys containing a "name" of the action list and a "key"
 * specifieing if sequential or parallel
 * 
 * @param setLists 
 */
export async function GetActionListNames(setLists){ // returns string list
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setLists, fetched, setfetched, fetchAdressAllActionLists)


}
/**
 *  fetches an array of dictionarrys each kontaining all data nessesary if key != action_list
 *  otherwise containig just the name of the underling actionList and information if it is a paralell od sequential list
 * @param setContent the method to set with the fetched data
 */

export async function GetActionListContent(setContent){ // returns string list
    var [fetched, setfetched] = useState(false)                                     
    passDataDirect(setContent, fetched, setfetched, fetchAdressContentActiveList)


}

/** action is a dictionarry containing the key which action to append, and all n essesary arguments for that action
 */
export async function appendAction(setContent, action){
    var toPost =  action
    toPost.set("marker", "append_action")
    post(toPost, postAdressAppendAction).then(res =>{
    GetActionListContent(setContent)
    })
}


/** informs the backend that the actionlist with the given name was chosen
 * and gets its content
 * 
 * @param setContent 
 * @param name 
 */
export async function SetActionList(setContent, name:String){
    var toPost =  new Map()
    toPost.set("marker", "set_action_list")
    toPost.set("name", name)
    post(toPost, postAdressActionList).then(res =>{
    GetActionListContent(setContent)
    })
}

/** delets the action in the currently changed list at the given position
 * and gets the changed list
 * 
 * @param setContent 
 * @param position 
 */
export async function DeleteAction(setContent,position){
    var toPost =  new Map()
    toPost.set("marker", "delete_action")
    toPost.set("position", position)
    post(toPost, postAdressDeleteAction).then(res =>{
        GetActionListContent(setContent)
        })

}

/** swaps the actions at the two specified positions and gets the modified list
 * 
 * @param setContent 
 * @param first position as int
 * @param second 
 */
export async function SwapActions(setContent,first, second){
    var toPost =  new Map()
    toPost.set("marker", "swap")
    toPost.set("first", first)
    toPost.set("second", second)
    post(toPost, postAdressSwapActions).then(res =>{
        GetActionListContent(setContent)
        })

}
/** creates a new action listwith given name and given type("sequential_list" or"parallel_list")
 *  and gets the content of the new list
 * @param setContent 
 * @param name 
 * @param type 
 */
export async function CreatetActionList(setContent, name:String, type:String){
    var message =  new Map()
    message.set("marker", "create_action_list")
    message.set("name", name)
    message.set("key", type)
    post(message, postAdressCreateActionList).then(res =>{
        GetActionListContent(setContent)
        })

}
/** executes the action list with the given name
 * 
 * @param name 
 */
export async function ExecuteActionList(name:String){
    var message =  new Map()
    message.set("marker", "execute_action_list")
    message.set("name", name)
    post(message, postAdressExecuteList)

}

/** sets the type the coordinates are handeled ans displaied in ton the specified type("cartesian","joint")
 * 
 * @param type 
 */
export async function SetCoordinateType(type:String){
    var message =  new Map()
    message.set("marker", "set_coordinate_type")
    message.set("type", type)
    post(message, postAdressCoordinateType)

}

/** gets all available positions as dict with ("name", and the coordinate "coordinate")
 * 
 * @param setPositions 
 */
export async function GetPositions(setPositions){ // returns Map list
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setPositions, fetched, setfetched, fetchAdressPositionList)


}
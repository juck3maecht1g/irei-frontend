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

/**fetches an array of Strings
 * 
 * @param setLists 
 */
export async function GetActionListNames(setLists){ // returns string list
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setLists, fetched, setfetched, fetchAdressAllActionLists)


}
/**
 *  fetches an array of dictionarrys each kontaining all data nessesary if key != action_list
 *  otherwise containig just the name of the underliing actionList
 * @param setContent the method to set with the fetched data
 */

export async function GetActionListContent(setContent){ // returns string list
    var [fetched, setfetched] = useState(false)                                     
    passDataDirect(setContent, fetched, setfetched, fetchAdressContentActiveList)


}

/** here will be append Action when definit and finished in backend
 * marker == "append_action"
 */

/** here will be getPositions when definit and finished in backend
 * 
 */




export async function SetActionList(setContent, name:String){
    var toPost =  new Map()
    toPost.set("marker", "set_action_list")
    toPost.set("name", name)
    post(toPost, postAdressActionList).then(res =>{
    GetActionListContent(setContent)
    })
}

export async function DeleteAction(setContent,position){
    var toPost =  new Map()
    toPost.set("marker", "delete_action")
    toPost.set("position", position)
    post(toPost, postAdressDeleteAction).then(res =>{
        GetActionListContent(setContent)
        })

}
export async function SwapActions(setContent,first, second){
    var toPost =  new Map()
    toPost.set("marker", "swap")
    toPost.set("first", first)
    toPost.set("second", second)
    post(toPost, postAdressSwapActions).then(res =>{
        GetActionListContent(setContent)
        })

}

export async function CreatetActionList(setContent, name:String){
    var message =  new Map()
    message.set("marker", "create_action_list")
    message.set("name", name)
    post(message, postAdressCreateActionList).then(res =>{
        GetActionListContent(setContent)
        })

}

export async function ExecuteActionList(name:String){
    var message =  new Map()
    message.set("marker", "execute_action_list")
    message.set("name", name)
    post(message, postAdressExecuteList)

}
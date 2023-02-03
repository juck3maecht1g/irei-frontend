import { useState } from "react"

const fetchAdressGetExperiments = "" 
const postAdressChosenExperiment = ""
const fetchAdressGetDirectories = ""
const postAdressNavigateUP = ""
const postAdressNavigateDown = ""
const postAdressCreateDirectory = ""
const postAdressDeleteDirectory = ""


export async function GetExperiments(setExperiments){
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setExperiments, fetched, setfetched, fetchAdressGetExperiments)


}

export async function SetExperiment(experiment){
    var message =  new Map()
    message.set("marker", "SetExperiment")
    message.set("experiment", experiment)
    post(message, postAdressChosenExperiment)

}
/** gets a dictionary with two entrys
 * "to_navigate" all child experiments
 * "cant_navigate" all other files in directory
 * @param setDirectories 
 */
export async function GetDirectories(setDirectories){
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setDirectories, fetched, setfetched, fetchAdressGetDirectories)


}



const markerNavUP = "navigate_up"
export async function NavigateUP(setDirectories){
    var message =  new Map()
    message.set("marker", markerNavUP)
    post(message, postAdressNavigateUP).then(res => {
        GetDirectories(setDirectories)})
}
const markerNavDown = "navigate_down"
export async function NavigateDown(setDirectories,directory){
    var message =  new Map()
    message.set("marker", markerNavDown)
    message.set("dir", directory)
    post(message, postAdressNavigateDown).then(res => {
        GetDirectories(setDirectories)})

}

const markerCreate = "crerate"
export async function Create(setDirectories,name){
    var message =  new Map()
    message.set("marker", markerCreate)
    message.set("name", name)
    post(message, postAdressCreateDirectory).then(res => {
        GetDirectories(setDirectories)})

}
const markerDeleteDirectory = "delete_directory"
export async function DeleteDirectory(setDirectories,name){
    var message =  new Map()
    message.set("marker", markerDeleteDirectory)
    message.set("name", name)
    
    post(message, postAdressDeleteDirectory).then(res => {
        GetDirectories(setDirectories)})

}

//todo unclean
export async function passDataDirect(setList, fetched, setfetched, adress){

    if(fetched) {
        return
        }
        setfetched (true)
        const data = await (
            await fetch(
            adress
            )
        ).json().then(data => {
            setList(data)
        }
        )
}



export async function post (content, postAdress){
    const response = await fetch(postAdress, {
        'method': 'POST',
        headers : {
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(content)
    })

}  


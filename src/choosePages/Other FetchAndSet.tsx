import { useState } from "react"

const fetchAdressGetExperiments = "http://127.0.0.1:5000/api/getRegExp"
const postAdressChosenExperiment = "http://127.0.0.1:5000/api/setup_exp"
const fetchAdressGetDirectories = "http://127.0.0.1:5000/api/get_content"
const postAdressNavigateUP = "http://127.0.0.1:5000/api/navigate_up"
const postAdressNavigateDown = "http://127.0.0.1:5000/api/navigate_down"
const postAdressCreateDirectory = "http://127.0.0.1:5000/api/create_dirctory"
const postAdressDeleteDirectory = "http://127.0.0.1:5000/api/delete_dirctory"

// contains dummy

/** gets names of all registered experiments as array
 * 
 */
export async function GetExperiments(setExperiments){
    var [fetched, setfetched] = useState(false) 
    passDataDirect(setExperiments, fetched, setfetched, fetchAdressGetExperiments)


}

export async function SetExperiment(experiment){
    var message =  new Map()
    message.set("marker", "SetExperiment")
    message.set("experiment", experiment)
    const result = Object.fromEntries(message)
    post(result, postAdressChosenExperiment)

}

// contains dummy

/** gets a dictionary with two entrys
 * "to_navigate" all child experiments
 * "cant_navigate" all other files in directory
 * @param setDirectories 
 */
export async function GetDirectories(setDirectories){
    var [fetched, setfetched] = useState(false) 
   passDataAsMap(setDirectories, fetched, setfetched, fetchAdressGetDirectories)
    

    
}



const markerNavUP = "navigate_up"
export async function NavigateUP(){
    var message =  new Map()
    message.set("marker", markerNavUP)
    post(message, postAdressNavigateUP)
}
const markerNavDown = "navigate_down"
export async function NavigateDown(directory){
    var message =  new Map()
    message.set("marker", markerNavDown)
    message.set("dir", directory)
    post(message, postAdressNavigateDown)

}

const markerCreate = "crerate"
export async function Create(name){
    var message =  new Map()
    message.set("marker", markerCreate)
    message.set("name", name)
    post(message, postAdressCreateDirectory)

}
const markerDeleteDirectory = "delete_directory"
export async function DeleteDirectory(name){
    var message =  new Map()
    message.set("marker", markerDeleteDirectory)
    message.set("name", name)
    
    post(message, postAdressDeleteDirectory)

}

export async function passDataDirect(set, fetched, setfetched, adress){

    if(fetched) {
        return
        }
        setfetched (true)
        const data = await (
            await fetch(
            adress
            )
        ).json().then(data => {
            set(data)
        }
        )
}

export async function passDataAsMap(set, fetched, setfetched, adress){

    if(fetched) {
        return
        }
        setfetched (true)
        const data = await (
            await fetch(
            adress
            )
        ).json().then(data => {
            var dir = new Map(Object.entries(data))
            set(dir)
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
    return (await response.text()).toString()

}  


const fetchAdressGetExperiments = "" 
const postAdressChosenExperiment = ""
const fetchAdressGetDirectories = ""
const postAdressNavigateUP = ""
const postAdressNavigateDown = ""


export async function GetExperiments(setExperiments, fetched, setfetched){
    getStringList(setExperiments, fetched, setfetched, fetchAdressGetExperiments)


}


export async function GetDirectories(setDirectories, fetched, setfetched){
    getStringList(setDirectories, fetched, setfetched, fetchAdressGetDirectories)


}

export async function SetExperiment(experiment){
    post(experiment, postAdressChosenExperiment)

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
    message.set("marker", markerNavDown)
    message.set("name", name)
    post(message, postAdressNavigateDown)

}


async function getStringList(setList, fetched, setfetched, adress){

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



async function post (content, postAdress){
    const response = await fetch(postAdress, {
        'method': 'POST',
        headers : {
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(content)
    })

}  


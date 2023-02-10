

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
// testen des Pop up mit Namen eingabe TODO löschne


import React from 'react'
import {useState} from 'react'

export default function Test (props) {
    const [name, setName] = useState("hello")

    return (
        <form>
            <label>name the folder:</label>
            <input
                type="text"
                required
                value= {name}
                onChange = {(e) => setName(e.target.value)}
            />
            <button>confirm</button>
            {name}
        </form>
    )
}
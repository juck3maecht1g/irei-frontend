import React from 'react'
const fetchAdress = "http://127.0.0.1:5000/api/execchangegripper"
const Massage = "execchangegripper"

function informexecChangeGripper() {
    async function post (){
        const response = await fetch(fetchAdress, {
            'method': 'POST',
            headers : {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify(Massage)
        })
        if(response.ok) {
            //todo
        }
    }
    
    post()
}

/**
 * The GripperButton is used to control the Gripper auf chosen Robots
 */
class GripperButton extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <button>gripper</button>
         );
    }
}
 
export default GripperButton;
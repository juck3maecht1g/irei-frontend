import React from 'react'
const fetchAdress = "http://127.0.0.1:5000/api/executeList"
const Massage = "executeList"

function informSavePosition() {
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
 * The ExecuteActionListButton is used to execute a list of
 * actions
 */
class ExecuteActionListButton extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <button>actionlist</button>
         );
    }
}
 
export default ExecuteActionListButton;
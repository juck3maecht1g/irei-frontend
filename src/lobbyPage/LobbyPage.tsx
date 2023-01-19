import React from "react";
import { useNavigate } from 'react-router-dom';



const intervallTime = 1000
const fetchAdress = "http://127.0.0.1:5000/"
const redirection = "/choosefolder"
const successCode = 200

/**this Method trys to fetch from the fetchAdress in intrvallTime intervalls
 * and if successful redirects to redirection
 * 
 */
function PingBackend() {
    const navigate = useNavigate();
      // fetch data
      const repeatedFunktion = setInterval(
      async function dataFetch () {
        const data = await (
          await fetch(
            fetchAdress
          )
        ).status;
          if(data == successCode) {
            clearInterval(repeatedFunktion)
            navigate(redirection)
          }
      }
      , intervallTime)
      
}



function LobbyPage() {
   

  
        return (  
            <div>
                LobbyPage
                {PingBackend()}
            </div>

        )
    


    
}export default LobbyPage;


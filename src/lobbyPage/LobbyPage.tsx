import React, {Component} from "react";
import { useNavigate } from 'react-router-dom';



const intervalltime = 1000
const fetchAdress = "http://127.0.0.1:5000/"
const redirection = "/choosefolder"
const successCode = 200
//
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
          console.log(data)
          if(data == successCode) {
            clearInterval(repeatedFunktion)
            navigate(redirection)
          }
      }
      , intervalltime)
      
}



function LobbyPage() {
   

  
        return (  
            <div>
                LobbyPage
                {PingBackend()}
            </div>

        )
    


    
}export default LobbyPage;


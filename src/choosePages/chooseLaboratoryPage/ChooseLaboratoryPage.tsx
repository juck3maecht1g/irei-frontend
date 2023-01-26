import { data } from 'browserslist'
import React, { useEffect, useState } from 'react'
import TopBar from '../../TopBar';
const fetchAdress = "http://127.0.0.1:5000/test"
const Massage = ""
/**
 * The ChooseLaboratoryPage is used to choose 
 * the Laboratory the user wants to work in
 */
export function ChooseLaboratoryPage() {
    var [labs, setLabs] = useState(new Map<string, Map<string, string>>()); // key = labname, value = robot list
    var [fetched, setfetched] = useState(false)
    getLabs(setLabs, fetched, setfetched)

    //shema für labornamen 
    for (let key of labs.keys()) {
      console.log(key) //laborname
    }

    // shema um roboter namen zu kriegen
    for (let key of labs.keys()) {
      if(typeof labs.get(key) != "undefined") {
        for (let koy of labs.get(key).keys()) { // is catched one line above
          console.log(koy); // roboternamen
      }          
      }

    }

    return ( 
      
      <div>
        <TopBar title="Choose Laboratory"></TopBar>
      </div>
    );

    
  
    
}
export default ChooseLaboratoryPage;




async function getLabs(setLabs, fetched, setfetched){
  if(fetched) {
    return
  }
   setfetched (true)
    const data = await (
      await fetch(
        fetchAdress
      )
    ).json().then(data => {
      var labs = new Map()
      for(let i = 0; i < data.length; i++) {
          var robots = new Map()
          for(let j = 0; j < data[i].robots.length; j++) {
            robots.set(data[i].robots[j].name, data[i].robots[j].ip)
          }
        labs.set(data[i].name, robots)
      }
      setLabs(labs)
    }
    )
   
        // set state when the data received
}
import React from 'react'
import TopBar from '../../TopBar';
import { data } from 'browserslist'
import React, { useEffect, useState } from 'react'
const fetchAdress = "http://127.0.0.1:5000/test"
const Massage = ""

/**
 * The ChooseLaboratoryPage is used to choose 
 * the Laboratory the user wants to work in
 */
class ChooseLaboratoryPage extends React.Component {
    render() { 
        return ( 
            <div>
                <TopBar title="Choose Laboratory"></TopBar>
            </div>
         );
    }
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
        labs.set(data[i].name, data[i].robots)
      }
      setLabs(labs)
    }
    )
   
        // set state when the data received
}
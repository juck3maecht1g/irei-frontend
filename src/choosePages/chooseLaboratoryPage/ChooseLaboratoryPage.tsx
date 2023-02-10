import React from 'react';
import { useState } from 'react';
import { getLabs } from '../../backendComunication/FetchAndSetLab';
import TopBar from '../../TopBar';
import ChooseLaboratoryButton from './ChooseLaboratoryButton';
const fetchAdress = "http://127.0.0.1:5000/api/getLab";

/**
 * The ChooseLaboratoryPage is used to choose 
 * the Laboratory the user wants to work in
 */
export default function ChooseLaboratoryPage() {

    const [labs, setLabs] = useState(new Map<string, Map<string, string>>()); // key = labname, value = robot list
    var [fetched, setfetched] = useState(false)
    getLabs(setLabs, fetched, setfetched)
    const arrLabs = Array.from(labs, function (entry) {
      return { key: entry[0], value: entry[1]};
    });

    const robots = (key) => {
     return Array.from(labs.get(key), function (entry) {
      return { key: entry[0], value: entry[1]}})
    }


       return ( 
      <div>
        <TopBar title="Choose Laboratory"></TopBar>
        {
          arrLabs.map((number) => {
            return <ChooseLaboratoryButton name={number.key} 
            buttons = {robots} />
          })
        }
      </div>
    );
}

/**
 * //shema für labornamen 
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
 */


   
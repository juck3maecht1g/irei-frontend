import { data } from 'browserslist'
import React, { useEffect, useState } from 'react'
import TopBar from '../../TopBar';
import ChoosePage from '../ChoosePage';
import { GetGripperRobots, GetExpRobots, GetLabRobots } from './FetchRobots';

/**
 * The ChooserobotPage is used to choose the robots
 * the user wants to work with
 */
export function ChooseRobotPageMultiple(){
    var key = "gripper"                     // indicator for what action this page is used
    var [chosenRobots, setChosenRobots] = useState(new Map<string, string>());
    var [robots, setRobots] = useState(new Map<string, string>());
    if(key == "gripper") { // specifies which methods to call when choosing gripper robots
        GetGripperRobots(setChosenRobots)
        GetExpRobots(setRobots) 
      
    }

        return ( 
            <div>
               
            </div>
         );
         //<ChoosePage title="Choose Robot"></ChoosePage>
}
 
export default ChooseRobotPageMultiple;


/** everything below semingly not needed
 * 
 */
//gets the tobots chosen for gripper on controll page

/*async function getGripperRobots(setChosenRobots, fetched, setfetched){
  if(fetched) {
    return
  }
   setfetched (true)
    const data = await (
      await fetch(
        fetchAdressGripperRobots
      )
    ).json().then(data => {
          var robots = new Map()
          for(let j = 0; j < data.length; j++) {
            robots.set(data[j].ip, data[j].name)
          }
      
      setChosenRobots(robots)
    }
    )
}

//gets the robots chosen for experiment
async function getExpRobots(setRobots, fetched, setfetchedRobots){
    if(fetched) {
        return
      }
       setfetchedRobots (true)
        const data = await (
          await fetch(
            fetchAdressExpRobots
          )
        ).json().then(data => {
              var robots = new Map()
              for(let j = 0; j < data.length; j++) {
                robots.set(data[j].ip, data[j].name)
              }
          
          setRobots(robots)
        }
        )
    }


/*totest
for (let key of .keys()) {
    console.log(key) //laborname
  }
  */
// this file contains multiple methods used to fetch robots from the backend

import { useEffect, useState } from "react"



const fetchAdressGripperRobots = "http://127.0.0.1:5000/api/getRobotsForGripper" 
const postAdressLab = "http://127.0.0.1:5000/api/setCurrentLab"
const fetchAdressLabRobots = "http://127.0.0.1:5000/api/getRobotsOfLab"
const fetchAdressExpRobots = "http://127.0.0.1:5000/api/getRobotsInExperiment"



//gets the robots chosen for gripper on controll page

export async function GetGripperRobots(setRobots){
    var [fetched, setfetched] = useState(false) 
    getRobots(setRobots, fetched, setfetched, fetchAdressGripperRobots)
 
    
  }
  

  //gets the robots chosen for experiment
  export async function GetExpRobots(setRobots){
      var [fetched, setfetched] = useState(false) 
      getRobots(setRobots, fetched, setfetched, fetchAdressExpRobots)
    }



    export async function GetLabRobots(setRobots, labName){
        var [fetched, setfetched] = useState(false) 
        
        informLabChoise(labName).then(res => {
        getRobots(setRobots, fetched, setfetched, fetchAdressLabRobots)
        })
      }


    /**informs the backend which lab was chosen
     * 
     * @param labName  name of the chosen lab
     */
    async function informLabChoise (labName){
      const response = await fetch(postAdressLab, {
          'method': 'POST',
          headers : {
          'Content-Type': 'application/json'
          },
          body : JSON.stringify(labName)
      })
    }


  /** gets a list of robots from the specified adress and sublies them ad map to the specified usestate
   * 
   * @param setRobots 
   * @param fetched 
   * @param setfetchedRobots 
   * @param adress 
   * @returns 
   */
    async function getRobots(setRobots, fetched, setfetched, adress){
      
      if(fetched) {
          return
        }
         setfetched (true)
          const data = await (
            await fetch(
              adress
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
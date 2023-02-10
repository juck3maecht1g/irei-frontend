import { post } from "./BasicOpperations"

const postAdressExpRobots = "http://127.0.0.1:5000/api/setRobotsExp"
const postAdressChangeGripperRobots= "http://127.0.0.1:5000/api/api/setRobotsGripper"
const postAdressSavePositionRobots = "http://127.0.0.1:5000/api/api/setSavePosition"



export async function SetExpRobots(robotIps){
    var message =  new Map()
    message.set("marker", "SetExpRobots")
    message.set("robot_ips", robotIps)
    post(robotIps, postAdressExpRobots)
  }
export async function SetChangeGripperRobots(robotIps){
    var message =  new Map()
    message.set("marker", "SetChangeGripperRobots")
    message.set("robot_ips", robotIps)
    post(message, postAdressChangeGripperRobots)
}
export async function SetSavePositionRobot(robotIps){
    var message =  new Map()
    message.set("marker", "SetSavePositionRobot")
    message.set("robot_ip", robotIps)
    post(robotIps, postAdressSavePositionRobots)
}




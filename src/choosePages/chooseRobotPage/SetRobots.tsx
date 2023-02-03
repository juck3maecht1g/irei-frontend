import {post} from "../Other FetchAndSet"
const postAdressExpRobots = "/api/set_exp_robots"
const postAdressChangeGripperRobots= "/api/set_change_gripper_robots"
const postAdressSavePositionRobots = "/api/set_save_position_robot"



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



//redundant method
/** used to send arrays of ip adreses or single ip adresses
 * 
 * @param robotIp 
 * @param postAdress 
 
async function informRobots (robotIp, postAdress){
    const response = await fetch(postAdress, {
        'method': 'POST',
        headers : {
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(robotIp)
    })

}  
*/




// contains an example od potential error handling
/*

async function informRobots (robotIp, postAdress){
    const response = await fetch(postAdress, {
        'method': 'POST',
        headers : {
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(robotIp)
    })
    if(response.statusText != "CREATED") {
        some error stuff
    }

}  */

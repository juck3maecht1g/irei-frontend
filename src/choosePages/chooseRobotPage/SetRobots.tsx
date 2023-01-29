
const postAdressExpRobots = "/api/set_exp_robots"
const postAdressChangeGripperRobots= "/api/set_change_gripper_robots"
const postAdressSavePositionRobots = "/api/set_save_position_robot"



export async function SetExpRobots(robotIps){
    informRobots(robotIps, postAdressExpRobots)
  }
export async function SetChangeGripperRobots(robotIps){
informRobots(robotIps, postAdressChangeGripperRobots)
}
export async function SetSavePositionRobots(robotIps){
informRobots(robotIps, postAdressSavePositionRobots)
}

/** used to send arrays of ip adreses or single ip adresses
 * 
 * @param robotIp 
 * @param postAdress 
 */
async function informRobots (robotIp, postAdress){
    const response = await fetch(postAdress, {
        'method': 'POST',
        headers : {
        'Content-Type': 'application/json'
        },
        body : JSON.stringify(robotIp)
    })

}  




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

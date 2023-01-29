
const postAdressExpRobots = "/api/set_exp_robots"
const postAdressControllGripperRobots= "/api/set_change_gripper_robots"
const postAdressSavePositionRobots = "/api/set_save_position_robot"




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


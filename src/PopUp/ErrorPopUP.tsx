
import PopUp from "./PopUp";
import './../theme.css'
import './../irei_styles.css'



export function ErrorPopUp(props) {
//active deactivate


    return (
        <PopUp trigger={props.active}>
                    <form>
                        <div>
                            <label>{props.message}</label>
                        </div>
                       
                    </form>
                    <button className="irei-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                     onClick={props.deactivate} 
                    >ok</button>
                    : <></>
                </PopUp>
        )
}
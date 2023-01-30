import React from 'react'
import '../Choose.css';

/**
 * The ChooseLaboratoryButton is used to choose 
 * the Laboratory which is displayed from this Button
 */
export default function ChooseLaboratoryButton (props) {
    return ( 
        <button className='not_chosen'>{props.name}</button>
     );
}
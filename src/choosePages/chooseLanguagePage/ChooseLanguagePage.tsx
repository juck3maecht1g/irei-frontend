import React from 'react'
import ChoosePage from './../ChoosePage';

/**
 * The ChooseLanguageButton is used to choose the language
 * the user wants to work with
 */
class ChooseLanguagePage extends React.Component {
    render() { 
        return ( 
            <div>
               <ChoosePage title="Choose Language"></ChoosePage> 
            </div>
         );
    }
}
 
export default ChooseLanguagePage;
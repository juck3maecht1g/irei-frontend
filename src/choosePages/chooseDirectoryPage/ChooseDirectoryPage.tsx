import React from 'react'
import DirectoryButton from './DirectoryButton';
import TopBar from '../../TopBar';

/**
 * The ChooseDirectoryPage is used to navigate in a Datastructure
 * and choose a directory
 */
class ChooseDirectoryPage extends React.Component {
    render() { 
        return ( 
            <div>
                <TopBar title="Choose Directory"></TopBar>
                <DirectoryButton/>
            </div>
         );
    }
}
 
export default ChooseDirectoryPage;
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import EngineeringIcon from '@mui/icons-material/Engineering';

import './redirect.css'

export const Redirect = () => {
    return (
        <div id='redirect'>
            <div id='top-container'>
                <img id='banner-logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)"/>
                <h2 id='top-banner'>Adventurer's Hoard</h2>
                <div id='suggestion-container'>
                    <div className='suggestion-icon-container'>
                        <IconButton sx={{'justify-content': 'center', display: 'flex', 'flex-direction': 'column', color:'white'}}>
                            <p className='suggestion-title'>Suggestions</p>
                            <ChatIcon/>
                        </IconButton>
                    </div>
                    <div className='suggestion-icon-container'>
                        <IconButton sx={{'justify-content': 'center', display: 'flex', 'flex-direction': 'column', color:'white'}}>
                            <p className='suggestion-title'>Requests</p>
                            <EngineeringIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <h3 id='mid-banner'>- Blender, Sculptris</h3>
            <h3 id='mid-banner'>- Character/Object Design</h3>
            <h3 id='mid-banner'>- FDM/SLA Printing</h3>
        </div>
    )

}
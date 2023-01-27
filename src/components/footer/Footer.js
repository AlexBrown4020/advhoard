import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Suggestions } from '../../components/suggestions/Suggestions';
import './footer.css';
import { useState } from 'react';

export const Footer = () => {
    let [suggestion, setSuggestion] = useState(false);

    const toggleSuggestion = () => {
        setSuggestion(!suggestion);
    }

    return (
        <section id='footer'>
            <div id='suggestion-container'>
                <div className='suggestion-icon-container'>
                    <IconButton sx={{'justify-content': 'center', display: 'flex', 'flex-direction': 'column', color:'white'}} onClick={() => {
                        toggleSuggestion();
                    }}>
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
            <div id='info-container'>
                <div className='footerTextContainer'>
                    <p className='footer-text'>Alexander Brown, All rights reserved</p>
                </div>
                <div id='website-container'>
                    <div className='website-link' >
                        <IconButton href='https://portfolio-page-adb.herokuapp.com/index.html'>
                            <HomeIcon sx={{color:'white'}}/>
                        </IconButton>
                    </div>
                    <div className='website-link'>
                        <IconButton href='https://www.linkedin.com/in/alex-brown-2a6b7820a/'>
                            <LinkedInIcon sx={{color:'white'}}/>
                        </IconButton>
                    </div>
                    <div className='website-link'>
                        <IconButton href='https://github.com/AlexBrown4020'>
                            <GitHubIcon sx={{color:'white'}}/>
                        </IconButton>
                    </div>
                    <div className='website-link' style={{'border-right': 'white 2px solid'}}>
                        <IconButton href='https://www.etsy.com/uk/shop/AdventurersHoardShop?ref=seller-platform-mcnav'>
                            <LocalGroceryStoreIcon sx={{color:'white'}}/>
                        </IconButton>
                    </div>
                </div>
                <div className='footerTextContainer'>
                    <p className='footer-text'>
                    © 26th January 2023
                    </p>
                </div>
            </div>
           {
                suggestion ? <Suggestions toggle={toggleSuggestion}/>:
                <></>
           }
        </section>
    )
}
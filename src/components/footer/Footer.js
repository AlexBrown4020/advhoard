import { IconButton } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import './footer.css';

export const Footer = () => {
    return (
        <section id='footer'>
            <div id='footerTextContainer'>
                <p className='footer-text'>Alexander Brown, all rights reserved</p>
                <p className='footer-text'>Updated: 22nd January 2023</p>
            </div>
            <div id='website-container'>
                <div className='website-link'>
                    <IconButton>
                        <HomeIcon sx={{color:'white'}}/>
                    </IconButton>
                </div>
                <div className='website-link'>
                    <IconButton>
                        <LinkedInIcon sx={{color:'white'}}/>
                    </IconButton>
                </div>
                <div className='website-link'>
                    <IconButton>
                        <GitHubIcon sx={{color:'white'}}/>
                    </IconButton>
                </div>
                <div className='website-link'>
                    <IconButton>
                        <LocalGroceryStoreIcon sx={{color:'white'}}/>
                    </IconButton>
                </div>
            </div>
        </section>
    )
}
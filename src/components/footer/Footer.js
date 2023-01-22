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
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <LinkedInIcon/>
            </IconButton>
            <IconButton>
                <GitHubIcon/>
            </IconButton>
            <IconButton>
                <LocalGroceryStoreIcon/>
            </IconButton>
        </section>
    )
}
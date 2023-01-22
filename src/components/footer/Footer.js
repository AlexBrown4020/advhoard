import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import './footer.css';

export const Footer = () => {
    return (
        <section id='footer'>
            <p>Alexander Brown, all rights reserved</p>
            <p>Updated: 22.Jan.2023</p>
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <LinkedInIcon/>
            </IconButton>
            <IconButton>
                <GitHubIcon/>
            </IconButton>
        </section>
    )
}
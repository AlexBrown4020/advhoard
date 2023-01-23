import { IconButton } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import './footer.css';

export const Footer = () => {
    return (
        <section id='footer'>
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
                © 23rd January 2023
                </p>
            </div>
        </section>
    )
}
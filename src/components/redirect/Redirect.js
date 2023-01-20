import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import './redirect.css'

export const Redirect = () => {
    return (
        <div id='redirect'>
            <h2 id='top-banner'>100's of Designs</h2>
            <h3 id='mid-banner'>Blender, Sculptris, Character/Object Design</h3>
            <div id='links-container'>
            <IconButton color='primary'>
                <HomeIcon/>
            </IconButton>
            <IconButton color='primary'>
            <   LinkedInIcon/>
            </IconButton>
            <IconButton color='primary'>
                <LocalGroceryStoreIcon/>
            </IconButton>
            </div>
        </div>
    )

}
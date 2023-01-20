import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import './redirect.css'

export const Redirect = () => {
    return (
        <div id='redirect'>
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
            <   LinkedInIcon/>
            </IconButton>
            <IconButton>
                <LocalGroceryStoreIcon/>
            </IconButton>
            <h2 id='top-banner'>100's of Designs</h2>
            <h3 id='mid-banner'>Blender, Sculptris, Character/Object Design</h3>
            <h3 id='mid-banner'>FDM/SLA Printing</h3>
            <div id='links-container'>
            </div>
        </div>
    )

}
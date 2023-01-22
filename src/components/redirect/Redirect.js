import { IconButton } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import './redirect.css'

export const Redirect = () => {
    return (
        <div id='redirect'>
            <h2 id='top-banner'>100's of Designs</h2>
            <h3 id='mid-banner'>Blender, Sculptris, Character/Object Design</h3>
            <h3 id='mid-banner'>FDM/SLA Printing</h3>
            <div id='links-container'>
            <div id='store-nav'>
                <p>Visit the store</p>
                <IconButton>
                    <LocalGroceryStoreIcon/>
                </IconButton>
            </div>
            </div>
        </div>
    )

}
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from '@mui/material';

import './navbar.css';

export const Navbar = () => {
    return (
        <div id='nav'>
            <img id='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
            <h1 id='title'>Adventurer's Hoard</h1>
            <IconButton sx={{color: 'white', height: 30}} variant='outlined'>
                <SendIcon/>
            </IconButton>
            <IconButton sx={{color: 'white', height: 30}} variant='outlined'>
                <CameraAltIcon/>
            </IconButton>
            <IconButton sx={{color: 'white', height: 30}} variant='outlined'>
                <ContactPhoneIcon/>
            </IconButton>
        </div>
    )

}



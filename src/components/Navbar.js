import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';

import './navbar.css';

export const Navbar = () => {
    return (
        <div id='nav'>
            <img id='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
            <h1 id='title'>Adventurer's Hoard</h1>
            <Button sx={{color: 'white', border: '2px white solid', height: 30}} variant='outlined' startIcon={<SendIcon/>}>
                Top
            </Button>
            <Button sx={{color: 'white', border: '2px white solid', height: 30}} variant='outlined' startIcon={<CameraAltIcon/>}>
                Images
            </Button>
            <Button sx={{color: 'white', border: '2px white solid', height: 30}} variant='outlined' startIcon={<ContactPhoneIcon/>}>
                Contact
            </Button>
        </div>
    )

}



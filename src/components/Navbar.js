import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';

import './navbar.css';

export const Navbar = () => {
    return (
        <div id='nav'>
            <Button variant='outlined' startIcon={<SendIcon/>}>
                Top
            </Button>
            <Button variant='outlined' startIcon={<CameraAltIcon/>}>
                Images
            </Button>
            <Button variant='outlined' startIcon={<ContactPhoneIcon/>}>
                Contact
            </Button>
        </div>
    )

}



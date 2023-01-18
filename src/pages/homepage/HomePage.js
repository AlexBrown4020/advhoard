import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import React from 'react';

import './homepage.css'

export default function HomePage() {
    return (
        <section id='navbar'>
            <img id='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Horde Logo (circle)" border="0" />
            <h1>Adventurer's Hoard</h1>
            <div id='navbuttons'>
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
        </section>
    )
}
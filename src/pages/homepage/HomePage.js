import React from 'react';
import { Navbar } from '../../components/Navbar';

import './homepage.css'

export default function HomePage() {
    return (
        <>
            <Navbar/>
            <section id='title'>
                <img id='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
                <h1>Adventurer's Hoard</h1>
            </section>

        </>

    )
}
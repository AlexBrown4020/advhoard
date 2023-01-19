import React from 'react';
import { Navbar } from '../../components/Navbar';

import './homepage.css'

export default function HomePage() {
    return (
        <div id='home'>
            <Navbar/>
            <section id='title'>
                <img id='logo' src="https://iili.io/ZoUvBS.png" alt="Adventurers Hoard Logo (circle)" border="0" />
                <h1>Adventurer's Hoard</h1>
            </section>
            <section id='images'>
                <img class='table-image' alt='oni mask' src='https://iili.io/ynZ4mF.jpg'/>
                <img class='table-image' alt='magic ring' src='https://iili.io/ynZ2UB.jpg'/>
                <img class='table-image' alt='puzzle box' src='https://iili.io/ynilat.jpg'/>
                <img class='table-image' alt='flintlock' src='https://iili.io/HaQy5qx.png'/>
                <img class='table-image' alt='bows' src='https://iili.io/HaQyHOX.png'/>
                <img class='table-image' alt='revolver' src='https://iili.io/HaQp4HP.png'/>
                <img class='table-image' alt='rifle' src='https://iili.io/HaQpVl2.png'/>
                <img class='table-image' alt='tower creatures' src='https://iili.io/HaQpBAF.png'/>
                <img class='table-image' alt='giant' src='https://iili.io/HaQms6l.png'/>
                <img class='table-image' alt='naga' src='https://iili.io/HaQm4ZG.png'/>
                <img class='table-image' alt='wyvern' src='https://iili.io/HaQmNGR.jpg'/>
                <img class='table-image' alt='gorgon' src='https://iili.io/HaQm5hb.jpg'/>
                <img class='table-image' alt='gnoll' src='https://iili.io/HaQmo42.jpg'/>
                <img class='table-image' alt='hydra' src='https://iili.io/HaQmKIs.jpg'/>
                <img class='table-image' alt='painted oni' src='https://iili.io/ynZv0Q.jpg'/>
                <img class='table-image' alt='holy symbol' src='https://iili.io/ynZ7bn.jpg'/>
            </section>

        </div>

    )
}
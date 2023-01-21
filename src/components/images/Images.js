import { useState } from 'react';
import './images.css';

export function Images() {
    let [isShown, setIsShown] = useState(false)
    let [image, setImage] = useState('')

    const imageData = [{src:'https://iili.io/ynZ4mF.jpg'},
    {src:'https://iili.io/ynZv0Q.jpg'},
    {src:'https://iili.io/ynZ2UB.jpg'},
    {src:'https://iili.io/ynilat.jpg'},
    {src:'https://iili.io/HaQy5qx.png'},
    {src:'https://iili.io/HaQyHOX.png'},
    {src:'https://iili.io/HaQp4HP.png'},
    {src:'https://iili.io/HaQpVl2.png'},
    {src:'https://iili.io/HaQpBAF.png'},
    {src:'https://iili.io/HaQms6l.png'},
    {src:'https://iili.io/HaQm4ZG.png'},
    {src:'https://iili.io/HaQmNGR.jpg'},
    {src:'https://iili.io/HaQm5hb.jpg'},
    {src:'https://iili.io/HaQmo42.jpg'},
    {src:'https://iili.io/HaQmKIs.jpg'},
    {src:'https://iili.io/ynZ7bn.jpg'},
]

    return (
        <section id='images'>
            {
                imageData.map((obj) => {
                    return <img className='table-image' alt='' src={obj.src} onClick={() => {
                        setIsShown(!isShown);
                        setImage(obj.src);
                        
                    }}/>
                })
            } 
            {
                isShown ? <img id='modal' alt='' src={image} />
                : <></>
            }
        </section>
    )
}

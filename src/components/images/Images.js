import { useEffect, useState, useRef } from 'react';
import './images.css';

export function Images() {
    const ref = useRef(null);
    let [isShown, setIsShown] = useState(false);
    let [image, setImage] = useState('');
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setIsShown(false);
                setImage('');
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const imageData = [{src:'https://iili.io/ynZ4mF.jpg'},
    {src:'https://iili.io/ynZv0Q.jpg'},
    {src:'https://iili.io/ynZ2UB.jpg'},
    {src: 'https://iili.io/HlqJnzg.jpg'},
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
    {src: 'https://iili.io/HlfU4ou.jpg'},
    {src: 'https://iili.io/Hlf4Fjt.jpg'},
    {src: 'https://iili.io/Hlf4uuS.jpg'},
    {src: 'https://iili.io/Hlq2aiG.jpg'},
    {src: 'https://iili.io/Hlq2VO7.jpg'},
    {src: 'https://iili.io/Hlq357V.jpg'},
    {src: 'https://iili.io/HlqngVI.jpg'}, 
]

    return (
        <section id='images'>
            {
                imageData.map((obj) => {
                    return <img ref={ref} className='table-image' alt='' src={obj.src} onClick={() => {
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

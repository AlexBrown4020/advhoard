import { useEffect, useState, useRef } from 'react';
import { LC } from '../../3D/LC';
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

    const imageData = [
    {src:'https://iili.io/ynilat.jpg', model:<LC/>},
    {src: 'https://iili.io/Hlf4Fjt.jpg'},
    {src: 'https://iili.io/Hlq357V.jpg'},
    {src: 'https://iili.io/Hl8h4wP.jpg'},
    {src: 'https://iili.io/Hl8hOMu.jpg'},
    {src: 'https://iili.io/Hl8hg9V.jpg'},
    {src: 'https://iili.io/Hl8hS8Q.jpg'},
    {src: 'https://iili.io/Hl8h8cx.jpg'},
    {src: 'https://iili.io/Hl8hvFj.jpg'},
    {src: 'https://iili.io/Hl8hNne.jpg'},
    {src: 'https://iili.io/Hl8hjt9.jpg'},
    {src: 'https://iili.io/Hl8hhw7.jpg'},
    {src: 'https://iili.io/Hl8hXuS.jpg'},
    {src: 'https://iili.io/Hl8hW92.jpg'},
    {src: 'https://iili.io/Hl8hM8l.jpg'},
    {src: 'https://iili.io/Hl8hGa4.jpg'},
    {src: 'https://iili.io/Hl8hEFf.jpg'},
    {src: 'https://iili.io/Hl8h06G.jpg'},
    {src: 'https://iili.io/Hl8hlGs.jpg'},
    {src: 'https://iili.io/Hl8hcnn.jpg'},
    {src: 'https://iili.io/Hl8hYZX.jpg'},   
    {src: 'https://iili.io/Hl8h7jt.jpg'},   
    {src: 'https://iili.io/Hl8h5uI.jpg'},   
    {src: 'https://iili.io/Hl8hAyN.jpg'},     
    {src: 'https://iili.io/Hl8huvp.jpg'},
    {src: 'https://iili.io/Hl8hTaR.jpg'},
    {src: 'https://iili.io/Hl8hx6J.jpg'},
    {src: 'https://iili.io/Hl8hqj1.jpg'},
    {src: 'https://iili.io/Hl8hoGa.jpg'},  
    {src: 'https://iili.io/Hl8hfTP.jpg'},  
    {src: 'https://iili.io/Hl8hBZF.jpg'},  
    {src: 'https://iili.io/Hl8h3vV.jpg'},
    {src:'https://iili.io/ynZ2UB.jpg'},
];

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

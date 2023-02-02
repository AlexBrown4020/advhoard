import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './images.css';

export function Images() {
    const ref = useRef(null);
    let [isShown, setIsShown] = useState(false);
    let [image, setImage] = useState('');
    let [name, setName] = useState('');
    let [path, setPath] = useState('');
    
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
    {name:'Lament Configuration', src:'https://iili.io/ynilat.jpg', path:'public/lament/LC'},
    {name:'Elven Axe', src: 'https://iili.io/Hlf4Fjt.jpg', path:'public/elf-axe/ElvenAxeAdvHoard'},
    {name: 'Ganyu', src: 'https://iili.io/Hlq357V.jpg', path:'Ganyu'},
    {name: 'Oni', src: 'https://iili.io/H1cvZf1.jpg', path:'Oni'},
    {name:'ElfDagger', src: 'https://iili.io/Hl8hOMu.jpg', path:'ElfDagger'},
    {name: 'Venom Dagger', src: 'https://iili.io/Hl8hg9V.jpg', path:'Venom'},
    {name: 'Keen Dagger', src: 'https://iili.io/Hl8hS8Q.jpg', path: 'Keen'},
    {name: 'Cheshire Cat', src: 'https://iili.io/Hl8h8cx.jpg', path: 'CheshireCat'},
    {name: 'Clayman', src: 'https://iili.io/Hl8hvFj.jpg', path: 'Clayman'},
    {name: 'Raziel, Soul Reaver', src: 'https://iili.io/Hl8hNne.jpg', path: 'Raziel'},
    {name: 'Sarenrae', src: 'https://iili.io/Hl8hjt9.jpg', path: 'Sarenrae'},
    {src: 'https://iili.io/Hl8hhw7.jpg'},
    {name: 'Hydra', src: 'https://iili.io/Hl8hXuS.jpg', path: 'Hydra'},
    {name: 'Wyvern', src: 'https://iili.io/Hl8hW92.jpg', path: 'Wyvern'},
    {name: 'Serpent Fly', src: 'https://iili.io/Hl8hGa4.jpg', path: 'SerpentFly'},
    {name: 'Basilisk', src: 'https://iili.io/Hl8hEFf.jpg', path: 'Basilisk'},
    {name: 'Lizardman', src: 'https://iili.io/Hl8h06G.jpg', path: 'Lizardman'},
    {name: 'Gnoll', src: 'https://iili.io/Hl8hlGs.jpg', path: 'Gnoll'},
    {name: 'Giant', src: 'https://iili.io/Hl8hcnn.jpg', path: 'Giant'},
    {name: 'Genie', src: 'https://iili.io/Hl8hYZX.jpg', path: 'Genie'},   
    {name: 'Naga', src: 'https://iili.io/Hl8h7jt.jpg', path: 'Naga'},   
    {src: 'https://iili.io/Hl8h5uI.jpg'},       
    {name:'Gremlin', src: 'https://iili.io/Hl8huvp.jpg', path: 'Gremlin'},
    {name: 'Mechanical Pistol', src: 'https://iili.io/Hl8hx6J.jpg', path: 'MechPistol'},
    {name: 'Flintlock', src: 'https://iili.io/Hl8hqj1.jpg', path: 'Flintlock'},
    {name: 'Protection', src: 'https://iili.io/Hl8hBZF.jpg', path: 'Protection'},  
    {name: 'Evasion', src: 'https://iili.io/Hl8h3vV.jpg', path: 'Evasion'},
    {name: 'Wishes', src:'https://iili.io/ynZ2UB.jpg', path: 'Wishes'},
];

    return (
        <section id='images'>
            {
                imageData.map((obj) => {
                    return <div>
                        <img ref={ref} className='table-image' alt='' src={obj.src} onClick={() => {
                        setIsShown(!isShown);
                        setImage(obj.src);
                        setName(obj.name);
                        setPath(obj.path);
                    }}/>
                        </div>
                })
            } 
            {
                isShown ? 
                    <div className='model-container'>
                        <img className='model-image' alt='' src={image} />
                        <Link className='model-path' to={`/${path}`}>{name}</Link>
                    </div>
                : <></>
            }
        </section>
    )
}

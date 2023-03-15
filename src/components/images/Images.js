import { Link } from 'react-router-dom';
import './images.css';

export function Images() {
    const imageData = [
    {name:'Lament Configuration', src:'https://iili.io/ynilat.jpg', path:'LC'},
    {name:'Elven Axe', src: 'https://iili.io/Hlf4Fjt.jpg', path:'ElvenAxe'},
    {name: 'Ganyu', src: 'https://iili.io/Hlq357V.jpg', path:'Ganyu'},
    {name: 'Oni', src: 'https://iili.io/H1cvZf1.jpg', path:'Oni'},
    {name:'ElfDagger', src: 'https://iili.io/Hl8hOMu.jpg', path:'ElfDagger'},
    {name: 'Venom Dagger', src: 'https://iili.io/Hl8hg9V.jpg', path:'/Venom'},
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
                imageData.map((obj, index) => {
                    if (!obj.name) {
                        return <Link key={`link-${index}`} className='model-path' to={`/${obj.path}`}>
                            <img key={`img-${index}`} className='table-image' alt={obj.name} src={obj.src} />
                        </Link>
                    } else {
                        return <Link key={`link-${index}`} className='model-path'>
                            <img key={`img-${index}`} className='table-image' alt={obj.name} src={obj.src}/>
                        </Link>
                    }
                })
            } 
        </section>
    )
}

import { Navbar } from '../../components/navbar/Navbar';
import { Redirect } from '../../components/redirect/Redirect'
import { Images } from '../../components/images/Images';
import { Footer } from '../../components/footer/Footer';
import './homepage.css';

export default function HomePage() {
    
    return (
        <div id='home'>
            <Navbar/>
            <Redirect/>
            <Images/>
            <Footer/>
        </div>

    )
}
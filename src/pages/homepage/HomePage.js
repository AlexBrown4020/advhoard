import { Navbar } from '../../components/navbar/Navbar';
import { Redirect } from '../../components/redirect/Redirect'
import { Images } from '../../components/images/Images';
import { Footer } from '../../components/footer/Footer';
import './homepage.css';
import { Suggestions } from '../../components/suggestions/Suggestions';

export default function HomePage() {
    
    return (
        <div id='home'>
            <Navbar/>
            <Redirect/>
            <Suggestions/>
            <Images/>
            <Footer/>
        </div>
    )
}
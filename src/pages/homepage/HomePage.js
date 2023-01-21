import { Navbar } from '../../components/Navbar';
import { Redirect } from '../../components/redirect/Redirect'
import { Images } from '../../components/images/Images';
import './homepage.css'

export default function HomePage() {
    return (
        <div id='home'>
            <Navbar/>
            <Redirect/>
            <Images/>
        </div>

    )
}
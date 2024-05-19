import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import {Carousel} from "../components/Carousel.jsx";
// import {TextDisplay} from "../components/TextDisplay.jsx";
import {OurGames} from "../components/OurGames.jsx";

function LandingPage() {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <OurGames/>
            <Footer/>
        </>
    )
}

export default LandingPage;
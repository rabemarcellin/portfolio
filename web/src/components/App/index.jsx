/* Package components */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
/* Custom components */
import NavBar from '../NavBar';
import { Profile, Project, Skills, Contact } from '../sections';
import Footer from '../Footer';
import Service from '../sections/Service';
import Experience from '../sections/Experience';
import { ParallaxProvider } from "react-scroll-parallax"


export default function App() {

    useEffect(() => {
        AOS.init({
            once: true
        })
    }, [])

    return (

        <div className="overflow-hidden">
            <div className="bg-dotted">
                <div className="px-4">
                    <NavBar />
                </div>
                <div className="px-20">
                    <ParallaxProvider>
                        <Profile />
                    </ParallaxProvider>
                    <Skills />
                </div>
            </div>
            <Project />
            <Service />
            <Experience />
            <Footer />
        </div>


    );
}

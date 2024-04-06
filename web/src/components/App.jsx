/* Package components */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
/* Custom components */
import NavBar from "../sections/Navbar";
import { Profile, Project, Skills  } from "../sections";
import Footer from "../sections/Footer";
import Service from "../sections/Service";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <ParallaxProvider>
      <div>
        <NavBar />
        <Profile />
        <Skills />
        <Service />
        <Project />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

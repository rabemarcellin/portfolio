/* Package components */
/* Custom components */
import { useContext } from "react";
import AppContext from "./store/contexts/AppContext";
import NavBar from "./pages/landing/sections/Navbar";
import Profile from "./pages/landing/sections/Profile";
import Skills from "./pages/landing/sections/Skills";
import Project from "./pages/landing/sections/Project";
import Footer from "./pages/landing/sections/Footer";

import "./App.css";
import Parcours from "./pages/landing/sections/Parcours";

export default function App() {
  const appContext = useContext(AppContext);
  const isDarkMode = appContext ? appContext.isDarkMode : false;
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavBar />
      <Profile />
      
      <Parcours />
      <div className="dark:bg-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="fill-slate-300 dark:fill-slate-700" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,138.7C672,160,768,192,864,181.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

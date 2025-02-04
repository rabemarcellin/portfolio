/* Package components */
/* Custom components */
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import NavBar from "../sections/Navbar";
import { Profile, Project, Skills } from "../sections";
import Footer from "../sections/Footer";
import Service from "../sections/Service";
import "./App.css";

export default function App() {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <NavBar />
      <Profile />
      <div className="dark:bg-slate-900">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#334155" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,138.7C672,160,768,192,864,181.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      
      </div>

      <Skills />
      <Service />
      <Project />
      <Footer />
    </div>
  );
}

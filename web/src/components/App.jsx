/* Package components */
/* Custom components */
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import NavBar from "../sections/Navbar";
import { Profile, Project, Skills  } from "../sections";
import Footer from "../sections/Footer";
import Service from "../sections/Service";
import "./App.css";

export default function App() {
  const { isDarkMode } = useContext(AppContext)
  const [theme, setTheme] = useState(isDarkMode ? 'dark': '')
  
  useEffect(() => {
    setTheme(isDarkMode ? 'dark': '')
  }, [isDarkMode, theme, setTheme])
  
  return (
      <div className={theme}>
        <NavBar />
        <Profile />
        <Skills />
        <Service />
        <Project />
        <Footer />
      </div>
  );
}

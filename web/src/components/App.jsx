/* Package components */
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
/* Custom components */
import NavBar from "../sections/Navbar";
import { Profile, Project, Skills  } from "../sections";
import Footer from "../sections/Footer";
import Service from "../sections/Service";
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";

export default function App() {
  const [theme, setTheme] = useState('light')
  const { isDarkMode } = useContext(AppContext)
  
  useEffect(() => {
    setTheme(isDarkMode ? 'dark': 'light')
  }, [theme, isDarkMode])
  
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

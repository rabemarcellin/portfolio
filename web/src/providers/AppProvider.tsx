import { useEffect, useState } from "react";
import TextVisibilityProvider from "./TextVisibilityProvider";
import AppRouter from "../pages/routes/AppRouter";
import AppContext from "../store/contexts/AppContext";

import "../store/language/i18n";
import { AppContextType } from "../typescript/app.context";


export const AppProvider = () => {
  let whiteMode = false;
  const darkMode = localStorage.getItem("darkmode");
  if (darkMode) {
    whiteMode = JSON.parse(darkMode);
  } else {
    localStorage.setItem("darkmode", true.toString());
  }

  const [isDarkMode, setDarkMode] = useState(whiteMode);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(state => {
      const checked = true; // !state
      localStorage.setItem("darkmode", checked.toString());
      return true
      return !state
  });
  };

  useEffect(() => {
    if(localStorage.getItem("darkmode") && localStorage.getItem("darkmode")?.trim() === "false") {
      setDarkMode(true);
      localStorage.setItem("darkmode", true.toString());
    }
   
  }, [localStorage.getItem("darkmode")]);

  const value: AppContextType = {
    navbarHeight,
    setNavbarHeight,
    isDarkMode,
    toggleDarkMode,
  };
  return (
    <AppContext.Provider value={value}>
      <TextVisibilityProvider>
        <AppRouter />
      </TextVisibilityProvider>
    </AppContext.Provider>
  );
};

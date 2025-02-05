import { useEffect, useState } from "react";
import TextVisibilityProvider from "./TextVisibilityProvider";
import AppRouter from "../pages/routes/AppRouter";
import AppContext from "../store/contexts/AppContext";

import "../store/language/i18n";




export const AppProvider = () => {
  let whiteMode = false;
  if (localStorage.getItem("darkmode")) {
    whiteMode = JSON.parse(localStorage.getItem("darkmode"));
  } else {
    localStorage.setItem("darkmode", false);
  }

  const [isDarkMode, setDarkMode] = useState(whiteMode);
  const [navbarHeight, setNavbarHeight] = useState(null);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    localStorage.setItem("darkmode", checked);
  };

  useEffect(() => {
    console.log("isDarkMode: ", typeof isDarkMode);
  }, [isDarkMode]);

  const value = {
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

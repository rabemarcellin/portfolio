import { createContext, useEffect, useState } from "react";
import { TextVisibilityProvider } from "./TextVisibilityContext";
import AppRouter from "../routes/AppRouter";
import "../lang/i18n";

const AppContext = createContext({});
export default AppContext;

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

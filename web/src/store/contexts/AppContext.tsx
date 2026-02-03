import { createContext } from "react";
import { AppContextType } from "../../typescript/app.context";


const AppContext = createContext<AppContextType>({
    navbarHeight: 0,
    isDarkMode: true,
    setNavbarHeight: () => {},
    toggleDarkMode: () => {},
});
export default AppContext;

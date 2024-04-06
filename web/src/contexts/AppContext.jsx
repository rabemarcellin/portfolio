import { createContext, useState } from 'react';
import { TextVisibilityProvider } from './TextVisibilityContext';
import AppRouter from '../routes/AppRouter';
import '../lang/i18n'

const AppContext = createContext({});
export default AppContext

export const AppProvider = () => {
    const [isDarkMode, setDarkMode] = useState(localStorage.getItem('theme') || true);
    const [navbarHeight, setNavbarHeight] = useState(null)

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        localStorage.setItem('theme', checked)
      };

    const value = {
        navbarHeight, 
        setNavbarHeight,
        isDarkMode,
        toggleDarkMode
    }
    return (
        <AppContext.Provider value={value}>
            <TextVisibilityProvider>
                <AppRouter />
            </TextVisibilityProvider>
        </AppContext.Provider>
    )
}

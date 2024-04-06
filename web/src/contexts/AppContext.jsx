import { createContext, useState } from 'react';
import { TextVisibilityProvider } from './TextVisibilityContext';
import AppRouter from '../routes/AppRouter';

const AppContext = createContext({});
export default AppContext

export const AppProvider = () => {
    const [navbarHeight, setNavbarHeight] = useState(null)

    const value = {
        navbarHeight, 
        setNavbarHeight
    }
    return (
        <AppContext.Provider value={value}>
            <TextVisibilityProvider>
                <AppRouter />
            </TextVisibilityProvider>
        </AppContext.Provider>
    )
}

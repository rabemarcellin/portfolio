export type NavbarHeightSetter = (navbarHeight: number) => void;
export type DarkModeToggler = () => void;

export type AppContextType = {
    navbarHeight: number;
    isDarkMode: boolean;
    setNavbarHeight: NavbarHeightSetter;
    toggleDarkMode: DarkModeToggler;
};
import { useEffect, useState, useContext, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import TextVisibilityContext from "../contexts/TextVisibilityContext";
import AppContext from "../contexts/AppContext";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './Navbar.css'
import SwitchLanguageDropdown from "../components/SwitchLanguageDropdown";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const navbarRef = useRef(0)
  const [isTogglerActive, setTogglerStatus] = useState(false);
  const { isInvisible } = useContext(TextVisibilityContext)
  const { setNavbarHeight, isDarkMode, toggleDarkMode } = useContext(AppContext)
  const { t } = useTranslation()


  useEffect(() => {
    if(navbarRef.current) {
      setNavbarHeight(
        navbarRef.current.offsetHeight
      )
    }
    return () => {
      setTogglerStatus(false);
    };
  }, []);


  return (
    <div ref={navbarRef} className={'navbar'}>
      <div className="max-w-5xl mx-auto">
        <header className="navbar__header">
          <div>
            <a
              href="#profile"
              className="logo"
              style={{
                filter: isInvisible ? 'invert(100%)': 'invert(0)'
              }}
            >
              M@R
            </a>
          </div>
          <div
            className="block md:hidden"
            onClick={() => {
              setTimeout(() => {
                setTogglerStatus(!isTogglerActive);
              }, 100);
            }}
          >
          <AiOutlineMenu />
          </div>
          <div className="hidden md:block">
            <nav 
              className="navbar__nav"
              style={{
                filter: isInvisible ? 'invert(100%)': 'invert(0)'
              }}
            >
              <a href="#skills" className="">{t("skill-title")}</a>
              <a href="#project" className="">{t("project-title")}</a>
              <a href="#service" className="">{t("service-title")}</a>
              <a href="#contact" className="">{t("contact")}</a>
              <SwitchLanguageDropdown />
              <DarkModeSwitch
                moonColor={'#000'}
                sunColor={'#FFD700'}
                className='text-base'
                style={{filter: 'invert(0) !important'}}
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
            </nav>
          </div>
        </header>
        
        <div
          className={`${isTogglerActive ? "border-b rounded-0" : "hidden"} 
            transition-all duration-500 origin-bottom md:hidden  absolute top-0 left-0 w-screen h-screen 
            overflow-hidden backdrop-blur-lg bg-white/75 dark:bg-black/75`}
        >
           <nav 
              className="flex flex-col w-[75vw] border dark:border-none bg-white dark:bg-slate-900 h-full p-4 rounded-r-3xl shadow-lg"
            >
              <div className="flex-none flex items-center justify-between w-full">
                <div onClick={() => setTogglerStatus(false)}>
                  <GrClose />
                </div>
                <div>
                  <DarkModeSwitch
                    moonColor={'#000'}
                    sunColor={'#FFD700'}
                    className='text-base'
                    style={{filter: 'invert(0)'}}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col my-8 gap-4">
                    <a href="#skills" className="" onClick={() => setTogglerStatus(false)}>{t("skill-title")}</a>
                    <a href="#project" className="" onClick={() => setTogglerStatus(false)}>{t("project-title")}</a>
                    <a href="#service" className="" onClick={() => setTogglerStatus(false)}>{t("service-title")}</a>
                    <a href="#contact" className="" onClick={() => setTogglerStatus(false)}>{t("contact")}</a>
                  </div>
                  <div>
                    <SwitchLanguageDropdown center axe="top" />
                  </div>
                </div>
                
              </div>
              
              
            </nav>
        </div>
      </div>
    </div>
  );
}

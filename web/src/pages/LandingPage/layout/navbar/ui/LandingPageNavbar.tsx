import { useEffect, useState, useContext, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
// import TextVisibilityContext from "@/store/contexts/TextVisibiltyContext";
import AppContext from "@/store/contexts/AppContext";
// import { DarkModeSwitch } from 'react-toggle-dark-mode';
//import SwitchLanguageDropdown from "@/components/SwitchLanguageDropdown";
import { useTranslation } from "react-i18next";


const styles = {
  container: "px-4 md:px-0  shadow sticky top-0 backdrop-blur z-50 bg-white/20 \
    dark:text-white dark:bg-neutral-950 dark:border-neutral-800  dark:shadow-black/50",
    header: "flex items-center justify-between p-4",
    nav: "flex gap-10 text-base items-center justify-around font-medium mx-2 text-gray-500 px-4 rounded-xl\
    dark:bg-neutral-950 dark:border-neutral-950 p-2",
    navLink: "hover:text-black dark:text-white/75 dark:hover:text-white"
}

export default function LandingPageNavbar() {
  const navbarRef = useRef<HTMLDivElement>(null)
  const [isTogglerActive, setTogglerStatus] = useState(false);
  // const textVisibilityContext = useContext(TextVisibilityContext)
  const { 
    setNavbarHeight, 
    // isDarkMode, toggleDarkMode 
  } = useContext(AppContext)
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
    <div ref={navbarRef} className={styles.container}>
      <div className="max-w-5xl mx-auto">
        <header className={styles.header}>
          <div>
            <a
              href="#profile"
              className="logo"
              style={{
                // filter: textVisibilityContext?.isInvisible ? 'invert(100%)': 'invert(0)'
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
              className={styles.nav}
              // style={{
              //   // filter: textVisibilityContext?.isInvisible ? 'invert(100%)': 'invert(0)'
              // }}
            >
              <a href="#parcours" className={styles.navLink}>{t("parcours-title")}</a>
              <a href="#skills" className={styles.navLink}>{t("skill-title")}</a>
              <a href="#project" className={styles.navLink}>{t("project-title")}</a>
              <a href="#service" className={styles.navLink}>{t("service-title")}</a>
              <a href="#contact" className={styles.navLink}>{t("contact")}</a>
              {/* <SwitchLanguageDropdown center axe="top" /> */}
              {/* <DarkModeSwitch
                moonColor={'#FFF'}
                sunColor={'#000'}
                className='text-base'
                style={{filter: 'invert(0) !important'}}
                checked={isDarkMode}
                onChange={toggleDarkMode}
              /> */}
            </nav>
          </div>
        </header>
        
        <div
          className={`${isTogglerActive ? "border-b rounded-0" : "hidden"} 
            transition-all duration-500 origin-bottom md:hidden  absolute top-0 left-0 w-screen h-screen 
            overflow-hidden backdrop-blur-lg bg-white/75 dark:bg-black/75`}
        >
           <nav 
              className="flex flex-col w-[75vw] border dark:border-none bg-white dark:bg-neutral-900 h-full p-4 rounded-r-3xl shadow-lg"
            >
              <div className="flex-none flex items-center justify-between w-full">
                <div onClick={() => setTogglerStatus(false)}>
                  <GrClose />
                </div>
                <div>
                  {/* <DarkModeSwitch
                    moonColor={'#000'}
                    sunColor={'#FFD700'}
                    className='text-base'
                    style={{filter: 'invert(0)'}}
                    checked={isDarkMode || false}
                    onChange={toggleDarkMode}
                  /> */}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col my-8 gap-4">
                  <a href="#parcours" className={styles.navLink} onClick={() => setTogglerStatus(false)}>{t("parcours-title")}</a>
                    <a href="#skills" className={styles.navLink} onClick={() => setTogglerStatus(false)}>{t("skill-title")}</a>
                    <a href="#project" className={styles.navLink} onClick={() => setTogglerStatus(false)}>{t("project-title")}</a>
                    <a href="#service" className={styles.navLink} onClick={() => setTogglerStatus(false)}>{t("service-title")}</a>
                    <a href="#contact" className={styles.navLink} onClick={() => setTogglerStatus(false)}>{t("contact")}</a>
                  </div>
                  {/* <div>
                    <SwitchLanguageDropdown center axe="top" />
                  </div> */}
                </div>
                
              </div>
              
              
            </nav>
        </div>
      </div>
    </div>
  );
}

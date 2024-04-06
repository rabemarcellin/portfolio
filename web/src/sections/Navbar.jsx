import { useEffect, useState, useContext, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import TextVisibilityContext from "../contexts/TextVisibilityContext";
import AppContext from "../contexts/AppContext";


export default function NavBar() {
  const navbarRef = useRef(0)
  const [isTogglerActive, setTogglerStatus] = useState(false);
  const { isInvisible } = useContext(TextVisibilityContext)
  const { setNavbarHeight } = useContext(AppContext)


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
    <div ref={navbarRef} className="px-4 md:px-0  shadow sticky top-0 backdrop-blur z-50">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between py-4">
          <div>
            <a
              href="#profile"
              className="self-center font-bold whitespace-nowrap text-2xl drop-shadow-lg dark:text-white"
              style={{
                filter: isInvisible ? 'invert(100%)': 'invert(0)'
              }}
            >
              M@R
            </a>
          </div>
          <div
            className="block lg:hidden"
            onClick={() => {
              setTimeout(() => {
                setTogglerStatus(!isTogglerActive);
              }, 100);
            }}
          >
            <AiOutlineMenu />
          </div>
          <div className="hidden lg:block">
            <div 
              className="flex  gap-4 text-lg items-center justify-around font-bold"
              style={{
                filter: isInvisible ? 'invert(100%)': 'invert(0)'
              }}
            >
              <a href="#skills" className="hover:underline">Compétences</a>
              <a href="#project" className="hover:underline">Réalisations</a>
              <a href="#service" className="hover:underline">Services</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </header>
        <div
          className={`${
            isTogglerActive ? "border-b rounded-0" : "hidden"
          } transition-all duration-500 origin-bottom lg:hidden p-2`}
        >
          <div className="my-2 hover:underline">
            <a href="#skills" className="">
              Compétences
            </a>
          </div>
          <div className="my-2">
            <a href="#project" className=" ">
              Réalisations
            </a>
          </div>
          <div className="my-2">
            <a href="#service" className="">
              Services
            </a>
          </div>
          <div className="my-2">
            <a href="#experience" className="">
              Expériences
            </a>
          </div>
          <div className="my-2">
            <a href="#contact" className="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

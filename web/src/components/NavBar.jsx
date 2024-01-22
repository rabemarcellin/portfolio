import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [isTogglerActive, setTogglerStatus] = useState(false);

  useEffect(() => {
    return () => {
      setTogglerStatus(false);
    };
  }, []);
  return (
    <div className="px-4 md:px-0 bg-blue-400 text-white">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between py-4">
          <div>
            <a
              href="#profile"
              className="self-center font-title whitespace-nowrap text-2xl font-medium dark:text-white"
            >
              @mR
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
            <div className="flex  font-monospace gap-4 font-bold  items-center justify-around">
              <a href="#skills">Compétences</a>
              <a href="#project">Réalisations</a>
              <a href="#service">Services</a>
              <a href="#experience">Expériences</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </header>
        <div
          className={`${
            isTogglerActive ? " scale-1 w-full" : "scale-y-0 h-0"
          } transition-all duration-500 origin-bottom lg:hidden rounded-md bg-slate-200 text-zinc-900 p-2`}
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

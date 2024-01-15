import { useCallback, useEffect, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import IDE from "../IDE";
import cvPdf from "../../assets/CV.pdf";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const columns = [
  [
    {
      lang: "Node.js",
      icon: <Fa.FaNodeJs />,
    },

    {
      lang: "Python",
      icon: <Fa.FaPython />,
    },

    {
      lang: "C++",
      icon: <Si.SiCplusplus />,
    },
    {
      lang: "MySQL",
      icon: <Si.SiMysql />,
    },
    {
      lang: "MongoDB",
      icon: <Si.SiMongodb />,
    },

    {
      lang: "Github",
      icon: <Fa.FaGithub />,
    },
    {
      lang: "Windows",
      icon: <Fa.FaWindows />,
    },
    {
      lang: "Linux",
      icon: <Fa.FaLinux />,
    },
  ],
];

export default function Profile() {
  const [init, setInit] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const updateMobileState = useCallback(() => {
    const screenWidth = window.innerWidth;
    console.log("screen width", screenWidth);
    setMobileView(screenWidth <= 992);
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    updateMobileState();
  });

  useEffect(() => {
    console.log(isMobileView);
  }, [isMobileView]);
  const particlesLoaded = (container) => null;

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "gray",
        },
        links: {
          color: "#000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="">
      <div className="bg-zinc-900 px-4 md:px-0">
        <div className="max-w-5xl min-h-[75vh] md:min-h-screen mx-auto flex items-end overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <IDE />
          </div>
        </div>
      </div>
      <div className="relative px-4 md:px-0">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        <div className="relative lg:flex lg:min-h-screen items-center mt-10 overflow-hidden max-w-5xl m-auto">
          <div className="lg:w-2/3">
            <h1 className="leading-normal hover:drop-shadow-xl transition duration-500 text-3xl md:text-5xl text-zinc-800 font-title hover:text-blue-500">
              À la recherche d'un développeur web ?
            </h1>
            <div className="mt-10 mb-16">
              <a
                href={cvPdf}
                target="_blank"
                className="font-monospace font-bold py-4 px-6 mb-52  hover:text-gray-300 transition duration-500  bg-gray-500 text-white active:translate-x-1 whitespace-nowrap"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div
            className={`lg:w-1/3 w-full h-full flex-none grid lg:grid-cols-2 font-title text-2xl ${
              isMobileView ? "" : "-translate-y-10 lg:translate-y-0"
            }`}
          >
            {columns.map((column, columnIndex) => {
              return (
                <Marquee
                  autoFill
                  key={columnIndex}
                  direction={
                    columnIndex % 2 === 0
                      ? isMobileView
                        ? "left"
                        : "up"
                      : isMobileView
                      ? "right"
                      : "down"
                  }
                >
                  {column.map(({ lang, icon }, index) => (
                    <div key={`${index}-${lang}`} className="p-10 max-x-max">
                      {icon}
                    </div>
                  ))}
                </Marquee>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

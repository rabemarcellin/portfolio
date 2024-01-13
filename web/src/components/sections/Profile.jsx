import { useEffect, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import IDE from "../IDE";
import cvPdf from "../../assets/CV.pdf";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useParallax } from "react-scroll-parallax";

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
  const parallaxAnimation = useParallax({
    translateY: [1, 0.5],
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

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
          value: "#000",
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
      <div className="bg-zinc-900">
        <div className="max-w-5xl min-h-screen mx-auto flex items-end overflow-hidden">
          <div ref={parallaxAnimation.ref} className="max-w-3xl mx-auto">
            <IDE />
          </div>
        </div>
      </div>
      <div className="relative">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        <div className="relative flex min-h-screen items-center mt-10 overflow-hidden max-w-5xl m-auto">
          <div className="w-2/3">
            <h1 className="leading-normal hover:drop-shadow-xl transition duration-500 text-5xl text-zinc-800 font-title hover:text-blue-500">
              À la recherche d'un développeur web ?
            </h1>
            <div className="mt-10">
              <a
                href={cvPdf}
                target="_blank"
                className="font-monospace font-bold py-4 px-6  hover:text-gray-300 transition duration-500  bg-gray-500 text-white active:translate-x-1 whitespace-nowrap"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="w-1/3 flex-none grid grid-cols-2 font-title text-2xl">
            {columns.map((column, columnIndex) => {
              return (
                <Marquee
                  autoFill
                  key={columnIndex}
                  direction={columnIndex % 2 === 0 ? "up" : "down"}
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

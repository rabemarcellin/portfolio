import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import bgCurveDown from "../../assets/curved-down.svg";
import AOS from "aos";
import { FaCheck, FaCode, FaGithub, FaReact } from "react-icons/fa";
import Iframe from "react-iframe";
import { FaAngleDoubleDown } from "react-icons/fa";
import Draggable from "react-draggable"; // The default
import { AnimatePresence, motion } from "framer-motion";
import ReactChallengesImg from "../../assets/challenges/react-challenges.png";
import Layout from "react-masonry-list";
import { FaLink } from "react-icons/fa";
import { LinkedInEmbed, TwitterEmbed } from "react-social-media-embed";
import FactoryImg from "../../assets/animations/factory.jpg";
import RocketImg from "../../assets/animations/rocket.png";
import PlanetsImg from "../../assets/animations/planets.png";
import workspaceImg from "../../assets/animations/workspace.jpg";
import smartphoneImg from "../../assets/animations/smartphone.png";
import ReactRouterCode from "../../assets/codebase/react-router.png";
import StoreReduxCode from "../../assets/codebase/store-redux.png";
import { SiJavascript, SiRedux } from "react-icons/si";

const datas = [
  {
    index: 1,
    projectName: "ny-anio",
    desc: "Application gestion des tâches faite avec Reactjs et Redux, tailwindcss.",
    githubUrl: "https://github.com/rabemarcellin/ny-anio",
    prodLink: "https://nyanio.netlify.app",
  },
  {
    index: 2,
    projectName: "didy-folo",
    desc: "Site vitrine dix-commandements de Dieu.",
    githubUrl: "https://github.com/rabemarcellin/didy-folo",
    prodLink: "https://marcellinrabe.github.io/didy-folo",
  },
  {
    index: 3,
    projectName: "OPartage",
    desc: "[en cours de développement] Une application web de reseaux sociaux avec une philosophie unique, celle de communiquer et non disputer dans les commentaires.",
    githubUrl: "https://github.com/rabemarcellin/opartage",
    prodLink: "https://opartage.netlify.app",
  },
];

const ProjectDesc = ({ projectName, desc, githubUrl, prodLink }) => {
  const [showDropdown, setDropdownVisible] = useState(false);

  return (
    <div className="p-4 w-full">
      <div className="h-[250px] xl:w-[300px] w-full mx-auto flex items-center justify-center relative rounded border shadow-md hover:shadow-2xl transition duration-500 ease-in-out p-4 bg-white">
        <div
          className="relative z-10 p-2 h-full flex flex-col items-center justify-center"
          onMouseEnter={() => {
            setDropdownVisible(true);
          }}
          onMouseLeave={() => {
            setDropdownVisible(false);
          }}
        >
          <button className="text-2xl mb-2 text-start">{projectName}</button>
          <div
            className={`${
              showDropdown ? "" : "hidden"
            } transition duration-500 border shadow-lg absolute left-0 p-2 -bottom-0 rounded-md bg-white w-full text-center`}
          >
            <div>
              <a
                href={githubUrl}
                className="hover:text-gray-600 hover:underline text-gray-500 transition duration-400"
              >
                voir sur github
              </a>
            </div>
            <div>
              {prodLink && (
                <a
                  target="_blank"
                  href={prodLink}
                  className=" hover:text-gray-600 hover:underline text-gray-500 transition duration-400"
                >
                  aller vers le site
                </a>
              )}
            </div>
          </div>
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const illusrations = [smartphoneImg, workspaceImg];
  const [illusrationActiveIndex, setIllusrationIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(0);
  const projectsCategories = [
    {
      key: 0,
      type: "Personnel",
      desc: `Mes projets personnels`,
    },
    {
      key: 1,
      type: "Challenge",
      desc: `Je réalise en application réutilisable des challenges de projet que je
          trouve sur internet`,
    },
    {
      key: 2,
      type: "Template",
      desc: `Transformation en application logiciel des maquettes que je tire sur
          internet`,
    },
  ];

  const categoriesNames = projectsCategories.map((project) => project.type);

  const [projectActive, setActive] = useState(projectsCategories[0]);

  const projectUrls = [
    "http://toast-api.onrender.com",
    "http://nyanio.netlify.app",
    "http://marcellinrabe.github.io/didy-folo",
  ];

  const codeDemos = [
    {
      id: 0,
      title: "Architecture de fonction de CRUD d'un todo avec Redux",
      icons: [SiJavascript, SiRedux],
      illustration: StoreReduxCode,
    },
    {
      id: 1,
      title: "Squelette de navigation de base en utilisant React Router",
      icons: [SiJavascript, FaReact],
      illustration: ReactRouterCode,
    },
  ];

  const [currentDemo, setCurrentDemo] = useState(codeDemos[0]);
  const [activeUrl, setProjectUrl] = useState(0);
  const cardVariants = {
    offscreen: {
      y: -100,
    },
    onscreen: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  const styles = {
    projectCategory: "font-bold hover:underline mb-2",
    categoryActive: "text-yellow-500",
    categoryDisable: "",
  };

  const challenges = [
    {
      id: "challenge-1",
      title: "7 React ⚛️ Challenges by aibolik_",
      cover: ReactChallengesImg,
      fromSocial: (
        <LinkedInEmbed
          width="100%"
          height={530 + 30}
          url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7149955804576571392"
        />
      ),
      source:
        "https://attachments.convertkitcdnn2.com/1018350/e9bf4b69-b8a0-4bd8-98ea-4b380c42cc7b/react-challenges.pdf",
    },
    {
      id: "challenge-2",
      title: "7 React Challenges by aibolik_ ",
      source:
        "https://attachments.convertkitcdnn2.com/1018350/e9bf4b69-b8a0-4bd8-98ea-4b380c42cc7b/react-challenges.pdf",
    },
    {
      id: "challenge-3",
      title: "20 Days React Learning challenge",
      fromSocial: (
        <TwitterEmbed
          width="100%"
          url="https://twitter.com/Ritanshu347/status/1743474744324972614"
        />
      ),
      source:
        "https://attachments.convertkitcdnn2.com/1018350/e9bf4b69-b8a0-4bd8-98ea-4b380c42cc7b/react-challenges.pdf",
    },
    {
      id: "challenge-4",
      title: "7 React Challenges by aibolik_ ",
      source:
        "https://attachments.convertkitcdnn2.com/1018350/e9bf4b69-b8a0-4bd8-98ea-4b380c42cc7b/react-challenges.pdf",
    },
    {
      id: "challenge-5",
      title: "7 React Challenges by aibolik_ ",
      cover: ReactChallengesImg,
      source:
        "https://attachments.convertkitcdnn2.com/1018350/e9bf4b69-b8a0-4bd8-98ea-4b380c42cc7b/react-challenges.pdf",
    },
  ];

  useEffect(() => {
    const DELAY = 10000;
    setTimeout(() => {
      setIllusrationIndex(
        illusrationActiveIndex < illusrations.length - 1
          ? illusrationActiveIndex + 1
          : 0
      );
    }, DELAY);
  }, [illusrationActiveIndex]);

  useEffect(() => {
    const DELAY = 5000;
    setTimeout(() => {
      setProjectUrl(activeUrl < projectUrls.length - 1 ? activeUrl + 1 : 0);
    }, DELAY);
  }, [activeUrl]);

  useEffect(() => {
    AOS.refresh();
  }, [projectActive]);

  useEffect(() => {
    console.log("current demo", currentDemo);
    setTimeout(() => {
      setCurrentDemo(
        currentDemo.id < codeDemos.length - 1
          ? codeDemos[currentDemo.id + 1]
          : codeDemos.at(0)
      );
    }, 10000);
  }, [currentDemo]);

  return (
    <div id="project" className="flex flex-wrap gap-10">
      <div className="flex w-screen h-screen relative">
        <div className="mx-auto w-full max-w-5xl py-8">
          <h1 className="text-xl">Ayer votre impression sur mes travaux ✨</h1>
        </div>
        <div className="w-[1000px] absolute top-0 right-0">
          <div className="relative overflow-hidden h-screen">
            <AnimatePresence>
              <motion.img
                key={illusrationActiveIndex} // Use the active index as the key
                src={illusrations[illusrationActiveIndex]}
                alt="illusration"
                initial={{ opacity: 0.5, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="h-full w-full"
              />
            </AnimatePresence>
            {/* <motion.div
              className=" absolute top-0 left-0 w-full h-full backdrop-blur-md text-5xl text-white p-4"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div> */}
          </div>
        </div>
      </div>

      {/* animation réalisation qui change infiniment après quelque delais */}
      <div className="flex w-screen h-screen relative">
        <div className="mx-auto w-full max-w-5xl py-8">
          <h1 className="text-xl">Ayer votre impression sur mes travaux ✨</h1>
        </div>
        <div className="w-1/2 absolute top-0 right-0">
          <div className="relative overflow-hidden h-screen">
            <AnimatePresence>
              <motion.div
                key={activeUrl + "url"} // Use the active index as the key
                initial={{ opacity: 0.5, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=""
              >
                <Iframe
                  url={projectUrls[activeUrl]}
                  id=""
                  className="w-full h-screen"
                  display="block"
                  position="relative"
                />
              </motion.div>
            </AnimatePresence>
            {/* <motion.div
              className=" absolute top-0 left-0 w-full h-full backdrop-blur-md text-5xl text-white p-4"
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div> */}
          </div>
        </div>
      </div>

      {/* animation demo code */}
      {currentDemo && (
        <div className="p-4 hover:bg-blue-100 overflow-hidden transition duration-500 flex max-w-5xl mx-auto">
          <div className="mx-auto w-1/2 px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`demo-code__details${currentDemo.id}fdsfmzrr`}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-lg font-monospace font-bold text-zinc-700  break-words">
                  {currentDemo.title}
                </h1>
                <p className="mt-4 flex gap-8">
                  {currentDemo.icons &&
                    currentDemo.icons.length > 0 &&
                    currentDemo.icons.map((Icon) => (
                      <Icon key={`icon-${Icon}`} />
                    ))}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-1/2">
            <div className="overflow-hidden">
              <AnimatePresence>
                <motion.img
                  key={`demo-code__${currentDemo.id}`}
                  src={currentDemo.illustration}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  alt="illusration"
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-full h-full"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto relative p-8">
        <div>
          <Draggable axis="y">
            <button className=" w-20 h-20 flex justify-center items-center rounded-full shadow-xl bg-black text-white">
              <FaAngleDoubleDown />
            </button>
          </Draggable>
        </div>
        <div>
          <div className="w-40 h-40">
            <img
              src={RocketImg}
              alt="rocket"
              className="w-full h-full hover:scale-105"
            />
          </div>
          <div className="mx-auto w-72 h-72 rounded-full overflow-hidden">
            <img
              src={FactoryImg}
              alt="factory"
              className="w-full h-full hover:scale-105 transition duration-500"
            />
          </div>
          <h1 className=" text-center mb-10 font-bold text-5xl">
            Ayer votre impression sur mes travaux ✨
          </h1>
          <div className="w-40">
            <img src={PlanetsImg} alt="stars" className="w-40" />
          </div>

          <div className="pl-10 border-l  flex flex-col">
            <aside>
              <div className="flex gap-2">
                {categoriesNames.map((projectCategory) => (
                  <button
                    onClick={() =>
                      setActive(
                        projectsCategories.find(
                          (project) => project.type === projectCategory
                        )
                      )
                    }
                    className={`${styles.projectCategory} ${
                      projectActive.type === projectCategory
                        ? styles.categoryActive
                        : styles.categoryDisable
                    }`}
                  >
                    {projectCategory}
                  </button>
                ))}
              </div>
              <div className="text-sm border-l pl-4 " data-aos="fade-up">
                {projectActive.desc}
              </div>
            </aside>
            <div className="flex-1">
              <div className=" overflow-x-auto flex gap-10">
                <div className="bg-white border w-screen mx-10 flex-none shadow-xl flex divide-x my-10">
                  <div className="p-4  w-80">
                    <h1 className="font-bold">Toast API</h1>
                    <p className="text-sm">
                      Composant notification qui s'affiche temporairement à
                      l'écran de l'utilisateur.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Iframe
                      url="http://toast-api.onrender.com"
                      id=""
                      className="w-full h-screen"
                      display="block"
                      position="relative"
                    />
                  </div>
                </div>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <div className="bg-white shadow-xl w-screen mx-10 flex-none flex divide-x my-10">
                    <div className="p-4  w-80">
                      <h1 className="font-bold">Ny Anio</h1>
                      <p className="text-sm">
                        Application gestion des tâches faite avec Reactjs et
                        Redux, tailwindcss
                      </p>
                    </div>
                    <div className="flex-1">
                      <Iframe
                        url="http://nyanio.netlify.app"
                        id=""
                        className="w-full h-screen"
                        display="block"
                        position="relative"
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="bg-white shadow-xl w-screen mx-10 flex flex-none divide-x my-10">
                  <div className="p-4  w-80">
                    <h1 className="font-bold">Ny Anio</h1>
                    <p className="text-sm">
                      Application gestion des tâches faite avec Reactjs et
                      Redux, tailwindcss
                    </p>
                  </div>
                  <div className="flex-1">
                    <Iframe
                      url="http://marcellinrabe.github.io/didy-folo"
                      id=""
                      className="w-full h-screen"
                      display="block"
                      position="relative"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-10 text-sm md:grid grid-cols-3">
            {datas.map(
              (project, index) =>
                project.index && (
                  <div key={index}>
                    <ProjectDesc {...project} />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <span className=" hover:underline text-5xl font-title">
            Challenge
          </span>
        </div>
        <div className="pl-8 border-l border-black py-4">
          <p className="">
            Je réalise en application réutilisable des challenges de projet que
            je trouve sur internet
          </p>

          <Layout
            className="my-10 flex"
            colCount={2}
            items={challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="flex flex-col flex-1 border hover:border-blue-300 rounded-xl hover:bg-blue-100 transition duration-500 p-4 pb-0 cursor-pointer"
              >
                <div className="flex gap-1">
                  <h1 className="text-2xl">{challenge.title}</h1>
                </div>
                {challenge.fromSocial ? (
                  <div className="my-4">{challenge.fromSocial}</div>
                ) : (
                  challenge.cover && (
                    <div className="max-w-[300px] max-h-[500px] mx-auto py-4">
                      <img
                        src={ReactChallengesImg}
                        className="rounded-2xl"
                        alt="7 react-challenges by aibolik_"
                      />
                    </div>
                  )
                )}

                {/*<a
                  target="_blank"
                  href={challenge.source}
                  className="flex justify-center mt-4 mx-auto px-4 bg-green-300 border-4  rounded-3xl border-green-600"
                >
                  <span className="flex gap-2 items-center font-monospace font-black">
                    <FaLink className="w-4" />
                    source
                  </span>
                  </a>*/}
                <div className="flex justify-between items-center border-t mt-2">
                  <div className="flex gap-8">
                    <div className="flex divide-x">
                      <span className="pr-2">
                        <FaCode className="w-4" />
                      </span>
                      <span className="pl-2">
                        <FaCheck className="w-4" />
                      </span>
                    </div>

                    <FaLink className="w-4" />
                  </div>
                  <aside className="text-sm">{"20%"}</aside>
                </div>
              </div>
            ))}
          />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full">
            <div className="text-center h-[25vh] flex flex-col items-center justify-end mt-20">
              <h1 className="pb-8">Voir mes repôts</h1>
              <a
                href="https://github.com/rabemarcellin"
                target="_blank"
                className="my-4 bg-dotted p-4 shadow-2xl rounded-full animate-bounce"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <ReactSVG src={bgCurveDown} />
        </div>
      </div>
    </div>
  );
}

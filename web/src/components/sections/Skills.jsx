import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import ReactRouterCode from "../../assets/codebase/react-router.png";
import StoreReduxCode from "../../assets/codebase/store-redux.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PageSection from "./PageSection";

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

const SkillItem = ({ main, alias }) => {
  return (
    <span>
      {main} ${" "}
      {alias ? (
        <span className="text-gray-500">{alias}</span>
      ) : (
        <span>{"_"}</span>
      )}
    </span>
  );
};
const challenges = [
  {
    id: "skill-type-fdsq848798fd",
    title: "Côté-client",
    tech: [
      <SkillItem
        main="Html/css/js"
        alias="scss.Tailwindcss.Bootstrap - jQuery - XHR.Ajax"
      />,
      <SkillItem main="React/Gatsby" alias="Redux - fetch.axios" />,
    ],
  },
  {
    id: "skill-type-fsfkfljs887fsff",
    title: "Côté-serveur",
    tech: [
      <SkillItem main="Php" alias="PDO*MySQL - MVC" />,
      <SkillItem main="Laravel" alias="Livewire " />,
      <SkillItem main="Base des données" alias="MCD.MLD - MySQL.Oracle" />,
    ],
  },
  {
    id: "skill-type-fdqm465456jdfmdkjq",
    title: "API",
    tech: [
      <SkillItem main="Nodejs" alias="Express.js - sequelize.mongoose" />,
      <SkillItem main="FastAPI" />,
    ],
  },
  {
    id: "skill-type-4dsfjsdml7987fsf",
    title: "Mobile",
    tech: [<SkillItem main="React Native" alias="Expo" />],
  },
  {
    id: "skill-type-fdjmfqkdjmf",
    title: "Maquette/Prototype",
    tech: [<SkillItem main="Figma" />],
  },
];

export default function Skills() {
  const [currentDemo, setCurrentDemo] = useState(codeDemos[0]);
  const [skillId, setSkillId] = useState(null);

  useEffect(() => {
    setSkillId(challenges[0]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentDemo(
        currentDemo.id < codeDemos.length - 1
          ? codeDemos[currentDemo.id + 1]
          : codeDemos.at(0)
      );
    }, 10000);
  }, [currentDemo]);

  return (
    <div id="skills" className="max-w-5xl mx-auto">
      <PageSection title="Techno">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={20}>
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                onMouseEnter={() => setSkillId(challenge.id)}
                onMouseLeave={() => setSkillId(null)}
                className="flex-1 border hover:border-blue-300 rounded-xl  transition duration-500 p-4  cursor-pointer"
              >
                <div className="flex gap-1">
                  <h1 className="text-2xl">{challenge.title}</h1>
                </div>
                <div
                  className={`
              transition-all duration-500
              ${
                skillId === challenge.id ? "border-l pl-4" : "border-none p-0"
              } font-monospace font-bold text-zinc-900`}
                >
                  <ul className="">
                    {challenge.tech &&
                      challenge.tech.map((tech) => (
                        <li key={`tech-${tech}fdsfsd`} className="my-4">
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </PageSection>
      {currentDemo && (
        <PageSection title="Quelques solutions que je peux apporter">
          <div className=" hover:bg-blue-100 overflow-hidden transition duration-500 flex max-w-5xl mx-auto">
            <div className="mx-auto w-1/2 px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`demo-code__details${currentDemo.id}fdsfmzrr`}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-lg font-monospace font-bold text-zinc-700  break-words py-4">
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
        </PageSection>
      )}
    </div>
  );
}

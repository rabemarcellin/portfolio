import React, { useState } from "react";
import {
  FaCheck,
  FaCode,
  FaGithub,
  FaLink,
  FaAngleDoubleDown,
} from "react-icons/fa";
import Iframe from "react-iframe";
import Draggable from "react-draggable"; // The default
import { motion } from "framer-motion";
import Layout from "react-masonry-list";
import {
  LinkedInEmbed,
  TwitterEmbed,
  FacebookEmbed,
} from "react-social-media-embed";
import PageSection from "./PageSection";
import FactoryImg from "../../assets/animations/factory.jpg";
import ReactChallengesImg from "../../assets/challenges/react-challenges.png";
import NodejsProjectImg from "../../assets/challenges/nodejs-project-ideas.jpg";

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

export default function Project() {
  const projectsCategories = [
    {
      key: 0,
      type: "Personnel",
      desc: `Mes projets personnels`,
    },
  ];

  const categoriesNames = projectsCategories.map((project) => project.type);

  const [projectActive, setActive] = useState(projectsCategories[0]);

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
      id: "challenge-2",
      title: "8 Nodejs projects ideas by @codebysid",
      cover: NodejsProjectImg,
      tolal: 8,
      finish: null,
    },
    {
      id: "challenge-3",
      title: "Top 5 Beginner Level ReactJS Project Ideas!!",
      fromSocial: (
        <FacebookEmbed
          width="100%"
          height={646}
          url="https://www.facebook.com/ReactJSDevelopers/posts/pfbid0VCpSGG8qhi5ZQr2DV1JD3zA5brsm5i7PZn2zuKZpeJXtNc22RDgwYyCP4Tyw96bHl"
        />
      ),
      total: 5,
      finish: null,
    },

    {
      id: "challenge-5",
      title: "7 React Challenges by aibolik_ ",
      cover: ReactChallengesImg,
      total: 7,
      finish: 1,
    },
  ];

  return (
    <div id="project" className="flex flex-wrap gap-10">
      <div className="max-w-5xl mx-auto relative p-8">
        <div>
          <Draggable axis="y">
            <button className=" w-20 h-20 flex justify-center items-center rounded-full shadow-xl bg-black text-white">
              <FaAngleDoubleDown />
            </button>
          </Draggable>
        </div>
        <div>
          {/* <div className="mx-auto w-72 h-72 rounded-full overflow-hidden">
            <img
              src={FactoryImg}
              alt="factory"
              className="w-full h-full hover:scale-105 transition duration-500"
            />
          </div> */}

          <PageSection title="projets perso">
            <div className="pl-10 border-l  flex flex-col">
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
          </PageSection>
        </div>

        <PageSection title="Challenge">
          <p className="font-monospac  text-zinc-900 text-lg">
            Je réalise en application réutilisable des challenges de projet que
            je trouve sur internet
          </p>

          <Layout
            className="my-4 flex"
            colCount={2}
            items={challenges
              .sort((one, other) => other.finish - one.finish)
              .map((challenge) => (
                <div
                  key={challenge.id}
                  className="flex flex-col flex-1 border hover:border-blue-300 rounded-xl hover:bg-blue-100 transition duration-500 p-4 pb-0 cursor-pointer"
                >
                  <div className="flex gap-1">
                    <h1 className="text-2xl">{challenge.title}</h1>
                  </div>
                  {challenge.fromSocial ? (
                    <div className="my-4 flex justify-center w-full items-center">
                      {challenge.fromSocial}
                    </div>
                  ) : (
                    challenge.cover && (
                      <div className="max-w-[300px] max-h-[500px] mx-auto py-4">
                        <img
                          src={challenge.cover}
                          className="rounded-2xl"
                          alt="7 react-challenges by aibolik_"
                        />
                      </div>
                    )
                  )}

                  <div className="flex justify-between items-center border-t mt-2">
                    <aside className="text-lg font-bold font-monospace">
                      {challenge.finish
                        ? `${challenge.finish}/${challenge.total}`
                        : "à suivre"}
                    </aside>
                    <div className="flex gap-8">
                      <FaLink className="w-4" />
                    </div>
                  </div>
                </div>
              ))}
          />
        </PageSection>

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
        </div>
      </div>
    </div>
  );
}

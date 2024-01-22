import React, { useState } from "react";
import { FaGithub, FaLink, FaAngleDoubleDown } from "react-icons/fa";
import Iframe from "react-iframe";
import Draggable from "react-draggable"; // The default
import { FacebookEmbed } from "react-social-media-embed";
import PageSection from "./PageSection";
import ReactChallengesImg from "../../assets/challenges/react-challenges.png";
import NodejsProjectImg from "../../assets/challenges/nodejs-project-ideas.jpg";

const demosData = [
  {
    key: "demo46fs-fsfe4fd",
    projectName: "Toast API",
    description: `Composant notification qui s'affiche temporairement à l'écran de l'utilisateur.`,
    url: "http://toast-api.onrender.com",
  },
  {
    key: "demo898dqsfs-rzerze",
    projectName: "Ny Anio",
    description: `Application gestion des tâches faite avec Reactjs et Redux tailwindcss.`,
    url: "http://nyanio.netlify.app",
  },
  {
    key: "dem89fds4-fdsfs45",
    projectName: "Didy Folo",
    description: `Site vitrine des 10 commandements de Dieu.`,
    url: "http://marcellinrabe.github.io/didy-folo",
  },
];

const Demo = ({ projectName, description, url, key }) => {
  return (
    <div className="md:m-10 mb-32 ">
      <div className="my-4 md:flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl font-monospace drop-shadow-xl">
          {projectName}
        </h1>
        <p className="">{description}</p>
      </div>
      <div className="border bg-white rounded-lg relative transition-all duration-500 hover:shadow">
        <div className="bg-white w-full h-[75vh] rounded-lg overflow-hidden">
          <div className="border-b">
            <div className="m-4 text-center text-sm p-2 rounded-3xl text-gray-500 font-bold bg-gray-300">
              {url}
            </div>
          </div>
          <Iframe
            url={url}
            id={key}
            className="w-full h-full overflow-scroll"
          />
        </div>
      </div>
    </div>
  );
};

export default function Project() {
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
    <div id="project">
      <div className="max-w-5xl mx-auto relative p-8">
        <div>
          <Draggable axis="y">
            <button className=" w-20 h-20 flex justify-center items-center rounded-full shadow-xl bg-black text-white">
              <FaAngleDoubleDown />
            </button>
          </Draggable>
        </div>
        <div>
          <PageSection title="Projets perso">
            {demosData.map((demo) => (
              <Demo {...demo} />
            ))}
          </PageSection>
        </div>

        <PageSection title="Challenge">
          <p className="w-full break-words text-zinc-900">
            Je réalise en application réutilisable des challenges de projet que
            je trouve sur internet
          </p>

          <div className="md:grid md:grid-cols-2 my-4 gap-4">
            {challenges
              .sort((one, other) => other.finish - one.finish)
              .map((challenge) => (
                <div
                  key={challenge.id}
                  className="mb-4 md:mb-0 md:flex bg-white h-fit md:flex-col md:flex-1 border hover:border-blue-300 rounded-xl hover:bg-blue-100 transition duration-500 p-4 pb-0 cursor-pointer"
                >
                  <div className="flex gap-1">
                    <h1 className="text-2xl break-words font-bold">
                      {challenge.title}
                    </h1>
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
          </div>
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

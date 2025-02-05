import { useState, useEffect } from "react";
import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import ReactrouterExampleSVG from '../../../../assets/demos/react-router-example.svg'
import ReduxExampleSVG from '../../../../assets/demos/redux-example.svg'
import Linked from "../../../../components/Linked";
import './skills.css'
import { useTranslation } from "../../../../../node_modules/react-i18next"
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPython, SiTypescript } from "react-icons/si";
import IDE from "../../../../components/IDE";

const codeDemos = [
  {
    id: 0,
    title: "demo-crudredux-title",
    // icons: [SiJavascript, SiRedux],
    icons: ['si-javascript', 'si-redux'],
    illustration: ReduxExampleSVG,
  },
  {
    id: 1,
    title: "demo-reactrouter-title",
    // icons: [SiJavascript, FaReact],
    icons: ['si-javascript', 'fa-react'],
    illustration: ReactrouterExampleSVG,
  },
];

export default function Skills() {
  const { t } = useTranslation()
  const [currentDemo, setCurrentDemo] = useState(codeDemos[0]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentDemo(
        currentDemo.id < codeDemos.length - 1
          ? codeDemos[currentDemo.id + 1]
          : codeDemos.at(0)
      );
    }, 30000);
  }, [currentDemo]);

  const myTopSkills = [
    {
      label: ["Team work", "Gestion de projet"],
      title: "Scrum - Agile",
      metadata: 'Scrum, Agile',
      details: [
        "Utilise la Méthologie Scrum pour la répartition des tâches et la gestion de projet, en rélation avec les Product Owner et le Scrum Master.",
      ]
    },
      {
        label: ["Site vitrine", "Plateforme"],
        title: "React - Typescript",
        metadata: 'Javascript, Redux, Tailwind CSS',
        details: [
          "Développement d'applications web (usage régulier) en adoptant un projet React(avec ou sans TypeScript) sous vite.",
          "Gestion des états globaux avec Redux.",
          "Utilisation de React Router pour la navigation entre les pages.",
          "Styliser avec Tailwind CSS.",
          "Gestion de l'authentification(access token et refresh token) avec axios et JWT.",
        ]
      },
     
      {
        label: ["Api Rest", "Api GraphQL", "Backend"],
        title: "NodeJS - Express",
        metadata: 'Express, BDD Relationnelle, BDD NoSQL',
        details: [
          "Manipulation des base des données Relationnelle(mysql) et BDD NoSQL(mongoDB).",
          "Ayant des compétences dans la gestion des streams.",
          "Création d'API avec Express.",
        ]
      },

      {
        label: ["Bot Facebook Messenger"],
        title: "Python - Ampalibe",
        metadata: 'Ampalibe',
        details: [
          "Création d'un bot Facebook Messenger en utilisant le framework Ampalibe.",
        ]
      },
  ]

  const myAllStacks = [
    {
      icon: <FaHtml5 />,
      label: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      label: "CSS",
    },
    {
      icon: <FaJs />,
      label: "Javascript",
    },
    {
      icon: <SiTypescript />,
      label: "Typescript",
    },
    {
      icon: <SiPython />,
      label: "Python",
    },
    {
      icon: <FaReact />,
      label: "React",
    },
    {
      icon: <FaReact />,
      label: "React Native",
    },
    {
      icon: <FaNodeJs />,
      label: "NodeJS",
    },
    {
      icon: <SiExpress />,
      label: "Express",
    },
    {
      icon: <SiMongodb />,
      label: "MongoDB",
    },
    {
      icon: <SiMysql />,
      label: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      label: "PostgreSQL",
    },
    {
      icon: <FaGit />,
      label: "Git",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      icon: <DiScrum />,
      label: "Scrum",
    },
    {
      icon: <DiScrum />,
      label: "Agile",
    },
  ]

  return (
    <Linked id="skills" className="bg-slate-300 dark:bg-slate-700 pb-10">
      <div  className="max-w-5xl mx-auto px-4">
      <h6 className="ttext-3xl my-4 font-bold mb-2 md:text-5xl md:my-8 dark:text-white">{t("skill-title") }</h6>
      <div className="grid md:grid-cols-2 gap-2">
        {myTopSkills.map((topSkill, index) => (
          <div key={"top-skill" + index} className="col-span-1 bg-white/75 dark:bg-slate-900 dark:hover:bg-slate-800 hover:bg-white shadow-sm dark:hover:shadow-white/10 hover:shadow-xl transition-shadow duration-300 p-4">
          <div className="flex gap-2">
            {topSkill.label.map((label, index) => (
              <span key={"top-skill-label" + index} className="bg-blue-500 w-fit text-white rounded-lg px-2 py-1 text-sm mb-4">{label}</span>
            ))}
        </div>

        <div className="font-bold text-4xl mb-4 break-normal dark:text-white">
          <span className="text-blue-500 mr-2">{"->"}</span>
          {topSkill.title}</div>
        <div className="border-b border-gray-500 w-fit mb-4">
        <h4 className="ml-2 text-gray-500 dark:text-white/50">{topSkill.metadata}</h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-slate-100 leading-6">
          <ul className="list-disc list-inside">
            {topSkill.details.map((detail, index) => (
              <li key={"top-skill-detail" + index}>{detail}</li>
            ))}
            
          </ul>
        </p>
        </div>
        ))}
      
      </div>

      <div className="my-10">
        <div className="p-4 rounded-lg flex flex-wrap gap-4 my-10">
          {myAllStacks.map((stack, index) => (
            <div key={"stack" + index} className="flex items-center justify-center gap-2 rounded-lg p-4 shadow-lg bg-white dark:bg-slate-900 hover:bg-blue-500 dark:text-white hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300">
              {stack.icon}
              {stack.label}
            </div>
          ))}
        </div>

      </div>
        

        <div>
         {/*  <ul className="">
            <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 576: 2, 768: 3}}>       
              <Masonry>
                {techs.map(tech => (
                  <li key={`tech-${tech.mainTech}`} className="language__item">
                    <div className="flex gap-4 items-center">
                      <div className="">
                        <ShowIcon name={tech.icon} className={`p-2 shadow-sm ${tech.colorAsClass}`} />
                      </div>
                      <div className="font-bold text-xl">
                        {tech.mainTech}
                      </div>
                    </div>
                    
                    {tech.details && (
                      <p className="language__item__details">
                          {t(tech.details)}
                      </p>
                    )}
                  </li>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            
          </ul> */}
        </div>
      </div>
     
      {currentDemo && (
          <div className=" max-w-5xl px-4 overflow-hidden transition duration-500  mx-auto">
            <h6 className="text-3xl my-4 font-bold mb-2 md:text-5xl md:my-8 dark:text-white">{t("feature-examples")}</h6>
            <div className="m-4 text-center">
              
                  <h1 className="text-base md:text-lg font-bold text-gray-500 dark:text-white/50">
                    {t(currentDemo.title)}
                  </h1>
                  
            </div>

            <div className="overflow-hidden">
                <IDE codeSVG={currentDemo.illustration}  />
              </div>
          </div>
      )}
    </Linked>
  );
}

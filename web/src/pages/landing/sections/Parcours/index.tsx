import { Chrono } from "react-chrono";
import ConstellationImg from "../../../../assets/img/constellation.png"
import DmsnImg from "../../../../assets/img/dmsn.png"
import LCOMImg from "../../../../assets/img/lcom.png"
import IteamSImg from "../../../../assets/img/iteam-s.png"
import EstiImg from "../../../../assets/img/esti.png"
import UniversInfoImg from "../../../../assets/img/univers-informatique.png"
import ITBuilderImg from "../../../../assets/img/it-builder.png"
import ProgrammeSesameImg from "../../../../assets/img/programme-sesame.png"

import "./parcours.css"
import Linked from "../../../../components/Linked";

const Parcours = () => {
    const items = [
        {
            title: "Mai 2024 - Présent",
            cardTitle: "Constellation Group",
            url: "https://constellation-group.co",
            cardSubtitle:"Développeur React/Typescript",
            cardDetailedText:`Travaille en tant que Développeur full stack, principalement sur l'interface graphique(front-end)
            d'une plateforme web du nom de MyAuxilium qui combine à la fois l'IA Générative et la gestion de compte client personnel ou équipes.`,
            media: {
            type: "IMAGE",
            source: {
                url:ConstellationImg
            }
            }
        },
        {
            title: "Mars 2024 - Mai 2024",
            cardTitle: "Dimension",
            // url: "#",
            cardSubtitle:"Développeur Full stack [Stage/Période d'essai]",
            cardDetailedText: "Touché des plusieurs projets avec tes technologies différents: Une plateforme utile dans le domaine de récrutement avec les outils no-code Bubble pour l'interface grahique, et Xano pour la gestion des données, une API avec le language Python, OCR sur une image avec Javascript.\
            Un bot facebook messenger qui permet de gérer les demandes de récrutement et de les envoyer à l'équipe de recrutement avec le framework python Ampalibe. Développement d'une RAG(Réponse Automatique Générative) avec l'IA OpenAI pour traiter les questions sur une ensemble de données(excel).",
            media: {
            type: "IMAGE",
            source: {
                url:DmsnImg
            }
            }
        },
        {
            title: "2023 [2 mois]",
            cardTitle: "LCOM",
            url: "https://lcom-corp.com",
            cardSubtitle:"Développeur React [Consultant]",
            cardDetailedText: "Contribuer au développement d'une plateforme web développer avec React/Redux pour le suivie des activités des jeunes accompagnés par une ONG. En collaboration l'équipe du backend sous Laravel.",
            media: {
            type: "IMAGE",
            source: {
                url:LCOMImg
            }
            }
        },
        {
            title: "2022",
            cardTitle: "Iteam-$",
            url: "https://www.facebook.com/iTeam.Community-100083660835154/",
            cardSubtitle:"Membre",
            cardDetailedText: "Membre de la communauté IT << iTeam-$ >>. Distinction: 2è prix à l'hackathon HUI(Hackaton-Inter-Universitaire) 2022.",
            media: {
            type: "IMAGE",
            source: {
                url:IteamSImg
            }
            }
        },
        {
            title: "2022 [3 mois]",
            cardTitle: "IT Builder",
            url: "https://www.linkedin.com/company/itbmx",
            cardSubtitle:"Alternant Intégrateur web",
            cardDetailedText: "Créer des interfaces web avec HTML et CSS / Intégrer la maquette Figma d'une application web sous Symphonie.",
            media: {
            type: "IMAGE",
            source: {
                url:ITBuilderImg
            }
            }
        },
        {
            title: "2021 - Présent",
            cardTitle: "ESTI",
            url: "https://esti.mg",
            cardSubtitle:"Etude en Intégration et Développement d'Application.",
            cardDetailedText: "En cours d'obtention du diplôme de Licence.",
            media: {
            type: "IMAGE",
            source: {
                url:EstiImg
            }
            }
        },
        {
            title: "Octobre 2020 - Décembre 2020",
            cardTitle: "Univers Informatique",
            url: "https://esti.mg",
            cardSubtitle:"Stage de découverte.",
            cardDetailedText: "Effectuer une stage de découverte dans la centre de formation en information et gestion << Univers Informatique >>. Suivi de cours en algorithme.\
            En tant qu'aide formateur, accompagner des élèves en informatique bureautique et en programmation de site web statique avec HTML/CSS.",
            media: {
            type: "IMAGE",
            source: {
                url:UniversInfoImg
            }
            }
        },
        {
            title: "2020",
            cardTitle: "Programme SESAME",
            url: "https://programme-sesame.mg",
            cardSubtitle:"Boursier",
            cardDetailedText: "Bénéficiaire d'accompagnement socio-éducatif et professionnel par le Programme SESAME, de passage à l'année préparatoire après l'obtention du baccalauréat puis dans un foyer proche de l'Etablissement Supérieure financé par le Programme SESAME, ainsi que les frais d'étude universtaire.",
            media: {
            type: "IMAGE",
            source: {
                url:ProgrammeSesameImg
            }
            }
        },
    ];
  
      
  return (
    <Linked id="parcours" className='py-4 md:py-8 dark:bg-slate-900'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='h-fit mb-20 md:mb-0 md:h-[90vh] flex justify-center items-center'>
                <div className='w-full'>
                    <h2 className='text-sm lg:text-base italic my-4 underline text-gray-500 dark:text-gray-300 font-light' >A propos de moi</h2>
                    <p className='text-xl lg:text-3xl leading-relaxed dark:text-white'>
                        Je suis un développeur full stack passionné et qui baigne dans le développement d'application web. <br/> 
                        <span className='text-base lg:text-lg text-slate-600 dark:text-slate-400'>Situé à Antananarivo, Madagascar. 🇲🇬</span>
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-5xl font-bold my-4 hover:underline dark:border-slate-700 border-b pb-4 border-slate-300 dark:text-white'>Mon Parcours</h1>
            <Chrono items={items} disableToolbar mode="VERTICAL_ALTERNATING" classNames={{
                    card: "dark:!bg-slate-800",
                    cardSubtitle: "dark:!text-white",
                    cardDetailedText: "text-base lg:text-lg font-light dark:!text-white",
                    cardMedia: "w-full h-full rounded-3xl",
            }} />
            </div>
        </div>
    </Linked>
  )
}

export default Parcours
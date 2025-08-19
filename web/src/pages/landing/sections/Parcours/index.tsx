import { Chrono } from "react-chrono";
import ConstellationImg from "../../../../assets/img/constellation.png"
import DmsnImg from "../../../../assets/img/dmsn.png"
import LCOMImg from "../../../../assets/img/lcom.png"
import IteamSImg from "../../../../assets/img/iteam-s.png"
import EstiImg from "../../../../assets/img/esti.png"
import UniversInfoImg from "../../../../assets/img/univers-informatique.png"
import ITBuilderImg from "../../../../assets/img/it-builder.png"
import ProgrammeSesameImg from "../../../../assets/img/programme-sesame.png"
import ConnekiteoImg from "../../../../assets/img/connekiteo.png"
import DOMPurify from 'dompurify';

const consteParcoursHtml = `
<ul class="list-disc list-inside flex flex-col gap-4">
    <li>Chargé de la maintenance et de l’implementation de nouvelle fonctionnalité sur la partie UI avec <strong><i>React/Typescript/Redux</i></strong> de <strong><u>myAuxilium</u></strong>. Un plateforme qui permet de travailler(en équipe ou solo) avec des agents IA sur ses documents.</li>
    <li>Contribuer au développement du plateforme <strong><u>twisales</u></strong>, une application de VoIP Call Center faite avec <strong><i>nodejs</i></strong>.</li>
</ul>
`;

const connekiteoParcoursHtml = `
<ul class="list-disc list-inside flex flex-col gap-4">
    <li>Développement d’une plateforme de boost de publicité avec <strong><i>React.js</i></strong> et un backend <strong><i>FastAPI</i></strong>.</li>
</ul>
`;

const dmsnParcoursHtml = `
<ul class="list-disc list-inside flex flex-col gap-4">
    <li>Chargé de la création du système RAG, de la conception de son architecture à son développement, en utilisant <strong><i>Langchain</i></strong> avec <strong><i>Python</i></strong>, et <strong><i>LangFlow</i></strong>.</li>
    <li>Création d’une application full no-code avec <strong><i>Bubble</i></strong>(UI) et <strong><i>Xano</i></strong>(Api) qui réalisé avec un bot Messenger que j’ai développé avec <strong><i>Python</i></strong> et <strong><i>Ampalibe</i></strong>.</li>
</ul>
`;


const lcomParcoursHtml = `
<ul class="list-disc list-inside flex flex-col gap-4">
    <li>Chargé du développement d’un plateforme web sécurisé avec <strong><i>React/Redux</i></strong> alimenté par un api <strong><i>Laravel</i></strong>, en étroite collaboration avec le chef du projet et l’équipe du backend.</li>
</ul>
`;

const iTeamParcoursHtml = `
<p class="font-bold mb-2"><i>Thème: Challenger les applications de transferts existantes (ex: challenger Xender)</i></p>
<p class="mb-2">Développement de solution logiciel permettant de transferer des fichiers et les récuperer sur differentes plateformes. Facebook Messenger, sur application mobile ou sur le site web.</p>
<p class="mb-2"><u>Assignation:</u> Gestion d’upload et download des fichiers.</p>
`;

const itBuilderParcoursHtml = `
Creation d’interface UI conforme à la maquette dans un projet Symphony.
`;

const universInfoParcoursHtml = `
<ul class="list-disc list-inside flex flex-col gap-4">
    <li>Effectuer une stage de découverte dans la centre de formation en information et gestion <strong>Univers Informatique</strong>. Suivi de cours en algorithme.</li>
    <li>En tant qu'aide-formateur, accompagner des élèves en informatique bureautique et en programmation de site web statique avec HTML/CSS.</li>
</ul>
`;




import "./parcours.css"
import Linked from "../../../../components/Linked";

const Parcours = () => {
    const items = [
        {
            title: "Mai 2024 - Présent",
            cardTitle: "Constellation Group",
            url: "https://constellation-group.co",
            cardSubtitle:"Développeur React/Typescript",
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(consteParcoursHtml) }} />
            ),
            media: {
            type: "IMAGE",
            source: {
                url:ConstellationImg
            }
            }
        },
        {
            title: "Juin 2025 - Juillet 2025",
            cardTitle: "Connekiteo AI",
            // url: "https://constellation-group.co",
            cardSubtitle:"Développeur React/FastAPI",
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(connekiteoParcoursHtml) }} />
            ),
            media: {
            type: "IMAGE",
            source: {
                url:ConnekiteoImg
            }
            }
        },
        {
            title: "Mars 2024 - Mai 2024",
            cardTitle: "Dimension",
            // url: "#",
            cardSubtitle:"Développeur Full stack [Stage/Période d'essai]",
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dmsnParcoursHtml) }} />
            ),
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
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lcomParcoursHtml) }} />
            ),
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
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(iTeamParcoursHtml) }} />
            ),
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
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(itBuilderParcoursHtml) }} />
            ),
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
            cardDetailedText: (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(universInfoParcoursHtml) }} />
            ),
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
            <div className='h-fit mb-20 md:mb-0 md:h-[30vh] flex justify-center items-center'>
                <div className='w-full'>
                    <h2 className='text-sm lg:text-base italic my-4 underline text-gray-500 dark:text-gray-300 font-light' >A propos de moi</h2>
                    <p className='text-xl lg:text-3xl leading-relaxed dark:text-white'>
                        Je suis un développeur full stack passionné et qui baigne dans le développement d'application web. <br/> 
                        <span className='text-base lg:text-lg text-slate-600 dark:text-slate-400'>Situé à Antananarivo, Madagascar. 🇲🇬</span>
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-5xl font-bold my-4 hover:underline dark:border-slate-700 border-b pb-4 border-slate-300 dark:text-white'>Mon parcours</h1>
            <Chrono items={items} disableToolbar mode="VERTICAL_ALTERNATING" classNames={{
                    card: "dark:!bg-slate-800 p-0!",
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
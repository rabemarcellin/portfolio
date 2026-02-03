import DmsnImg from "@/assets/img/dmsn.png"
import LCOMImg from "@/assets/img/lcom.png"
import IteamSImg from "@/assets/img/iteam-s.png"
import EstiImg from "@/assets/img/esti.png"
import UniversInfoImg from "@/assets/img/univers-informatique.png"
import ITBuilderImg from "@/assets/img/it-builder.png"
import ProgrammeSesameImg from "@/assets/img/programme-sesame.png"
import ConnekiteoImg from "@/assets/img/connekiteo.png"

export const PARCOURS_ITEMS = [
    {
        title: "Mai 2024 - Présent",
        cardTitle: "Constellation Group",
        url: "https://constellation-group.co",
        cardSubtitle: "Développeur React/Typescript",
        cardDetailedText: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé de la maintenance et de l’implementation de nouvelle fonctionnalité sur la partie UI avec React/Typescript/Redux de myAuxilium. Un plateforme qui permet de travailler(en équipe ou solo) avec des agents IA sur ses documents.</li>
                    <li>Contribuer au développement du plateforme twisales, une application de VoIP Call Center faite avec nodejs.</li>
                </ul>
            </>

        ),
        media: {
            type: 'IMAGE',
            source: { url: 'image.jpg' }
        },
    },
    {
        title: "Juin 2025 - Juillet 2025",
        cardTitle: "Connekiteo AI",
        // url: "https://constellation-group.co",
        cardSubtitle: "Développeur React/FastAPI",
        cardDetailedText: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Développement d’une plateforme de boost de publicité avec React.js et un backend FastAPI.</li>
                </ul>
            </>
        ),
        media: {
            type: "IMAGE",
            source: {
                url: ConnekiteoImg
            }
        }
    },
    {
        title: "Mars 2024 - Mai 2024",
        cardTitle: "Dimension",
        // url: "#",
        cardSubtitle: "Développeur Full stack [Stage/Période d'essai]",
        cardDetailedText: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé de la création du système RAG, de la conception de son architecture à son développement, en utilisant Langchain avec Python, et LangFlow.</li>
                    <li>Création d’une application full no-code avec Bubble(UI) et Xano(Api) qui réalisé avec un bot Messenger que j’ai développé avec Python et Ampalibe.</li>
                </ul>
            </>

        ),
        media: {
            type: "IMAGE",
            source: {
                url: DmsnImg
            }
        }
    },
    {
        title: "2023 [2 mois]",
        cardTitle: "LCOM",
        url: "https://lcom-corp.com",
        cardSubtitle: "Développeur React [Consultant]",
        cardDetailedText: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé du développement d’un plateforme web sécurisé avec React/Redux alimenté par un api Laravel, en étroite collaboration avec le chef du projet et l’équipe du backend.</li>
                </ul>
            </>
        ),
        media: {
            type: "IMAGE",
            source: {
                url: LCOMImg
            }
        }
    },
    {
        title: "2022",
        cardTitle: "Iteam-$",
        url: "https://www.facebook.com/iTeam.Community-100083660835154/",
        cardSubtitle: "Membre",
        cardDetailedText: (
            <>
                <p className="font-bold mb-2">Thème: Challenger les applications de transferts existantes (ex: challenger Xender)</p>
                <p className="mb-2">Développement de solution logiciel permettant de transferer des fichiers et les récuperer sur differentes plateformes. Facebook Messenger, sur application mobile ou sur le site web.</p>
                <p className="mb-2">Assignation: Gestion d’upload et download des fichiers.</p>
            </>
        ),
        media: {
            type: "IMAGE",
            source: {
                url: IteamSImg
            }
        }
    },
    {
        title: "2022 [3 mois]",
        cardTitle: "IT Builder",
        url: "https://www.linkedin.com/company/itbmx",
        cardSubtitle: "Alternant Intégrateur web",
        cardDetailedText: (
            <>
                Creation d’interface UI conforme à la maquette dans un projet Symphony.

            </>
        ),
        media: {
            type: "IMAGE",
            source: {
                url: ITBuilderImg
            }
        }
    },
    {
        title: "2021 - Présent",
        cardTitle: "ESTI",
        url: "https://esti.mg",
        cardSubtitle: "Etude en Intégration et Développement d'Application.",
        cardDetailedText: "En cours d'obtention du diplôme de Licence.",
        media: {
            type: "IMAGE",
            source: {
                url: EstiImg
            }
        }
    },
    {
        title: "Octobre 2020 - Décembre 2020",
        cardTitle: "Univers Informatique",
        url: "https://esti.mg",
        cardSubtitle: "Stage de découverte.",
        cardDetailedText: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Effectuer une stage de découverte dans la centre de formation en information et gestion Univers Informatique. Suivi de cours en algorithme.</li>
                    <li>En tant qu'aide-formateur, accompagner des élèves en informatique bureautique et en programmation de site web statique avec HTML/CSS.</li>
                </ul>
            </>
        ),
        media: {
            type: "IMAGE",
            source: {
                url: UniversInfoImg
            }
        }
    },
    {
        title: "2020",
        cardTitle: "Programme SESAME",
        url: "https://programme-sesame.mg",
        cardSubtitle: "Boursier",
        cardDetailedText: "Bénéficiaire d'accompagnement socio-éducatif et professionnel par le Programme SESAME, de passage à l'année préparatoire après l'obtention du baccalauréat puis dans un foyer proche de l'Etablissement Supérieure financé par le Programme SESAME, ainsi que les frais d'étude universtaire.",
        media: {
            type: "IMAGE",
            source: {
                url: ProgrammeSesameImg
            }
        }
    },
];

export const PARCOURS = [
    
    {
        duration: "Mai 2024 - Présent",
        company: "Constellation Group",
        website: "https://constellation-group.co",
        position: "Développeur React/Typescript",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé de la maintenance et de l’implementation de nouvelle fonctionnalité sur la partie UI avec React/Typescript/Redux de myAuxilium. Un plateforme qui permet de travailler(en équipe ou solo) avec des agents IA sur ses documents.</li>
                    <li>Contribuer au développement du plateforme twisales, une application de VoIP Call Center faite avec nodejs.</li>
                </ul>
            </>

        ),
    },
    {
        duration: "Juin 2025 - Juillet 2025",
        company: "Connekiteo AI",
        website: "https://connekiteo.ai",
        position: "Développeur React/FastAPI",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Développement d’une plateforme de boost de publicité avec React.js et un backend FastAPI.</li>
                </ul>
            </>
        ),
    },
    {
        duration: "Mars 2024 - Mai 2024",
        company: "Dimension",
        website: "#",
        position: "Développeur Full stack [Stage/Période d'essai]",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé de la création du système RAG, de la conception de son architecture à son développement, en utilisant Langchain avec Python, et LangFlow.</li>
                    <li>Création d’une application full no-code avec Bubble(UI) et Xano(Api) qui réalisé avec un bot Messenger que j’ai développé avec Python et Ampalibe.</li>
                </ul>
            </>

        ),
    },
    {
        duration: "2023 [2 mois]",
        company: "LCOM",
        website: "https://lcom-corp.com",
        position: "Développeur React [Consultant]",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Chargé du développement d’un plateforme web sécurisé avec React/Redux alimenté par un api Laravel, en étroite collaboration avec le chef du projet et l’équipe du backend.</li>
                </ul>
            </>
        ),
    },
    {
        duration: "2022",
        company: "Iteam-$",
        website: "https://www.facebook.com/iTeam.Community-100083660835154/",
        position: "Membre",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <p className="font-bold mb-2">Thème: Challenger les applications de transferts existantes (ex: challenger Xender)</p>
                <p className="mb-2">Développement de solution logiciel permettant de transferer des fichiers et les récuperer sur differentes plateformes. Facebook Messenger, sur application mobile ou sur le site web.</p>
                <p className="mb-2">Assignation: Gestion d’upload et download des fichiers.</p>
            </>
        ),  
    },
    {
        duration: "2022 [3 mois]",
        company: "IT Builder",
        website: "https://www.linkedin.com/company/itbmx",
        position: "Alternant Intégrateur web",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                Creation d’interface UI conforme à la maquette dans un projet Symphony.

            </>
        ),
    },
    {
        duration: "2021 - Présent",
        company: "ESTI",
        website: "https://esti.mg",
        position: "Etude en Intégration et Développement d'Application.",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <p className="mb-2">En cours d'obtention du diplôme de Licence.</p>
            </>
        ),
    },
    {
        duration: "Octobre 2020 - Décembre 2020",
        company: "Univers Informatique",
        website: "https://www.facebook.com/profile.php?id=100082991029410",
        position: "Stage de découverte",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <ul className="list-disc list-inside flex flex-col gap-4">
                    <li>Effectuer une stage de découverte dans la centre de formation en information et gestion Univers Informatique. Suivi de cours en algorithme.</li>
                    <li>En tant qu'aide-formateur, accompagner des élèves en informatique bureautique et en programmation de site web statique avec HTML/CSS.</li>
                </ul>
            </>
        ),
    },
    {
        duration: "2020",
        company: "Programme SESAME",
        website: "https://programme-sesame.mg",
        position: "Boursier",
        status: 6, // according to software life cycle index, see: src/datas/software-life-cycle.data.js,
        points: (
            <>
                <p className="mb-2">Bénéficiaire d'accompagnement socio-éducatif et professionnel par le Programme SESAME, de passage à l'année préparatoire après l'obtention du baccalauréat puis dans un foyer proche de l'Etablissement Supérieure financé par le Programme SESAME, ainsi que les frais d'étude universtaire.</p>
            </>
        ),
    },
];
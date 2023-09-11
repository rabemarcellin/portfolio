import { MdFavorite } from 'react-icons/md';
import Marquee from "react-fast-marquee"
import { FaBootstrap, FaGit, FaGithub, FaHtml5, FaLaravel, FaLinux, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaWindows } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsswizardry, SiExpress, SiFastapi, SiJavascript, SiJquery, SiMongodb, SiMysql, SiOracle, SiPycharm, SiSqlite, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import cvPdf from "../../assets/CV.pdf"

export default function Skills() {
    
    const columns = [
        // web
        [
            {
                lang: "HTML",
                icon: <FaHtml5 />
            },
            {
                lang: "CSS",
                icon: <SiCsswizardry />
            },
            {
                lang: "Vanilla JS",
                icon: <SiJavascript />
            },
            {
                lang: "React",
                icon: <FaReact />
            },
            {
                lang: "React Native",
                icon: <TbBrandReactNative />
            },
            
            {
                lang: "Sass",
                icon: <FaSass />
            },
            {
                lang: "Bootstrap",
                icon: <FaBootstrap />
            },
            {
                lang: "Tailwindcss",
                icon: <SiTailwindcss />
            },
            {
                lang: "jQuery",
                icon: <SiJquery />
            },
            {
                lang: "Php",
                icon: <FaPhp />
            },
            {
                lang: "Laravel",
                icon: <FaLaravel />
            },
        ],
        // api / script / database
        [
            
            {
                lang: "Node.js",
                icon: <FaNodeJs />
            },
            {
                lang: "Express",
                icon: <SiExpress />
            },
            {
                lang: "FastAPI",
                icon: <SiFastapi />
            },
            {
                lang: "TypeScript",
                icon: <SiTypescript />
            },
            {
                lang: "Python",
                icon: <FaPython />
            },
            {
                lang: "Language C",
                icon: <SiC />
            },
            {
                lang: "C++",
                icon: <SiCplusplus />
            },
            {
                lang: "MySQL",
                icon: <SiMysql />
            },
            {
                lang: "Oracle",
                icon: <SiOracle />
            },
            {
                lang: "MongoDB",
                icon: <SiMongodb />
            },
            {
                lang: "SQLite",
                icon: <SiSqlite />
            },
            {
                lang: "Git",
                icon: <FaGit />
            },
            {
                lang: "Github",
                icon: <FaGithub />
            },
            {
                lang: "Windows",
                icon: <FaWindows />
            },
            {
                lang: "Linux",
                icon: <FaLinux />
            },
        ]
    ]
    return (
        <div id="skills">
            <div className="mt-40 mb-10 flex flex-col justify-center items-center">
                <div className="text-center md:flex gap-4 items-center">
                    <h1 className='py-4 md:py-0'>À la recherche d'un développeur web ?</h1>
                    <a href={cvPdf} target='_blank' className="shadow-xl shadow-gray-400 bg-gray-500 text-white py-2 px-4 active:translate-x-1 text-sm">Télécharger mon CV</a>
                </div>
            </div>
            <div className='w-[75vw] mx-auto overflow-hidden'>
                {
                    columns.map((column, columnIndex) => {
                    
                        return (   
                            <div className="flex font-title text-2xl text-gray-600 my-10">
                                    <Marquee autoFill key={columnIndex} direction={columnIndex % 2 === 0 ? "left" : "right"}>
                                        {column.map(({lang, icon}, index) => (
                                        
                                            <div key={index} className="flex items-center justify-center md:w-[25vw]">
                                                <div className='mx-4'>{lang}</div>
                                                <div>{icon}</div>
                                            </div>
                                        ))}
                                    </Marquee>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}

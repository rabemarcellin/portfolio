import { MdFavorite } from 'react-icons/md';
import Marquee from "react-fast-marquee"
import { FaBootstrap, FaGit, FaGithub, FaHtml5, FaLaravel, FaLinux, FaNode, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaWindows } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsswizardry, SiExpress, SiFastapi, SiJavascript, SiJquery, SiMongodb, SiMysql, SiOracle, SiPycharm, SiSqlite, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';


const Card = ({ skill }) => {
    return (
        <div className="carousel carousel--card">
            <div className="flex justify-between mb-4">
                <div>
                    <skill.Logo size={100} className="text-center" />
                </div>
                <div>
                    <div className="flex items-center">
                        {skill.frequentlyUse && (
                            <MdFavorite size={24} className="text-red-500" />
                        )}
                        {skill.topics.map((Each, index) => (
                            <Each key={skill.name[index] + 'topic'} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-44 overflow-auto">
                <ul className="leading-7 list-disc pl-8 pr-2">
                    {skill.skills.map((each, index) => (
                        <li
                            key={index + each}
                            dangerouslySetInnerHTML={{ __html: each }}
                        />
                    ))}
                </ul>
            </div>
            <div className="border flex flex-wrap mt-4 justify-center gap-1 rounded-lg p-2 my-2">
                {skill.packagesRelatedLogo.map((Each, index) => (
                    <Each
                        className="text-gray-500"
                        key={
                            skill.packagesRelatedLogo.length +
                            skill.skills[index]
                        }
                    />
                ))}
            </div>
        </div>
    );
};

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
        <div>
            <div className="mt-40 mb-10 flex flex-col justify-center items-center">
                <div className="flex gap-4 items-center">
                    <h1>À la recherche d'un développeur web ?</h1>
                    <button className="shadow-xl shadow-gray-400 bg-gray-500 text-white py-2 px-4 active:translate-x-1 text-sm">Télécharger mon CV</button>
                </div>
            </div>
            <div className='w-[75vw] mx-auto overflow-hidden'>
                {
                    columns.map((column, columnIndex) => {
                    
                        return (   
                            <div className="flex font-title text-2xl text-gray-600 my-10">
                                    <Marquee autoFill key={columnIndex} direction={columnIndex % 2 === 0 ? "left" : "right"}>
                                        {column.map(({lang, icon}, index) => (
                                        
                                            <div key={index} className="flex items-center justify-center w-[20vw]">
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

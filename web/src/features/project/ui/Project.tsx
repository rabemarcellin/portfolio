import { useState } from "react";
import softwareLifeCycle from "@/store/datas/software-life-cycle";
import projects from "@/store/datas/projects";
import Linked from "@/components/Linked";

import { PARCOURS } from "@/features/parcours/store/constant";
import { useTranslation } from "react-i18next"
import { HiExternalLink } from "react-icons/hi";

type Project = typeof projects[number]

export default function Project() {
    const { t } = useTranslation()
    const [selectedProject, setSelectedProject] = useState<typeof PARCOURS[number] | null>(null)


    return (
        <Linked id="parcours" className='py-4 md:py-8 dark:bg-neutral-900 dark:text-white'>


            <div className=" px-4">
                <div className='h-fit mx-auto max-w-5xl mb-20 md:mb-0 md:h-[30vh] flex justify-center items-center'>
                    <div className='w-full'>
                        {/* <h2 className='text-sm lg:text-base italic my-4 underline text-gray-500 dark:text-gray-300 font-light' >A propos de moi</h2> */}
                        <p className='text-xl lg:text-3xl leading-relaxed dark:text-white'>
                            Je suis un développeur full stack passionné et qui baigne dans le développement d'application web. <br />
                            <span className='text-base lg:text-lg text-slate-600 dark:text-slate-400'>Situé à Antananarivo, Madagascar. 🇲🇬</span>
                        </p>
                    </div>
                </div>
                <h6 className="title font-medium! text-title text-2xl! md:title--center mb-4! md:mb-8! max-w-5xl mx-auto">{t("parcours-title")}</h6>
                <div className="project__dashboard">
                    <div className="project__dashboard__table">
                        {softwareLifeCycle.map(step => (
                            <div key={`software-life-cycle-${step.name}`}>
                                <div className="backdrop-blur-sm z-50  overflow-hidden whitespace-nowrap text-center p-2 opacity-50">
                                    {t(step.name)}
                                </div>
                                <div className="flex justify-center">
                                    <div className={`w-4 h-4 rounded-full bg-[${step.color}]`} style={{ background: step.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 left-0 pt-20">
                        {PARCOURS.map(project => (
                            <div key={`project-table-item-${project.position}`}
                                className='project__card'
                                onMouseEnter={() => setSelectedProject(project)}
                                onMouseLeave={() => setSelectedProject(null)}
                                style={{
                                    transform: `translateX(${(10 * (selectedProject === project ? 1 : project.status)) - 10}%)`
                                }}
                            >
                                <div className="flex justify-between items-center my-4">
                                    {/* <div>
                                        <a href={project.website} target="_blank">
                                            <ShowIcon name='fa-github' />
                                        </a>
                                    </div> */}

                                    <div className="flex gap-4 items-center">
                                        <div>{project.duration}</div>
                                        {/* <div className="text-xs font-title my-2">
                                            status
                                        </div>
                                        <div>
                                            <div className="w-4 h-4 rounded-full bg-blue-500" style={{
                                                background: softwareLifeCycle.find(lifeCycleItem => lifeCycleItem.index === project.status)?.color || "inherit"
                                            }}></div>
                                        </div> */}
                                    </div>
                                </div>
                                <h1 className="font-medium  text-2xl! text-title">{project.position}</h1>
                                <p className="project__card__description">
                                    {project.points}
                                </p>
                                {project.website && (
                                    <div>
                                        {/* <a href={project.website} target="_blank" className="text-sm  underline">Voir le site</a> */}
                                        <a href={project.website} target="_blank" className="flex justify-en h-fit text-nowrap">
                                            <div className="text-sm w-fit p-2 my-4 text-center shadow rounded-xl text-white/80 flex gap-2 items-center hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white/15 justify-end">
                                                {project.company}
                                                <HiExternalLink />
                                            </div>
                                        </a>
                                    </div>
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Linked>

    );
}

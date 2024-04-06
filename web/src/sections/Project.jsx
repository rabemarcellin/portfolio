import React, { useState } from "react";
import ShowIcon from "../components/ShowIcon";
import softwareLifeCycle from "../datas/software-life-cycle.data";
import projects from "../datas/projects.data";
import Linked from "../components/Linked";
import './Project.css'
import { useTranslation } from "react-i18next"

export default function Project() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  

    return (
    <Linked id="project" className='py-4 md:py-8'>
      <div className="max-w-5xl mx-auto px-4">
        <h6 className="title md:title--center mb-8">{t("project-title")}</h6>
        <div className="project__dashboard">
          <div className="project__dashboard__table">
            {softwareLifeCycle.map(step => (
            <div>
              <div key={`software-life-cycle-${step.name}`} className="backdrop-blur z-50  overflow-hidden whitespace-nowrap text-center p-2 opacity-50">
                {t(step.name)}
              </div>
              <div className="flex justify-center">
                <div className={`w-4 h-4 rounded-full bg-[${step.color}]`} style={{background: step.color}}></div>
              </div>
            </div>
            ))}
          </div>    

          <div className="absolute top-0 left-0 pt-20">
            {projects.map(project => (
              <div key={`project-table-item-${project.name}`} 
                className='project__card'
                 onMouseEnter={() => setSelectedProject(project)}
                 onMouseLeave={() => selectedProject(null)}
                 style={{
                  transform: `translateX(${(14.2*(selectedProject === project ? 1 : project.status)) - 14.2}%)`
                }}
              >
                <h1 className="font-bold text-lg md:text-xl">{project.name}</h1>
                <p className="project__card__description">
                  {t(project.description)}
                </p>
                {project.website && (
                  <div>
                    <a href={project.website} target="_blank" className="text-sm  underline">Voir le site</a>
                  </div>
                )}
                <div className="flex justify-between items-center my-4">
                  <div>
                    <a href={project.codeRepositoryLink} target="_blank">
                      <ShowIcon name='fa-github' />
                    </a>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <div className="text-xs font-title my-2">
                      status 
                    </div>
                    <div>
                      <div className="w-4 h-4 rounded-full bg-blue-500" style={{
                        background: softwareLifeCycle.find(lifeCycleItem => lifeCycleItem.index === project.status).color
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Linked>

  );
}

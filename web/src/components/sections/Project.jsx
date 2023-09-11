import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg';
import bgCurveDown from "../../assets/curved-down.svg"
import bgCurve from "../../assets/curved-bg.svg"

import { FaGithub } from 'react-icons/fa';

const datas = [
  {
    index: 1,
    projectName: 'ny-anio',
    desc: 'Application gestion des tâches faite avec Reactjs et Redux, tailwindcss.',
    githubUrl: "https://github.com/rabemarcellin/ny-anio",
    prodLink: "https://nyanio.netlify.app",
  },
  {
    index: 2,
    projectName: 'didy-folo',
    desc: 'Site vitrine dix-commandements de Dieu.',
    githubUrl: "https://github.com/rabemarcellin/didy-folo",
    prodLink: "https://marcellinrabe.github.io/didy-folo",
  },
  {
    index: 3,
    projectName: 'react-page-template',
    desc: "Un template de landing page d'une application réseau social, faite avec React js et tailwindcss",
    githubUrl: "https://github.com/rabemarcellin/react-page-template",
    prodLink: "https://marcellinrabe.github.io/react-page-template",
  },
]

const ProjectDesc = ({projectName, desc, githubUrl, prodLink}) => {
  const [showDropdown, setDropdownVisible] = useState(false)

  return (
  <div className="p-4 w-full">
    <div className='h-[50vh] flex items-center justify-center relative rounded border shadow-md hover:shadow-2xl transition duration-500 ease-in-out w-full p-4 bg-white'
    >
      <div className='relative z-10 p-2 h-full flex flex-col items-center justify-center'
      onMouseEnter={() => {
        setDropdownVisible(true)
      }}
      
      onMouseLeave={() => {
        setDropdownVisible(false)
      }}>
        <button className="text-2xl mb-2 text-start">{projectName}</button>
        <div className={`${showDropdown ? "": "hidden"} transition duration-500 border shadow-lg absolute left-0 p-2 -bottom-0 rounded-md bg-white w-full text-center`}>
          <div>
            <a href={githubUrl} className='hover:text-gray-600 hover:underline text-gray-500 transition duration-400'>voir sur github</a>
          </div>
          <div>
            {prodLink && <a target='_blank' href={prodLink} className=' hover:text-gray-600 hover:underline text-gray-500 transition duration-400'>aller vers le site</a>}
          </div>
        </div>
        <p className="">
          {desc}
        </p>
      </div>
    </div>
  </div>
)}

export default function Project() {

  return (
    <div id="project" className='bg-dotted'>
        <ReactSVG src={bgCurve} />
        <div className='bg--gray'>
          <div className=' ml-10 mb-20 font-title text-5xl text-cent'>
              Ayer votre impression sur mes travaux ✨
          </div>
          <div>
              <div className='mx-10 text-sm md:grid grid-cols-3'>
                      {
                        datas.map((project, index) => (
                          project.index && (
                            <div key={index}>
                              <ProjectDesc {...project} />
                            </div>
                          )
                            
                          )
                        )
                      }
                <div className="text-center h-[25vh] flex flex-col items-center justify-end mt-20">
                  <h1 className='pb-8'>Voir mes repôts</h1>
                  <a href="https://github.com/rabemarcellin" target='_blank' className='my-4 bg-dotted p-4 shadow-2xl rounded-full animate-bounce'><FaGithub /></a>
                </div>
              </div>
            
          </div>
          
        </div>
        <ReactSVG src={bgCurveDown} />
      </div>
  )
}

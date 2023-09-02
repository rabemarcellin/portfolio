import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { ReactSVG } from 'react-svg';
import bgCurveDown from "../../assets/curved-down.svg"
import bgCurve from "../../assets/curved-bg.svg"
import screenShotNyAnio from "../../assets/nyanio-screenshot.png"
import screenShotDidy10 from "../../assets/didyfolo-screenshot.png"
import screenShotLandingPage from "../../assets/landingpage-screenshot.png"

import ReactPlayer from 'react-player'

import { FaGithub, FaShare } from 'react-icons/fa';
import PcProgram from '../PcProgram';

const datas = [
  {
    index: 1,
    projectName: 'ny-anio',
    desc: 'Application gestion des tâches faite avec Reactjs et Redux, tailwindcss.',
    githubUrl: "https://github.com/rabemarcellin/ny-anio",
    prodLink: "https://nyanio.netlify.app",
    demoUrl: "https://youtu.be/CtQApak1R7I",
    bg: screenShotNyAnio
  },
  {
    index: 2,
    projectName: 'didy-folo',
    desc: 'Site vitrine dix-commandements de Dieu.',
    githubUrl: "https://github.com/rabemarcellin/didy-folo",
    prodLink: "https://marcellinrabe.github.io/didy-folo",
    demoUrl: "https://youtu.be/CtQApak1R7I",
    bg: screenShotDidy10
  },
  {
    index: 3,
    projectName: 'react-page-template',
    desc: "À propos Un modèle de page de destination de réseau social, la création d'applications React Js à partir de vite et tailwindcss.",
    githubUrl: "https://github.com/rabemarcellin/react-page-template",
    prodLink: "https://marcellinrabe.github.io/react-page-template",
    demoUrl: "https://youtu.be/CtQApak1R7I",
    bg: screenShotLandingPage
  },
  {
    index: 4,
    projectName: 'Tanakhael',
    desc: "Tanakhael is a messenger bot that serves bible verses.",
    githubUrl: "https://github.com/rabemarcellin/tanakhael",
    demoUrl: "https://www.youtube.com/watch?v=CCbvmOPfE44",
    bg: screenShotDidy10
  },
]

const ProjectDesc = ({projectName, desc, githubUrl, demoUrl, prodLink, bg, selectProject}) => {
  const [showDropdown, setDropdownVisible] = useState(false)

  return (
  <div className="p-4 w-full">
    <div className='relative shadow-lg hover:shadow-2xl transition duration-500 ease-in-out rounded-lg overflow-hidden w-full py-4'
      onClick={() => {
        selectProject(demoUrl)
        console.log(demoUrl)
      }}
    >
      <div className='absolute top-0 left-0 blur-xl'>
        <img src={bg} alt="ny-anio" className='rounded-lg'/>
      </div>
      <div className="overlay-bg" /> {/* Arrière-plan de superposition */}
      <div className='relative z-10 p-2 h-full flex flex-col items-center justify-center'>
        <button className='text-gray-500 mb-2 text-start'
          onClick={() => {
            setDropdownVisible(!showDropdown)
          }}
        >{projectName}</button>
        <div className={`${showDropdown ? "": "hidden"}  transition duration-500 border shadow-lg absolute left-5 p-2 top-8 rounded-md bg-white w-full h-full`}>
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

  const [selectedProject, setSelectedProject] = useState(datas[0].demoUrl)

  return (
    <div id="project" className='bg-dotted'>
        <ReactSVG src={bgCurve} />
        <div className='bg--gray'>
          <div className='w-2/3 ml-10 mb-20 font-title text-5xl text-cent'>
                Ayer votre impression sur mes travaux ✨
              </div>
          <div className="flex">
              <div className='mx-10 w-1/2 text-sm'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{576: 1, 768: 2}}
                >
                    <Masonry> 
                      {
                        datas.map((project, index) => (
                          project.index && (
                            <div key={index}>
                              <ProjectDesc {...project} selectProject={setSelectedProject} />
                            </div>
                          )
                            
                          )
                        )
                      }
                  </Masonry>
                </ResponsiveMasonry>
                <div className="text-center h-[25vh] flex items-end justify-center">
                  <a href="https://github.com/rabemarcellin" target='_blank' className='my-4 bg-dotted p-4 shadow-2xl rounded-full animate-bounce'><FaGithub /></a>
                </div>
              </div>
              <div className="mx-8 w-1/2">
                <PcProgram>
                  <ReactPlayer url={selectedProject} />
                  </PcProgram>
              </div>
            
          </div>
          
        </div>
        <ReactSVG src={bgCurveDown} />
      </div>
  )
}

import React from 'react'
import { FaBootstrap, FaHtml5, FaNodeJs, FaRegFileCode,FaRegPauseCircle, FaReact } from 'react-icons/fa';
import { SiCsswizardry, SiJavascript, SiRedux } from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsDoorOpen } from "react-icons/bs"
import waveFooter from "../../assets/wave-footer.svg"
import { ReactSVG } from 'react-svg';

export default function Experience() {
  return (
    <div id="experience" className='shadow-lg shadow-white'>
        <div className="h-[25vh] m-10 flex items-end font-title text-5xl">Expériences profesionnels</div>
        <VerticalTimeline lineColor='transparent'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #f3f4f5' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFF', borderColor: "#000" }}
            icon={<BsDoorOpen />}
          >
            <div className='text-sm'>
                À l'écoute de nouvelle opportunité, à la recherche d'alternance
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #f3f4f5' }}
            date="Juin / Juillet 2023"
            dateClassName='timeline__date'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title font-title text-gray-500 text-sm">Développeur React</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">LCOM Corporation</h4>
            <p className="flex gap-4 font-title text-gray-500 items-center">
              React <FaReact />
              Redux <SiRedux />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #f3f4f5' }}
            date="Février 2022 -  Avril 2022"
            dateClassName='timeline__date'
            iconStyle={{ background: 'red', color: '#000' }}
            icon={<SiCsswizardry />}
          >
            <div className='flex justify-between items-center'>
            <h3 className="vertical-timeline-element-title font-title text-gray-500 text-sm">Intégrateur web</h3>
            <h4 className="vertical-timeline-element-subtitle font-title text-sm">Alternance</h4>
            </div>
            <h4 className="vertical-timeline-element-subtitle text-sm">IT Builder</h4>
            <ul className="timeline__work--desc">
                <li>Assister mon mentor sur la partie responsive d'un projet avec boostrap</li>
            </ul>
            <div className="text-sm flex gap-4 font-title text-gray-500 items-center">
              <FaHtml5 />
              <SiCsswizardry />
              boostrap <FaBootstrap />
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid #f3f4f5' }}
            date="Octobre 2020 - Décembre 2020"
            dateClassName='timeline__date'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRegFileCode />}
          >
            <div className='flex justify-between items-center'>
            <h3 className="vertical-timeline-element-title font-title text-gray-500 text-sm">Stagiaire</h3>
            <h4 className="vertical-timeline-element-subtitle font-title text-sm">Stage de découverte</h4>
            </div>
            <h4 className="vertical-timeline-element-subtitle text-sm">Univers Informatique</h4>
            <ul className="timeline__work--desc">
                <li>Découverte et apprentissage des alogithmes et langage statique du web, à savoir html/css</li>
            </ul>
            <div className="text-sm flex gap-4 font-title text-gray-500 items-center">
            <FaHtml5 />
            <SiCsswizardry />
            Algorithmes <FaRegFileCode />
            </div>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaRegPauseCircle />}
          />
        </VerticalTimeline>
        <div className='bg-slate-900'>
          <ReactSVG src={waveFooter} />
        </div>
    </div>
  )
}

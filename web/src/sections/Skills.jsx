import { useState, useEffect } from "react";
import ReactrouterExampleSVG from '../assets/react-router-example.svg'
import ReduxExampleSVG from '../assets/redux-example.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ShowIcon from "../components/ShowIcon";
import techs from "../datas/techs.data";
import IDE from "../components/IDE";
import Linked from "../components/Linked";
import './Skills.css'
import { useTranslation } from "react-i18next"

const codeDemos = [
  {
    id: 0,
    title: "demo-crudredux-title",
    // icons: [SiJavascript, SiRedux],
    icons: ['si-javascript', 'si-redux'],
    illustration: ReduxExampleSVG,
  },
  {
    id: 1,
    title: "demo-reactrouter-title",
    // icons: [SiJavascript, FaReact],
    icons: ['si-javascript', 'fa-react'],
    illustration: ReactrouterExampleSVG,
  },
];

export default function Skills() {
  const { t } = useTranslation()
  const [currentDemo, setCurrentDemo] = useState(codeDemos[0]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentDemo(
        currentDemo.id < codeDemos.length - 1
          ? codeDemos[currentDemo.id + 1]
          : codeDemos.at(0)
      );
    }, 30000);
  }, [currentDemo]);

  return (
    <Linked id="skills">
      <div  className="max-w-5xl mx-auto px-4">
        <div className="my-10">
          <h6 className="title md:title--center">{t("skill-title")}</h6>
          <div className="md:text-center md:my-2">{t("skill-title-details")}</div>
        </div>

        <div>
          <ul className="">
            <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 576: 2, 768: 3}}>       
              <Masonry>
                {techs.map(tech => (
                  <li className="language__item">
                    <div className="flex gap-4 items-center">
                      <div className="">
                        <ShowIcon name={tech.icon} className={`p-2 shadow ${tech.colorAsClass}`} />
                      </div>
                      <div className="font-bold text-xl">
                        {tech.mainTech}
                      </div>
                    </div>
                    
                    {tech.details && (
                      <p className="language__item__details">
                          {t(tech.details)}
                      </p>
                    )}
                  </li>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            
          </ul>
        </div>
      </div>
     
      {currentDemo && (
          <div className=" max-w-5xl px-4 overflow-hidden transition duration-500  mx-auto">
            <h6 className="title">{t("feature-examples")}</h6>
            <div className="m-4 text-center">
              
                  <h1 className="text-base md:text-lg font-bold text-gray-500 dark:text-white/50">
                    {t(currentDemo.title)}
                  </h1>
                  
            </div>
            
              <div className="overflow-hidden">
                <IDE codeSVG={currentDemo.illustration}  />
              </div>
          </div>
      )}
    </Linked>
  );
}

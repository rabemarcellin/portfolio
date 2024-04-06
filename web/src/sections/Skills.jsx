import { useState, useEffect } from "react";
import ReactrouterExampleSVG from '../assets/react-router-example.svg'
import ReduxExampleSVG from '../assets/redux-example.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ShowIcon from "../components/ShowIcon";
import techs from "../datas/techs.data";
import IDE from "../components/IDE";
import Linked from "../components/Linked";


const codeDemos = [
  {
    id: 0,
    title: "Architecture de fonction de CRUD d'un todo avec Redux",
    // icons: [SiJavascript, SiRedux],
    icons: ['si-javascript', 'si-redux'],
    illustration: ReduxExampleSVG,
  },
  {
    id: 1,
    title: "Squelette de navigation de base en utilisant React Router",
    // icons: [SiJavascript, FaReact],
    icons: ['si-javascript', 'fa-react'],
    illustration: ReactrouterExampleSVG,
  },
];

export default function Skills() {
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
      <div  className="max-w-5xl mx-auto">
        <div className="my-10">
          <h6 className="text-5xl font-bold text-center">Mes compétences</h6>
          <div className="text-center my-2">Technologies ou en language de programmation.</div>
        </div>

        <div>
          <ul className="">
            <ResponsiveMasonry columnsCountBreakPoints={{320: 1, 576: 2, 768: 3}}>       
              <Masonry>
                {techs.map(tech => (
                  <li className=" border m-2 rounded-xl bg-white hover:shadow transition duration-300 p-4">
                    <div className="flex gap-4 items-center">
                      <div className="">
                        <ShowIcon name={tech.icon} className={`p-2 shadow ${tech.colorAsClass}`} />
                      </div>
                      <div className="font-bold text-xl">
                        {tech.mainTech}
                      </div>
                    </div>
                    
                    {tech.details && (
                      <p className="mt-8 leading-relaxed">
                          {tech.details}
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
          <div className=" max-w-5xl overflow-hidden transition duration-500  mx-auto">
            <h6 className="text-5xl font-bold my-8">Exemples de fonctionnalite</h6>
            <div className="m-4 text-center">
              
                  <h1 className="text-lg font-bold text-zinc-700">
                    {currentDemo.title}
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

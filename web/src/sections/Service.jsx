import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa";
import { SiExpress, SiFastapi } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import ServiceWorkerSvg from '../assets/service-worker.svg'
import { ReactSVG } from "react-svg";
import ShowIcon from "../components/ShowIcon";
import { serviceDomain, services } from "../datas/service.data";
import Linked from "../components/Linked";


export default function Service() {
  const serviceDescriptions = [
    {
      service: "Application web responsive",
      lang: [FaReact, FaLaravel],
    },
    {
      service: "API Serverless",
      lang: [SiExpress, SiFastapi],
    },
    {
      service: "Application mobile multiplateforme",
      lang: [TbBrandReactNative],
    },
  ];

  return (
    <Linked id="service" className="px-4">
      <div className="max-w-5xl mx-auto">
        <h6 className="text-5xl font-bold text-center my-8">Mes services</h6>
        <div className="md:flex items-center relative">
          <div className="absolute top-0 left-0 md:static w-[400px] mx-auto opacity-20 md:opacity-100 md:w-1/2">
            <ReactSVG src={ServiceWorkerSvg} />
          </div>
          <div className="md:w-1/2 bg-transparent relative z-10">
            <div className="flex gap-4">
              {serviceDomain.map(domain => (
                <div key={`rabemarcellin--service-domain-${domain}`}
                className="bg-slate-50 border shadow hover:border-slate-900 hover:bg-slate-900 hover:text-white py-2 px-8 rounded-xl"
                >{domain}</div>
              ))}
            </div>
            <ul className="leading-loose">
              {services.map(service => (
                <li key={`rabemarcellin--service-list-item-${service}`} className="flex gap-8 my-8 items-center text-gray-500 hover:text-inherit">
                  <ShowIcon name="fa-regCheckCircle" className="text-xs" />
                  <h3 className="text-xl font-bold ">
                    {service}
                  </h3>
                </li>
              ))} 
            </ul>
          </div>
        </div>
      </div>
     
    </Linked>
  );
}

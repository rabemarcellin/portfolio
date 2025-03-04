import ServiceWorkerSvg from "../../../../assets/img/svg/service-worker.svg"
import { ReactSVG } from "react-svg";
import ShowIcon from "../../../../components/ShowIcon";
import { serviceDomain, services } from "../../../../store/datas/service";
import Linked from "../../../../components/Linked";
import './service.css'
import { useTranslation } from "../../../../../node_modules/react-i18next"


export default function Service() {
  const { t } = useTranslation()

  return (
    <Linked id="service">
      <div className="max-w-5xl mx-auto px-4">
        <h6 className="title md:title--center mb-8">{t("service-title")}</h6>
        <div className="md:flex items-center relative">
          <div className="absolute top-0 left-0 md:static w-full mx-auto opacity-20 md:opacity-100 md:w-1/2">
            <ReactSVG src={ServiceWorkerSvg} />
          </div>
          <div className="md:w-1/2 bg-transparent relative z-10">
            <div className="flex flex-wrap justify-center md:justify-normal gap-4">
              {serviceDomain.map(domain => (
                <div key={`rabemarcellin--service-domain-${domain}`}
                className="service__domain__item "
                >{t(domain)}</div>
              ))}
            </div>
            <ul className="">
              {services.map(service => (
                <li key={`rabemarcellin--service-list-item-${service}`} className="service__item">
                  <ShowIcon name="fa-regCheckCircle" className="text-xs" />
                  <h3 className="service__item__text">
                    {t(service)}
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

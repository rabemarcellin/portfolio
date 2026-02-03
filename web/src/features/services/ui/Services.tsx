import ShowIcon from "@/components/ShowIcon";
import { serviceDomain, services } from "@/store/datas/service";
import Linked from "@/components/Linked";
import { useTranslation } from "react-i18next"


export default function Services() {
  const { t } = useTranslation()

  return (
    <Linked id="service">
      <div className="max-w-5xl mx-auto px-4">
        <h6 className="title text-title font-medium! md:title--center mb-8">{t("service-title")}</h6>
        <div className="md:flex items-center relative">
          <div className="md:w-1/2 bg-transparent relative z-10">
            <div className="flex flex-wrap justify-center md:justify-normal gap-4">
              {serviceDomain.map(domain => (
                <div key={`rabemarcellin--service-domain-${domain}`}
                className="service__domain__item "
                >{t(domain)}</div>
              ))}
            </div>
            <ul className="pb-20">
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

import { ReactSVG } from "react-svg";
import cvPdf from "../assets/CV.pdf";
import MeAsImg from '../assets/me-transparent.png'
import BlobSvg from '../assets/blob.svg'
import Linked from "../components/Linked";
import './Profile.css'
import { useTranslation } from 'react-i18next';


export default function Profile() {
  const { i18n, t } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')

  return (
    <Linked id="profile">
      <div className="max-w-5xl mx-auto px-4">
        <div>
          <h6 className="profile__introduce">
            <span className="relative z-10">
              {t("introduce-i-am")}   
            </span>
          <span className="name">
            <span className="relative z-10 pl-4">{t("introduce-i-name")}</span>
          <div className="absolute w-40 md:w-80 -top-20 -right-4 md:-top-40 md:-right-20">
            <ReactSVG src={BlobSvg} className="blur"/>
          </div>
          </span>
          <span className="relative z-10">, {t("introduce-i-utility")}</span>
           </h6>
        </div>

        <div className="flex justify-center items-center p-4">
          <div className="profile__image__cadre">
              <img src={MeAsImg} alt="" className="w-full h-full rounded-3xl" />
              <div className="profile__image__bubble profile__image__bubble--top-left">
                <div className="profile__bubble__text">Xano/Bubble</div>
              </div>
              <div className="profile__image__bubble profile__image__bubble--bottom">
                <div className="profile__bubble__text">React/Node.js</div>
              </div>
              <div className="profile__image__bubble profile__image__bubble--top-right">
                <div className="profile__bubble__text">Developpeur web</div>
              </div>
            </div>
          </div>
      </div>
    </Linked>
  );
}

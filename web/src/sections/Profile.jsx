import { ReactSVG } from "react-svg";
import MeAsImg from "../assets/img/rabemarcellin.jpg";
import BlobSvg from "../assets/blob.svg";
import Linked from "../components/Linked";
import "./Profile.css";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { i18n, t } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')

  return (
    <Linked id="profile">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <div className="order-last md:order-first">
            <h6 className="profile__introduce text-center md:text-start mt-8 md:mt-0">
              <div className="name">
                <span className="relative z-10 pl-4 drop-shadow-lg">
                  {t("introduce-i-name")}
                </span>
                <div className="hidden md:block absolute w-40 md:w-80 -top-20 right-10 md:-top-40 md:right-48">
                  <ReactSVG src={BlobSvg} className="blur" />
                </div>
              </div>
              <p className="relative z-10">{t("introduce-i-utility")}</p>
            </h6>
          </div>

          <div className="order-first md:order-last flex justify-center items-center p-4">
            <div className="profile__image__cadre">
              <img src={MeAsImg} alt="" className="w-full h-full rounded-3xl" />

              <div className="profile__image__bubble profile__image__bubble--bottom">
                <div className="profile__bubble__text">React/Node.js</div>
              </div>
              <div className="profile__image__bubble profile__image__bubble--top-right">
                <div className="profile__bubble__text">Developpeur web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Linked>
  );
}

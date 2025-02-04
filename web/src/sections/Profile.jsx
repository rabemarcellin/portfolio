import { ReactSVG } from "react-svg";
import { TypeAnimation } from 'react-type-animation';
import MeAsImg from "../assets/img/rabemarcellin.png";
import BlobSvg from "../assets/blob.svg";
import Linked from "../components/Linked";
import "./Profile.css";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { i18n, t } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')

  const myPosts = ["React", "Node", "Python"]
  return (
    <Linked id="profile">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <div className="order-first flex justify-center items-center p-4">
            <div className="profile__image__cadre">
              <img src={MeAsImg} alt="" className="w-full h-full rounded-3xl" />

             {/*  <div className="profile__image__bubble profile__image__bubble--bottom">
                <div className="profile__bubble__text">React/Node.js</div>
              </div>
              <div className="profile__image__bubble profile__image__bubble--top-right">
                <div className="profile__bubble__text">Developpeur web</div>
              </div> */}
            </div>
          </div>

          <div className="order-last md:order-first">
            <h6 className="profile__introduce text-center justify-center md:text-start mt-8 md:mt-0">
              <div className="name mb-2">
                <span className="relative z-10 drop-shadow-lg dark:text-white text-center md:text-start">
                  {t("introduce-i-name")}
                </span>
                <div className="hidden md:block absolute w-40 md:w-80 -top-20 right-10 md:-top-40 md:right-48">
                  <ReactSVG src={BlobSvg} className="blur transition-[fill] duration-100 fill-slate-200 dark:fill-slate-700" />
                </div>
              </div>
              <p className="relative z-10 text-5xl md:text-7xl text-gray-700 dark:text-gray-300">
                <div className="text-2xl md:text-4xl text-gray-500 dark:text-gray-6500 drop-shadow-lg drop-shadow-white">
                  {t("introduce-i-utility")}
      
                </div>

              <TypeAnimation
                sequence={myPosts.flatMap(post => [post, 1000])}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                className="text-start md:text-9xl text-7xl inline-block"
              />

              </p>
            </h6>
          </div>
        </div>
        <div className="border-b border-slate-400 dark:border-gray-700 pt-5"></div>
      </div>
    </Linked>
  );
}

import Contact from "../Contact";
import ShowIcon from "../../../../components/ShowIcon";
import Linked from "../../../../components/Linked";
import "./footer.css";
import { useTranslation } from "../../../../../node_modules/react-i18next";
import cvPdf from "../../../../assets/cv/CV.pdf";

export default function () {
  const { t } = useTranslation();

  return (
    <Linked id="contact" className="footer">
      <div className="max-w-5xl mx-auto px-4">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/2">
            <div className="break-words ">
              <div className="site-details md:grid gap-4 leading-6 md:leading-10">
                <div>
                  <div className="mt-8 mb-2 font-bold text-lg md:text-2xl">
                    {t("contact")}
                  </div>
                  <ul className="footer__contacts">
                    <li className="hover:font-bold transition duration-500">
                      +261 38 77 051 95
                    </li>
                    <li className="hover:font-bold transition duration-500">
                      +261 32 84 133 71
                    </li>
                    <li>
                      <a
                        href="mailto:marcellinr.rabe@gmail.com"
                        className="hover:font-bold transition duration-500"
                      >
                        marcellinr.rabe@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-lg md:text-2xl mt-8 mb-2">
                    {t("social-networks")}
                  </div>
                  <ul className="">
                    <li className="footer__card__social footer__card__social--linkedin">
                      <a
                        href="https://www.linkedin.com/in/marcellinrabe/"
                        className="transition duration-300 flex gap-4 items-center justify-between"
                      >
                        <ShowIcon
                          name="fa-linkedin"
                          className="icon icon--linkedin"
                        />
                        <div className="leading-normal">
                          <div className="h-fit">RABE Marcellin</div>
                          <div className="social__name">Linkedin</div>
                        </div>
                      </a>
                    </li>

                    <li className="footer__card__social footer__card__social--facebook">
                      <a
                        href="https://www.facebook.com/marcellinr.rabe"
                        className="transition duration-300 flex gap-4 items-center justify-between"
                      >
                        <ShowIcon
                          name="fa-facebook"
                          className="icon icon--facebook"
                        />
                        <div className="leading-normal">
                          <div className="h-fit">RABE Marcellin</div>
                          <div className="social__name">Facebook</div>
                        </div>
                      </a>
                    </li>

                    <li className="">
                      <a
                        href={cvPdf}
                        className="transition duration-300 flex gap-4 items-center"
                      >
                        <div className="leading-normal w-full text-center bg-black/50 text-white border dark:border-none shadow-sm dark:bg-slate-600 rounded-lg py-2 px-8">
                          <div className="">{t("download-my-cv")}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Contact />
          </div>
        </div>

        <div className="text-center py-8">
          <span>Copyright © 2023-24 RABE Marcellin. Tous droits réservés.</span>
        </div>
      </div>
    </Linked>
  );
}

import Linked from "@/components/Linked";
import { useTranslation } from "react-i18next";
import cvPdf from "@/assets/cv/CV.pdf";
import ContactUs from "@/features/contact/ui/ContactUs";
import { BsFacebook, BsLinkedin, BsWhatsapp  } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";

export default function LandingPageFooter() {
  const { t } = useTranslation();

  return (
    <Linked id="contact" className="footer">
      <div className="max-w-5xl mx-auto px-4">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/2">
            <div className="break-words">
              <div className="site-details md:grid gap-4 leading-6 md:leading-10">
                <div>
                  <div className="mt-8 mb-2 font-medium text-title text-sm md:text-base">
                    {t("contact")}
                  </div>
                  <ul className="footer__contacts">
                    <li className="transition duration-500 flex items-center gap-2">
                        <BsWhatsapp size={20} className="rounded-full" />
                      +261 38 77 051 95
                    </li>
                    {/* <li className="transition duration-500">
                      +261 32 84 133 71
                    </li> */}
                    <li>
                      <a
                        href="mailto:marcellinr.rabe@gmail.com"
                        className="transition duration-500 flex items-center gap-2"
                      >
                        <TbBrandGmail size={20} className="rounded-full" />
                        marcellinr.rabe@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-title text-sm md:text-base mt-8 mb-2">
                    {t("social-networks")}
                  </div>
                  <ul className="flex gap-2 flex-wrap mb-20 md:mb-0">
                    <li className="footer__card__social footer__card__social--linkedin">
                      <a
                        href="https://www.linkedin.com/in/marcellinrabedev/"
                        target="_blank"
                        className="transition duration-300 flex gap-4 items-center justify-between"
                      >
                        
                        <div className="leading-normal pl-2 py-2">
                          <div className="h-fit">RABE Marcellin</div>
                          <div className="social__name">Linkedin</div>
                        </div>
                            <BsLinkedin className="rounded-full" size={40} />
                      </a>
                    </li>

                    <li className="footer__card__social footer__card__social--facebook">
                      <a
                        href="https://www.facebook.com/rabemarcellin"
                        target="_blank"
                        className="transition duration-300 flex gap-4 items-center justify-between"
                      >
                       
                        <div className="leading-normal pl-2 py-2">
                          <div className="h-fit">RABE Marcellin</div>
                          <div className="social__name">Facebook</div>
                        </div>
                        <BsFacebook size={40} className="rounded-full" />
                      </a>
                    </li>

                    <li className="">
                      <a
                        href={cvPdf}
                        target="_blank"
                        className="transition duration-300 flex gap-4 items-center"
                      >
                        <div className="leading-normal text-sm w-full text-center shadow hover:shadow-none hover:bg-slate-100 dark:hover:text-white bg-neutral-800 dark:hover:bg-neutral-700 rounded-full py-2 px-8">
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
            <ContactUs />
          </div>
        </div>

        <div className="text-center py-8">
          <span>Copyright © 2023-26 RABE Marcellin. Tous droits réservés.</span>
        </div>
      </div>
    </Linked>
  );
}

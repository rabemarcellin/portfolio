import React from "react";
import SocialLink from "./SocialLink";

export default function () {
  return (
    <div id="footer" className="max-w-5xl mx-auto">
      <div className="px-10 break-words flex justify-center ">
        <div className="flex mt-20">
          <div className="site-details grid grid-cols-2 md:grid-cols-4 gap-20 leading-10">
            <div>
              <span className="font-title text-sm">Contacts</span>
              <ul className="p-0 text-zinc-900">
                <li className="hover:text-blue-500 transition duration-500">
                  038 77 051 95
                </li>
                <li className="hover:text-blue-500 transition duration-500">
                  032 84 133 71
                </li>
                <li>
                  <a
                    href="mailto:marcellinr.rabe@gmail.com"
                    className="hover:text-blue-500 transition duration-500"
                  >
                    marcellinr.rabe@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-title text-sm">En recherche</span>
              <ul className="p-0 text-zinc-900">
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    stage/alternance
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    nouvelle opportunité
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-title text-sm">Plateforme social</span>
              <ul className="p-0 text-zinc-900">
                <li>
                  <a
                    href="https://www.linkedin.com/in/marcellinrabe/"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/marcellinr.rabe"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid justify-center my-2">
              <SocialLink />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 font-monospac text-sm font-bold">
        <span>Copyright © 2023-24 RABE Marcellin. Tous droits réservés.</span>
      </div>
    </div>
  );
}

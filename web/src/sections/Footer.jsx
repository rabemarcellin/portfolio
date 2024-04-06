import React from "react";
import { Contact } from ".";
import ShowIcon from "../components/ShowIcon";
import Linked from "../components/Linked";

export default function () {
  return (
    <Linked id="contact" className="shadow bg-white">
    <div  className="max-w-5xl mx-auto">
      <div className="md:flex md:gap-8">
        <div className="md:w-1/2">
        <div className="break-words ">
          <div className="site-details md:grid gap-4 leading-10">
            <div>
              <div className="my-4 font-bold text-2xl">Contacts</div>
              <ul className="p-0 text-zinc-900">
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
              <span className="font-ttle font-bold text-2xl">Plateforme social</span>
              <ul className="p-0 text-zinc-900">
                <li className="bg-white w-fit hover:bg-[#0070B5] hover:text-white border shadow rounded-xl py-2 pl-2 pr-8 my-2">
                  <a
                    href="https://www.linkedin.com/in/marcellinrabe/"
                    className="transition duration-300 flex gap-4 items-center"
                  >
                    <ShowIcon name='fa-linkedin' className="text-[#0070B5] hover:hover:bg-[#0070B5] hover:text-white" />
                    <div className="leading-normal">
                      <div className="h-fit">RABE Marcellin</div>
                      <div className="text-xs text-gray-500">
                      Linkedin
                      </div>
                    </div>
                  </a>
                </li>

                

                <li className="bg-white w-fit hover:bg-[#4267B2] hover:text-white border shadow rounded-xl py-2 pl-2 pr-8 my-2">
                  <a
                    href="https://www.facebook.com/marcellinr.rabe"
                    className="transition duration-300 flex gap-4 items-center"
                  >
                    <ShowIcon name='fa-facebook'className="text-[#4267B2] hover:hover:bg-[#4267B2] hover:text-white" />
                    <div className="leading-normal">
                      <div className="h-fit">RABE Marcellin</div>
                      <div className="text-xs text-gray-500">
                        Facebook
                      </div>
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

import React from 'react';
import { ReactSVG } from 'react-svg';
import SocialLink from './SocialLink';
import { Contact } from './sections';
import curveDownFooter from "../assets/wave-footer-down.svg"

export default function () {
    return (
        <div id="footer" className="pt-0">
            <div className='flex justify-center bg-slate-900 text-white'>
                <div className="flex -rotate-12 bg-slate-900 text-white">
                    <div className="site-details grid grid-cols-2 md:grid-cols-4 gap-20 leading-10">
                        <div>
                            <span className="font-title text-sm">Contacts</span>
                            <ul className="p-0 text-gray-400">
                                <li>034 93 946 98</li>
                                <li>marcellinr.rabe@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-title text-sm">En recherche</span>
                            <ul className="p-0 text-gray-400">
                                <li>alternance</li>
                                <li>nouvelle opportunité</li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-title text-sm">Plateforme social</span>
                            <ul className="p-0 text-gray-400">
                                <li>Linkedin</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div className="grid justify-center my-2">
                <SocialLink />
                </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
            <ReactSVG src={curveDownFooter} />

            <div className='w-1/2 mx-auto mb-20'>
                <Contact />
            </div>

            <div className="text-center py-10 bg-slate-800 text-white">
                <span>
                    Copyright © 2023 RABE Marcellin. Tous droits réservés.
                </span>
            </div>
            </div>
          
        </div>
    );
}

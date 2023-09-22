import React from 'react';
import { ReactSVG } from 'react-svg';
import SocialLink from './SocialLink';
import { Contact } from './sections';
import curveDownFooter from "../assets/wave-footer-down.svg"

export default function () {
    return (
        <div id="footer" className="pt-0">
            <div className='px-10 break-words flex justify-center bg-slate-900 text-white'>
                <div className="flex bg-slate-900 text-white mt-20">
                    <div className="site-details grid grid-cols-2 md:grid-cols-4 gap-20 leading-10">
                        <div>
                            <span className="font-title text-sm">Contacts</span>
                            <ul className="p-0 text-gray-400">
                                <li className='hover:text-white transition duration-300'>038 77 051 95</li>
                                <li className='hover:text-white transition duration-300'>032 84 133 71</li>
                                <li>
                                    <a href="mailto:marcellinr.rabe@gmail.com" className='hover:text-white transition duration-300'>marcellinr.rabe@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-title text-sm">En recherche</span>
                            <ul className="p-0 text-gray-400">
                                <li>
                                    <a href="#contact" className='hover:text-white transition duration-300'>alternance</a>
                                </li>
                                <li>
                                    <a href="#contact" className='hover:text-white transition duration-300'>nouvelle opportunité</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="font-title text-sm">Plateforme social</span>
                            <ul className="p-0 text-gray-400">
                                <li>
                                    <a href="https://www.linkedin.com/in/marcellinrabe/" className='hover:text-white transition duration-300'>Linkedin</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/marcellinr.rabe" className='hover:text-white transition duration-300'>Facebook</a>
                                </li>
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

            <div className='px-10 md:px-0 md:w-3/4 xl:w-1/2 mx-auto mb-20'>
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

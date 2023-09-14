import React, { useEffect } from 'react'
import Typewriter from "typewriter-effect"
import { name, bio, offer } from './data'
import { MdNetworkWifi3Bar, MdBattery3Bar, MdCancel } from "react-icons/md"
import { BiVolumeFull, BiWindows, BiSolidMinusCircle } from "react-icons/bi"

export default function PcProgram({children, overflowX}) {

    return (
            <div className="h-full">
                <div className='frame mx-auto'>
                    <div className={`${overflowX ? "overflow-x" : ""} screen flex flex-col`}>
                    {
                            children ?? (
                                <>
                        <div className="menu-bar">
                            <div>Editeur de texte</div>
                            <div>Aog 31 16:21</div>
                            <div className='flex gap-2 items-center'>
                                <div><MdNetworkWifi3Bar size={16} /></div>
                                <div><BiVolumeFull size={16} /></div>
                                <div><MdBattery3Bar size={16} /></div>
                            </div>
                        </div>
                       
                                <div className='title-bar'>
                            <div/>
                            <div className='justify-self-center'>presentation.txt</div>
                            <div className='justify-self-end flex gap-2 items-center'>
                            <div><BiSolidMinusCircle size={16} /></div>
                            <div><BiWindows size={16} /></div>
                            <div><MdCancel size={16} /></div></div>
                        </div>
                        <div className="flex gap-2 px-1 text-white">
                            <div>Fichier</div>
                            <div>Edition</div>
                            <div>Sélection</div>
                        </div>
                        <div className="editor__zone flex-1 bg-slate-200 p-4">
                            <div className="w-[75vw] pr-10 md:pr-20 md:w-full">
                                <Typewriter
                                    onInit={typewriter => {
                                        typewriter
                                            .typeString(name)
                                            .typeString(bio)
                                            .typeString(offer)
                                            .start()
                                    }}
                                />
                            </div>
                        </div> 
                        </> 
                            )
                        }
                         
                    </div>
                </div>  
            </div>
        
    )
}

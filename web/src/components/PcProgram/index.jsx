import React from 'react'
import Typewriter from "typewriter-effect"
import { name, bio, offer } from './data'

export default function PcProgram({children}) {
    return (
            <>
                <div className='frame'>
                    <div className="screen flex flex-col">
                    {
                            children ?? (
                                <>
                        <div className="menu-bar">
                            <div>Editeur de texte</div>
                            <div>Aog 31 16:21</div>
                            <div>barre wifi, son, charge</div>
                        </div>
                       
                                <div className='title-bar'>
                            <div/>
                            <div>presentation.txt - Editeur de texte</div>
                            <div className='justify-self-end'>option</div>
                        </div>
                        <div className="flex gap-2 px-1">
                            <div>Fichier</div>
                            <div>Edition</div>
                            <div>Sélection</div>
                        </div>
                        <div className="editor__zone flex-1 bg-slate-200 rounded-b-lg p-4">
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
                        </> 
                            )
                        }
                         
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-20 h-4 bg-black"></div>
                    <div className="w-40 border-2 border-black" />
                </div>
            </>
        
    )
}

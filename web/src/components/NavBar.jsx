import { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai"


export default function NavBar() {
    const [isTogglerActive, setTogglerStatus] = useState(false)

    useEffect(() => {

        return () => {
                setTogglerStatus(false)
        }
    }, [])
    return (
        <>
            <header className='flex items-center justify-between h-[15vh] bg-white'>
                <div>
                    <a href='#profile' className="self-center font-logo whitespace-nowrap text-2xl font-medium dark:text-white">
                        @marcellinrabe
                    </a>
                </div>
                <div className="block md:hidden" onClick={() => {
                    setTimeout(() => {
                        setTogglerStatus(!isTogglerActive)
                    }, 100)
                }}>
                    <AiOutlineMenu />
                </div>
                <div className="hidden md:block md:w-1/2">
                    <div className='flex gap-4 items-center justify-around'>
                        <a href="#skills" className='text-lg'>Compétences</a>
                        <a href="#project" className="text-lg">Réalisations</a>
                        <a href="#service" className="text-lg">Services</a>
                        <a href="#experience" className="text-lg">Expériences</a>
                        <a href="#contact" className='text-lg'>Contact</a>
                    </div>
                </div>
            </header>
            <div className={`${isTogglerActive ? "": "hidden"} md:hidden rounded-md bg-slate-200 p-2`}>
                <div className="my-2">
                    <a href="#skills" className='text-lg hover:underline'>Compétences</a>
                </div>
                <div className="my-2">
                    <a href="#project" className="text-lg hover:underline">Réalisations</a>
                </div>
                <div className="my-2">
                    <a href="#service" className="text-lg hover:underline">Services</a>
                </div>
                <div className="my-2">
                    <a href="#experience" className="text-lg hover:underline">Expériences</a>
                </div>
                <div className="my-2">
                    <a href="#contact" className='text-lg hover:underline'>Contact</a>
                </div>
            </div>
        </>
    )
}

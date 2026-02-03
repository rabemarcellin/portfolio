import { HiExternalLink } from 'react-icons/hi';
import { PROJECTS } from '@/features/project/store/constant';
import { useTranslation } from 'react-i18next';

type Props = {
    index: number;
    parcours: typeof PROJECTS[number];
}
const ParcoursCard = ({ parcours }: Props) => {
    const { t } = useTranslation();
    return (
        <div

            key={parcours.name}
            className={` w-fit h-fit p-4 rounded-xl mx-auto bg-neutral-800 scale-90 hover:scale-100 transition-all duration-300 ease-in-out`}>
            <div className="bg-neutral-800 p-1 relative min-h-[272px] min-w-[576px]">
                 {
                    parcours.imagePreview && (
                        <img src={parcours.imagePreview} alt={parcours.name} className="w-[576px] h-full object-cover rounded-xl" />

                    )
                 }
                {
                        <div className="absolute bottom-0 left-0 w-fit p-2 flex items-end mx-auto translate-x-[24px] md:-translate-x-[75px]">
                            <div className={`${parcours.imagePreview ? 'text-black' : 'text-white'} backdrop-blur-xl bg-white/25 rounded-xl p-4 `}>
                            <h1 className="text-xl! font-bold">{parcours.name}</h1>
                                <div className="text-sm">{t(parcours.description)}</div>

                                <a href={parcours.website || parcours.codeRepositoryLink} target="_blank" className="flex justify-en h-fit text-nowrap">
                                    <div className="font-semiboldw-fit p-2 my-4 text-center shadow rounded-xl flex gap-2 items-center hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out bg-white/25 justify-end">
                                        Aller voir
                                        <HiExternalLink />
                                    </div>
                                </a>
                            </div>

                        </div>
                   
                }

            </div>

            {/* <div>
                <div className="font-bold my-4 text-white/90">{/* {"</>"} *\/} {parcours.cardSubtitle}</div>
            </div> */}
           




        </div>)
}

export default ParcoursCard
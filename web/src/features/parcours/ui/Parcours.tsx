// // import ConstellationImg from "@/assets/img/constellation.png"



// import Linked from "@/components/Linked";
// import ParcoursCard from "./card/ParcoursCard"
// import { PARCOURS_ITEMS } from "../store/constant"
// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Waypoint } from "react-waypoint";

// const Parcours = () => {
//     const [currentParcours, setCurrentParcours] = useState(0);
//     const { t } = useTranslation();
//     const [activeXScroll, setActiveXScroll] = useState(false);
//     const scrollXRef = useRef<HTMLDivElement>(null);
//     const [allBrowsed, setAllBrowsed] = useState(false);

//     useEffect(() => {
//         const onWheel = (e: WheelEvent) => {
//             if (!activeXScroll) return;
//             const el = scrollXRef.current;
//             if (!el) return;
//             e.preventDefault();
//             el.scrollLeft += e.deltaY;
//         };

//         document.addEventListener("wheel", onWheel, { passive: false });
//         return () => document.removeEventListener("wheel", onWheel);
//     }, [activeXScroll]);

//     return (
//         <Linked id="project" className='py-4 md:py-8 dark:bg-neutral-950'>
//             <>
//                 <h6 className="title font-medium! text-title md:title--center mb-8 mx-auto max-w-5xl">{t("project-title")}</h6>


//                 <div ref={scrollXRef} className=' px-4 relative flex overflow-x-auto overflow-y-visible items-end'>
//                     {
//                         // title: "Mai 2024 - Présent",
//                         // cardTitle: "Constellation Group",
//                         // url: "https://constellation-group.co",
//                         // cardSubtitle: "Développeur React/Typescript",
//                         // cardDetailedText: (
//                         //     <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(consteParcoursHtml) }} />
//                         // ),
//                         // media: {
//                         //     type: 'IMAGE',
//                         //     source: { url: 'image.jpg' }
//                         // },
//                         <>

//                             {PARCOURS_ITEMS.map((parcours, index) => (
//                                 <ParcoursCard key={parcours.title} parcours={parcours} index={index} currentParcours={currentParcours} setCurrentParcours={setCurrentParcours} isLastElement={index === PARCOURS_ITEMS.length - 1} />
//                             ))}
//                         </>

//                     }
//                     <Waypoint
//                         onEnter={() => {
//                             if(!allBrowsed) {
//                             console.log('allBrowsed');
//                             document.body.classList.remove('overflow-hidden');
//                             setActiveXScroll(false);
//                             setAllBrowsed(true);
//                         }

//                         }}
//                         fireOnRapidScroll={true}
//                     >
//                         <div>b</div></Waypoint>


//                 </div>
//                 <Waypoint
//                     onEnter={() => {
//                         console.log('overflow x enter');
//                         setActiveXScroll(true)
//                         document.body.classList.add('overflow-hidden');

//                     }}
//                 ><div>a</div></Waypoint>


//             </>
//         </Linked>
//     )
// }

// export default Parcours

// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Linked from "@/components/Linked";
// import ParcoursCard from "./card/ParcoursCard";
// import { PARCOURS_ITEMS } from "../store/constant";
// import { PROJECTS } from "@/features/project/store/constant";

// const Parcours = () => {
//     const { t } = useTranslation();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [activeXScroll, setActiveXScroll] = useState(false);
//     const scrollXRef = useRef<HTMLDivElement>(null);
//     const isThrottled = useRef(false); // Pour éviter le défilement ultra-rapide

//     useEffect(() => {
//         const onWheel = (e: WheelEvent) => {
//             if (!activeXScroll || !scrollXRef.current) return;

//             const isScrollingDown = e.deltaY > 0;
//             const isScrollingUp = e.deltaY < 0;

//             // 1. Sortie vers le HAUT (si on est à la première slide et qu'on scrolle vers le haut)
//             if (isScrollingUp && currentIndex === 0) {
//                 setActiveXScroll(false);
//                 document.body.style.overflow = "auto";
//                 return;
//             }

//             // 2. Sortie vers le BAS (si on est à la dernière slide et qu'on scrolle vers le bas)
//             if (isScrollingDown && currentIndex === PARCOURS_ITEMS.length - 1) {
//                 setActiveXScroll(false);
//                 document.body.style.overflow = "auto";
//                 return;
//             }

//             // BLOQUER le scroll vertical natif tant qu'on est dans la section
//             e.preventDefault();

//             // 3. Gestion du changement de slide avec "Throttle" (anti-rebond)
//             if (isThrottled.current) return;
//             isThrottled.current = true;

//             let nextIndex = currentIndex;
//             if (isScrollingDown) {
//                 nextIndex = Math.min(currentIndex + 1, PARCOURS_ITEMS.length - 1);
//             } else {
//                 nextIndex = Math.max(currentIndex - 1, 0);
//             }

//             if (nextIndex !== currentIndex) {
//                 setCurrentIndex(nextIndex);
//                 const cardElement = scrollXRef.current.children[nextIndex] as HTMLElement;
                
//                 if (cardElement) {
//                     cardElement.scrollIntoView({
//                         behavior: "smooth",
//                         block: "nearest",
//                         inline: "center"
//                     });
//                 }
//             }

//             // Temps d'attente entre deux slides pour laisser l'animation se finir
//             setTimeout(() => {
//                 isThrottled.current = false;
//             }, 600); 
//         };

//         window.addEventListener("wheel", onWheel, { passive: false });
//         return () => window.removeEventListener("wheel", onWheel);
//     }, [activeXScroll, currentIndex]);

//     // Observer pour capturer le scroll
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActiveXScroll(true);
//                     document.body.style.overflow = "hidden";
//                 }
//             },
//             { threshold: 0.8 } 
//         );

//         if (scrollXRef.current) observer.observe(scrollXRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <Linked id="project" className="py-4 md:py-8 dark:bg-neutral-950 overflow-hidden">
//             <>
//             <h6 className="title font-medium! text-title text-2xl! md:title--center mb-4! md:mb-8! mx-auto max-w-5xl">
//                 {t("project-title")}
//             </h6>

//             <div 
//                 ref={scrollXRef} 
//                 className="px-4 relative flex overflow-x-auto no-scrollbar snap-x snap-mandatory "
//                 style={{ scrollSnapStop: 'always', scrollbarWidth: 'none' }}
//             >
//                 {PROJECTS.map((parcours, index) => (
//                     <div 
//                         key={index} 
//                         className="snap-center flex-shrink-0 flex justify-center px-4"
//                     >
//                         <ParcoursCard 
//                             parcours={parcours} 
//                             index={index} 
//                         />
//                     </div>
//                 ))}
//             </div>
//             </>

//         </Linked>
//     );
// };

// export default Parcours;

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Linked from "@/components/Linked";
import ParcoursCard from "./card/ParcoursCard";
import { PROJECTS } from "@/features/project/store/constant";

const Parcours = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeXScroll, setActiveXScroll] = useState(false);
    const scrollXRef = useRef<HTMLDivElement>(null);
    const isThrottled = useRef(false);
    
    // Pour le support mobile
    const touchStartY = useRef<number | null>(null);

    /**
     * Gère le changement de slide et la libération du scroll global
     */
    const handleNavigation = (direction: 'next' | 'prev') => {
        if (isThrottled.current) return;

        const isLastSlide = currentIndex === PROJECTS.length - 1;
        const isFirstSlide = currentIndex === 0;

        // Sortie de la section vers le BAS
        if (direction === 'next' && isLastSlide) {
            setActiveXScroll(false);
            document.body.style.overflow = "auto";
            return;
        }

        // Sortie de la section vers le HAUT
        if (direction === 'prev' && isFirstSlide) {
            setActiveXScroll(false);
            document.body.style.overflow = "auto";
            return;
        }

        // Calcul du nouvel index
        let nextIndex = currentIndex;
        if (direction === 'next') {
            nextIndex = Math.min(currentIndex + 1, PROJECTS.length - 1);
        } else {
            nextIndex = Math.max(currentIndex - 1, 0);
        }

        if (nextIndex !== currentIndex) {
            isThrottled.current = true;
            setCurrentIndex(nextIndex);

            // Animation de défilement
            const cardElement = scrollXRef.current?.children[nextIndex] as HTMLElement;
            cardElement?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

            // Anti-rebond (throttle)
            setTimeout(() => {
                isThrottled.current = false;
            }, 600);
        }
    };

    useEffect(() => {
        // --- ÉVÉNEMENTS SOURIS (WHEEL) ---
        const onWheel = (e: WheelEvent) => {
            if (!activeXScroll) return;
            e.preventDefault(); // Bloque le scroll vertical de la page
            handleNavigation(e.deltaY > 0 ? 'next' : 'prev');
        };

        // --- ÉVÉNEMENTS TACTILES (MOBILE) ---
        const onTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!activeXScroll) return;
            // Empêche le scroll natif de la page quand on est bloqué sur la section
            if (e.cancelable) e.preventDefault();
        };

        const onTouchEnd = (e: TouchEvent) => {
            if (!activeXScroll || touchStartY.current === null) return;

            const touchEndY = e.changedTouches[0].clientY;
            const diffY = touchStartY.current - touchEndY;

            // Seuil de 50px pour déclencher le changement
            if (Math.abs(diffY) > 50) {
                handleNavigation(diffY > 0 ? 'next' : 'prev');
            }
            touchStartY.current = null;
        };

        // Ajout des listeners
        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, [activeXScroll, currentIndex]);

    // Observer pour activer le mode "Horizontal Lock" quand la section est visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveXScroll(true);
                    document.body.style.overflow = "hidden";
                }
            },
            { threshold: 0.7 } // S'active quand 70% de la section est visible
        );

        if (scrollXRef.current) observer.observe(scrollXRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Linked id="project" className="py-4 md:py-8 dark:bg-neutral-950 overflow-hidden">
            <>
            <h6 className="title font-medium! text-title text-2xl! md:title--center mb-4! md:mb-8! mx-auto max-w-5xl">
                {t("project-title")}
            </h6>

            <div 
                ref={scrollXRef} 
                className="px-4 relative flex overflow-x-hidden no-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none' }}
            >
                {PROJECTS.map((parcours, index) => (
                    <div 
                        key={index} 
                        className="snap-center flex-shrink-0 flex justify-center px-4"
                    >
                        <ParcoursCard 
                            parcours={parcours} 
                            index={index} 
                        />
                    </div>
                ))}
            </div>
            </>
        </Linked>
    );
};

export default Parcours;
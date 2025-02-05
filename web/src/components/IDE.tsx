import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Waypoint } from 'react-waypoint';
import TextVisibilityContext from "../store/contexts/TextVisibiltyContext";

export default function IDE({codeSVG}) {
  const { setIsInvisible } = useContext(TextVisibilityContext)

  return (
    <Waypoint onEnter={() => setIsInvisible(true)} onLeave={() => setIsInvisible(false)} bottomOffset={"85%"}>
      <div className="shadow-sm border-8  border-black flex flex-col bg-[#263238] overflow-hidden  rounded-3xl  text-white w-full">
        <div className="flex flex-1">
          <div className="flex font-monospace text-xs md:text-sm leading-6 overflow-auto h-[75vh] md:h-screen ">
            <ReactSVG src={codeSVG} className="w-full h-full"/>
          </div>
        </div>
      </div>
    </Waypoint>

  );
}

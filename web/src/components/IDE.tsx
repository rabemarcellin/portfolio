import { ReactSVG } from "react-svg";

export default function IDE({codeSVG}: {codeSVG: string}) {

  return (
   
      <div className="shadow-sm border-8  border-black flex flex-col bg-[#263238] overflow-hidden  rounded-3xl  text-white w-full">
        <div className="flex flex-1">
          <div className="flex font-monospace text-xs md:text-sm leading-6 overflow-auto h-[75vh] md:h-screen -skew-2">
            <ReactSVG src={codeSVG} className="w-full h-full"/>
          </div>
        </div>
      </div>

  );
}

import { ReactSVG } from "react-svg";
import cvPdf from "../assets/CV.pdf";
import MeAsImg from '../assets/me-transparent.png'
import BlobSvg from '../assets/blob.svg'
import Linked from "../components/Linked";


export default function Profile() {
  
  return (
    <Linked id="profile">
      <div className="max-w-5xl mx-auto">
        <div>
          <h6 className="text-5xl font-bold text-center leading-relaxed my-10 relative z-10">Je suis 
          <span className="text-white drop-shadow-lg relative">
            <span className="relative z-10 pl-4">Marcellin</span>
          <div className="absolute w-80 -top-40 -right-20">
            <ReactSVG src={BlobSvg} className="blur"/>
          </div>
          </span>
          <span className="relative z-10">, et je suis utile dans la creation d'application web.</span>
           </h6>
        </div>

        <div className="flex justify-center items-center p-4">
          <div className="border shadow w-72 rounded-3xl bg-white relative">
              <img src={MeAsImg} alt="" className="w-full h-full rounded-3xl " />
              <div className="absolute top-0 left-0 -translate-x-3/4 translate-y-2 z-10">
                <div className=" bg-gray-900 text-white font-bold shadow p-2 rounded-xl">Xano/Bubble</div>
              </div>
              <div className="absolute right-0 bottom-0 translate-x-3/4 -translate-y-[250px] z-10">
                <div className="bg-white shadow p-2 rounded-xl border font-bold">React/Node.js</div>
              </div>
              <div className="absolute right-0 bottom-0 -translate-x-3/4 -translate-y-1/2 z-10">
                <div className="bg-slate-50 shadow p-2 rounded-xl border font-bold">Developpeur web</div>
              </div>
            </div>
          </div>
      </div>
    </Linked>
  );
}

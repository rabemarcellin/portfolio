import React from "react";
import { FaCode, FaFolder } from "react-icons/fa";

const Tag = ({ name, parent, children }) => {
  return (
    <div>
      {parent ? (
        <div className="text-blue-300">{`<${name}>`}</div>
      ) : (
        <span className="text-blue-300 font-bol">{`<${name}>`}</span>
      )}

      {parent ? <div className="pl-4">{children}</div> : children}

      {parent ? (
        <div className="text-blue-300 font-bol">{`</${name}>`}</div>
      ) : (
        <span className="text-blue-300 font-bol">{`</${name}>`}</span>
      )}
    </div>
  );
};

export default function IDE() {
  return (
    <div className=" flex flex-col bg-zinc-900 overflow-hidden   rounded-tl-3xl text-white w-full max-w-[992px] h-[95vh]">
      <div className="flex flex-none divide-x p-4 border-b border-zinc-500 bg-zinc-800  first-of-type:ml-0 last-of-type:mr-0">
        <h1 className="font-bold mx-2 ">Projet Presentation</h1>
        <h3 className="px-2 text-sm font-monospace">Fichier</h3>
      </div>
      <div className="flex flex-1">
        <div className="w-72 border-r border-zinc-500 px-4 flex-none bg-zinc-800">
          <div className="flex items-center gap-2 font-bold font-monospace">
            <FaFolder className="w-4" /> Portfolio
          </div>
          <div className="pl-4 border-l">
            <div className="cursor-pointer hover:bg-zinc-700 max-w-max px-1 flex items-center gap-2 font-monospace text-sm">
              <FaCode className="font-normal w-4" /> a-propos.xml
            </div>
          </div>
        </div>
        <div className=" flex overflow-hidden">
          <div className="flex-none m-1 font-monospace text-gray-500">
            {(() => {
              let lineIndicators = [];
              for (let i = 0; i < 8; ++i) {
                lineIndicators.push(i + 1);
              }
              return lineIndicators.map((index) => (
                <div key={`lineIndacator-${index}`}>{index}</div>
              ));
            })()}
          </div>
          <div className="flex-1 overflow-y-auto my-1 font-monospace text-sm leading-6">
            <Tag name="nom">RABE Marcellin</Tag>
            <Tag name="poste">Apprenti Développeur web</Tag>
            <Tag name="petit-mot" parent>
              J'évolue dans le secteur de développement web et je suis motivé à
              donner le meilleure de moi-même pour exceller dans ce domaine, et
              à travers de mes travaux, je veux créer des outils qui aideront le
              quotidien.
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

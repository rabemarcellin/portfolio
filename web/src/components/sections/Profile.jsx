import IDE from "../IDE";
import PcProgram from "../PcProgram";

export default function Profile() {
  return (
    <div>
      {/* <div
        id="profile"
        className="bg-carreaux rounded-xl flex justify-center lg:justify-end"
      >
        <div className="container justify-around">
          <div className="" data-aos-offset="500" data-aos-duration="1500">
            <div className="relative">
              <div className="laptop__table absolute h-[30%] translate-y-[30%] skew-y-0 bottom-0 left-0 rounded-xl" />
              <div className="flex justify-center lg:justify-end items-center">
                <div className="self-end mt-10 mb-20 w-[75vw]">
                  <PcProgram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-end">
        <IDE />
      </div>
    </div>
  );
}

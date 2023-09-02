import PcProgram from '../PcProgram';


export default function Profile() {

    return (
        <div id="profile" className="bg-carreaux rounded-xl">
            <div className="container justify-around">
                <div className="" 
                data-aos-offset="500"
                data-aos-duration="1500">
                    <div>
                        <div className="w-2/3 m-auto mt-28">
                            <PcProgram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

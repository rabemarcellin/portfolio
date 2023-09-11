import PcProgram from '../PcProgram';


export default function Profile() {
    

    return (
        <div id="profile" className="bg-carreaux rounded-xl">
            <div className="container justify-around">
                <div className="" 
                data-aos-offset="500"
                data-aos-duration="1500">
                    <div className='relative'>
                        <div  className='laptop__table absolute h-[30%] translate-y-[30%] skew-y-0 bottom-0 left-0 rounded-xl' />  
                        <div className='flex items-end '>
                            <div className="relative">
                                <div className="absolute-top-0 right-0">
                                    <div className="m-auto mt-28 w-screen h-screen">
                                        <PcProgram />
                                    </div> 
                                </div>
                            </div>
                                
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    );
}

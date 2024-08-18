import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <div className='min-h-screen'>
            <div className="w-full bg-[#EDEEF7] -mt-24 tablet:-mt-24 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0">
                <div className='container mx-auto overflow-x-hidden min-h-screen -mt-4'>
                    <div className="layout lg:mx-24 mx-3">
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20">
                                <div className="relative flex items-center justify-center rounded-[25px]">
                                    <div className="relative ml-2 -mr-2 w-[20rem] h-[15rem] 3xl:h-[22rem] 2xl:h-[20rem] desktop:h-[21rem] laptop:h-[27rem] 3xl:w-[30.2rem] 3xl:ml-36 2xl:w-[23rem] 2xl:ml-28 desktop:w-[26rem] laptop:w-[29rem] desktop:mr-28 desktop:-ml-3 desktop:mt-24 3xl:mt-52 2xl:mt-20 laptop:mt-20">
                                        <LazyLoad height={200} offset={100}>
                                            <img className='rounded-[20px] w-[20rem] h-[15rem] bg-[#257aa8a0] 3xl:h-[22rem] laptop:h-[27rem] 2xl:h-[20rem] desktop:h-[21rem] 3xl:w-[40rem] 2xl:w-[40rem] desktop:w-[27rem] laptop:w-[29rem]' 
                                                src="https://i.ibb.co/j8hKMkL/prographr-team.jpg" 
                                                alt="Prographr team" 
                                            />
                                        </LazyLoad>
                                        <div className="absolute inset-0 bg-[#705FC1] opacity-75 rounded-[20px]"></div>
                                        <img src="/Prographr_Icon_White.svg" alt="Prographr logo" className='absolute top-1/2 w-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    </div>
                                </div>
                                <div className="lg:mb-32 mr-2 desktop:mt-40 laptop:mt-44 3xl:-ml-[8rem] 3xl:mr-[9rem] 2xl:-ml-[9.5rem] desktop:-ml-[9rem] desktop:mr-16 2xl:mr-[11rem] 3xl:mt-80 2xl:mt-44 tablet:ml-6 ml-2">
                                    <h3 className="text-[#2F1C6A] text-lg desktop:text-xl 3xl:text-3xl 2xl:text-xl laptop:text-xl tablet:text-lg tablet:mt-10 font-medium font-roboto tablet:ml-7 ml-2 3xl:mt-4">
                                        Welcome at <strong>Prographr</strong>
                                    </h3>
                                    <p className="mt-10 text-slate-600 font-roboto font-medium 3xl:ml-7 2xl:ml-7 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-7 leading-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm tablet:text-sm text-sm">
                                        Prographr is a pre-made graphic resource site. There is also an option for clients who want to modify the template with their brand identity. We have dedicated team members specialized in specific sectors, can be logo specialists, or print design specialists. Paying a fee per revision any client can modify the template from us. Our team members are ready to assist you as long as the client wants.
                                    </p>
                                    <p className="mt-8 text-slate-600 font-roboto font-medium 3xl:ml-7 2xl:ml-7 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-7 leading-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm tablet:text-sm text-sm">
                                        We are professionals and always think about professional design, and provide professional services. All templates are pre-made for specific businesses and can be used for multipurpose businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
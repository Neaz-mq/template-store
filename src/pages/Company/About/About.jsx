const About = () => {

    return (
        <div className='min-h-screen'>
            <div className="w-full bg-[#EDEEF7]  ">
                <div className='container mx-auto overflow-x-hidden -mt-24 tablet:-mt-24 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0'>
                    <div className="layout lg:mx-24 mx-3 ">
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 h-[60rem] ">
                                <div className="relative flex items-center justify-center rounded-[25px]">
                                    <div className="relative ml-2 -mr-2 w-[20rem] h-[15rem] 3xl:h-[22rem] 2xl:h-[20rem] desktop:h-[21rem] laptop:h-[27rem] 3xl:w-[30.2rem] 3xl:ml-40  2xl:w-[23rem] 2xl:ml-28 desktop:w-[26rem] laptop:w-[29rem] desktop:mr-28 desktop:-ml-3 laptop:ml-16 desktop:-mt-40 3xl:-mt-16 2xl:-mt-24 laptop:-mt-32 ">
                                        <img className='rounded-[20px] w-[20rem] h-[15rem]bg-[#257aa8a0] 3xl:h-[22rem] laptop:h-[27rem] 2xl:h-[21rem]  desktop:h-[20rem] 3xl:w-[40rem] 2xl:w-[40rem] desktop:w-[27rem] laptop:w-[29rem]  ' src="https://i.ibb.co/j8hKMkL/prographr-team.jpg" alt="" />
                                        <div className="absolute inset-0 bg-[#705FC1] opacity-75 rounded-[20px]"></div>
                                        <img src="/Prographr_Icon_White.svg" alt="" className='absolute top-1/2 w-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    </div>
                                </div>
                                <div className="lg:mb-32 mr-2 desktop:mt-40 laptop:mt-32 3xl:-ml-[8rem] 3xl:mr-[9rem] 2xl:-ml-[9.5rem] desktop:-ml-[9rem] desktop:mr-16 2xl:mr-[11rem] 3xl:mt-48 2xl:mt-44 tablet:ml-10 ml-2">
                                    <h3 className="text-[#2F1C6A] text-base desktop:text-xl 3xl:text-3xl 2xl:text-xl laptop:text-lg tablet:text-base font-medium font-roboto pt-5 ml-7">Welcome at <strong>Prographr</strong></h3>
                                    <p className="mt-10 text-slate-600 font-roboto font-medium ml-7 leading-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm tablet:text-sm text-sm">Prographr is a pre-made graphic resource site. There is also an option for clients who want to modify the template with their brand identity. We have dedicated team members specialized in specific sectors, can be logo specialists, or print design specialists. Paying a fee per revision any client can modify the template from us. Our team members are ready to assist you as long as the client wants.</p>
                                    <p className="mt-8 text-slate-600 font-roboto font-medium ml-7 leading-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm tablet:text-sm text-sm">We are professionals and always think about professional design, and provide professional services.All templates are pre-made for specific businesses and can be used for multipurpose businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto overflow-x-hidden '>
                <section className="text-center pb-14 font-roboto">
                    <h3 className="lg:text-3xl text-2xl text-[#2F1C6A] font-medium font-roboto pt-14 mb-36">We are <strong>Prographr's</strong></h3>
                    <div className='container mx-auto'>
                        <div className='bg-[#EDEEF7] w-[21rem] h-[15rem] ml-4 -mt-28 3xl:w-[75rem] 2xl:w-[65rem] desktop:w-[60rem] laptop:w-[55rem] tablet:w-[45rem] desktop:h-[30rem] laptop:h-[28rem] tablet:h-[25rem] desktop:ml-32 laptop:ml-14 desktop:-mt-20 laptop:-mt-20 tablet:-mt-20 3xl:h-[35rem] 2xl:h-[25rem]  3xl:ml-52 2xl:ml-52 rounded-[25px] 3xl:-mt-16 3xl:mb-24'>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default About;

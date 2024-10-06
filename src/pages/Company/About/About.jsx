import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <section className="w-full bg-[#ffffff] font-raleway pt-6 3xl:-mt-4 2xl:-mt-4 desktop:-mt-4 laptop:-mt-4">
            <div className='container mx-auto overflow-x-hidden overflow-y-hidden'>
                <div className="layout lg:mx-24 mx-3">
                    <div>
                        <h3 className="text-[#282A37] text-lg desktop:text-2xl 3xl:text-3xl 2xl:text-2xl laptop:text-2xl tablet:text-lg tablet:mt-10 font-medium font-raleway tablet:ml-12 ml-3 3xl:ml-[8.6rem] laptop:ml-0 2xl:ml-[8.7rem] desktop:-ml-1 3xl:mt-24 2xl:mt-24 desktop:mt-24 laptop:mt-16 3xl:mb-4">
                            Welcome at <strong>Prographr</strong>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-28">
                            <div className="relative flex items-center justify-center 3xl:ml-5 2xl:-ml-4 desktop:-ml-44 laptop:-ml-12 tablet:-mt-16 3xl:-mt-28 2xl:-mt-[7rem] desktop:-mt-[6rem] laptop:-mt-[7rem] -mt-16 ">
                                <div className="relative w-[21rem] h-[21rem] 3xl:h-[21rem] 2xl:h-[21rem] desktop:h-[21rem] laptop:h-[21rem] 3xl:w-[22rem] 2xl:w-[22rem] desktop:w-[22rem] laptop:w-[22rem] tablet:w-[22rem] tablet:h-[21rem] 3xl:-ml-28">                         
                                    <LazyLoad height={200} offset={100}>
                                        <img
                                            className='w-[24rem] h-[21rem] bg-[#257aa8a0] object-cover mix-blend-multiply '
                                            src="https://res.cloudinary.com/dzi3u164c/image/upload/v1726114976/prographr-team_erlkev.jpg"
                                            alt="Prographr team"
                                        />
                                    </LazyLoad>

                                    {/* Blue Overlay */}
                                    <div className="absolute inset-0 bg-[#4864EC] opacity-60"></div>

                                    {/* Bottom-Right Quarter Circle Shape */}
                                    <div className="absolute bottom-0 right-2 3xl:left-[13.1rem] 2xl:left-[13.1rem] desktop:left-[13.1rem] laptop:left-[13.1rem] tablet:left-[13.1rem] left-[7.6rem] w-[8.9rem] h-[9.7rem] bg-white rounded-br-[100%]"></div>
                                </div>
                            </div>
                            <div className="lg:mb-32 mr-2 desktop:mt-40 laptop:mt-24 2xl:-ml-[9.5rem] desktop:-ml-[9rem] desktop:mr-16 laptop:-ml-[3rem] laptop:mr-16 2xl:mr-[8rem] 3xl:mt-9 2xl:mt-9 tablet:ml-6 ml-2">
                                <p className="mt-10 text-slate-600 font-raleway font-medium 3xl:-ml-12 2xl:ml-7 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm 3xl:-mt-28 2xl:-mt-28 desktop:-mt-[15rem] tablet:mt-16 laptop:-mt-[11rem] tablet:text-sm text-sm" style={{ lineHeight: "1.75" }}>
                                    Prographr is a pre-made graphic resource site. There is also an option for clients who <br />
                                    want to modify the template with their brand identity. We have dedicated team <br />
                                    members specialized in specific sectors, can be logo specialists, or print design <br />
                                    specialists. Paying a fee per revision any client can modify the template from us. Our <br />
                                    team members are ready to assist you as long as the client wants.
                                </p>

                                <p className="mt-8 block 3xl:block 2xl:block desktop:block laptop:hidden tablet:block  text-slate-600 font-raleway font-medium 3xl:-ml-12 2xl:ml-7 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-7 3xl:text-base 2xl:text-base desktop:text-sm laptop:text-sm tablet:text-sm text-sm" style={{ lineHeight: "1.75" }}>
                                    We are professionals and always think about professional design, and provide <br />
                                    professional services. All templates are pre-made for specific businesses and can be <br />
                                    used for multipurpose businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

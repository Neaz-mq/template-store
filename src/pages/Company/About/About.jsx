import LazyLoad from 'react-lazyload';

const About = () => {

    return (
        <section className="w-full bg-[#ffffff] font-raleway pt-6 3xl:-mt-4 2xl:-mt-4 desktop:-mt-5 laptop:-mt-4 tablet:-mt-24 -mt-24">
            <div className='container mx-auto overflow-x-hidden overflow-y-hidden'>
                <div className="layout  mx-3">
                    <div>
                        <h3 className="text-[#282A37] text-lg tablet:text-lg laptop:text-lg 3xl:text-2xl 2xl:text-2xl desktop:text-xl tablet:mt-10 font-medium font-raleway tablet:ml-10 ml-5 3xl:ml-[5.4rem] laptop:ml-[4.3rem] 2xl:ml-[5.4rem] desktop:ml-[4.3rem] 3xl:mt-24 2xl:mt-20 desktop:mt-20 laptop:mt-16 3xl:mb-4 mt-5">
                            Welcome at <strong>Prographr</strong>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-32">
                            <div className="relative flex items-center justify-center 3xl:-ml-40 2xl:-ml-24 desktop:-ml-14 laptop:-ml-6 tablet:-mt-20 3xl:-mt-36 2xl:-mt-[7rem] desktop:-mt-[7rem] laptop:-mt-[6.7rem] -mt-24">
                                <div className="relative w-[21rem] h-[21rem] 3xl:h-[21rem] 2xl:h-[21rem] desktop:h-[21rem] laptop:h-[21rem] 3xl:w-[29rem] 2xl:w-[29rem] desktop:w-[26rem] laptop:w-[20rem] tablet:w-[22rem] tablet:h-[21rem] 3xl:-ml-2">
                                    <LazyLoad height={200} offset={100}>
                                        <img
                                            className='3xl:w-[29rem] 2xl:w-[29rem] desktop:w-[26rem] laptop:w-[20rem] h-[21rem] bg-[#282A37] object-cover mix-blend-multiply '
                                            src="https://res.cloudinary.com/dzi3u164c/image/upload/v1726114976/prographr-team_erlkev.jpg"
                                            alt="Prographr team"
                                        />
                                    </LazyLoad>

                                    {/* Blue Overlay */}
                                    <div className="absolute inset-0 bg-[#282A37] opacity-60"></div>

                                    {/* Bottom-Right Quarter Circle Shape */}
                                    <div className="absolute bottom-0 right-2 3xl:left-[20.1rem] 2xl:left-[20.1rem] desktop:left-[17.1rem] laptop:left-[11.1rem] tablet:left-[13.1rem] left-[7.6rem] w-[8.9rem] h-[9.7rem] bg-white rounded-br-[100%]"></div>
                                </div>
                            </div>
                            <div className="lg:mb-32 mr-2 desktop:mt-40 laptop:mt-16 2xl:-ml-[1rem] 3xl:-ml-[1rem] 3xl:mr-24 desktop:-ml-[6rem] desktop:mr-10 laptop:-ml-[6rem] laptop:mr-10 2xl:mr-[8rem] 3xl:mt-6 2xl:mt-9 tablet:ml-6 ml-2">
                                <p className="mt-10 text-slate-600 font-raleway font-medium 3xl:-ml-12 2xl:-ml-12 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-6 3xl:-mt-28 2xl:-mt-28 desktop:-mt-[15rem] tablet:mt-16 laptop:-mt-[11rem] 3xl:text-base 2xl:text-sm desktop:text-sm laptop:text-xs tablet:text-xs text-[10px]" style={{ lineHeight: "1.75" }}>
                                    Prographr is a pre-made graphic resource site. There is also an option for clients who <br />
                                    want to modify the template with their brand identity. We have dedicated team <br />
                                    members specialized in specific sectors, can be logo specialists, or print design <br />
                                    specialists. Paying a fee per revision any client can modify the template from us. Our <br />
                                    team members are ready to assist you as long as the client wants.
                                </p>

                                <p className="3xl:mt-14 2xl:mt-14 desktop:mt-14 laptop:mt-8 tablet:mt-8 mt-6 text-slate-600 font-raleway font-medium 3xl:-ml-12 2xl:-ml-12 desktop:ml-7 ml-2 laptop:ml-7 tablet:ml-6 3xl:text-base 2xl:text-sm desktop:text-sm laptop:text-xs tablet:text-xs text-[10px]" style={{ lineHeight: "1.75" }}>
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

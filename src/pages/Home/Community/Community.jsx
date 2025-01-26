const Community = () => {
    return (
        <div className='container mx-auto overflow-x-hidden tablet:overflow-x-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-x-hidden laptop:overflow-x-hidden font-raleway'>
            <div className='mx-3'>
                <header className="layout 3xl:-mb-10 3xl:-mt-40 2xl:-mb-10  2xl:-mt-40 desktop:-mb-10 desktop:-mt-40 laptop:mb-20 laptop:-mt-40 tablet:mb-20 tablet:-mt-40 mb-20 -mt-20">
                    <section className="text-[#15141ce7] -ml-3 tablet:ml-1 w-[18rem] tablet:w-[43.5rem] laptop:w-[49rem] bg-[#F9F9F9]  pt-10 pb-24 font-raleway font-medium px-5 3xl:pb-28 3xl:px-13 2xl:pb-28 2xl:px-10 desktop:pb-28 desktop:px-5 gap-5 grid 3xl:grid-cols-2 2xl:grid-cols-2 desktop:grid-cols-2 3xl:mb-40 2xl:mb-40 desktop:mb-40 3xl:w-[72rem] 3xl:ml-[15.6rem] 2xl:w-[62rem] 2xl:ml-[15.5rem] desktop:w-[64rem] tablet:mt-44 mt-20 desktop:ml-[7rem] laptop:ml-[6.5rem] place-items-center">
                        <div className='3xl:ml-8 laptop:ml-2 2xl:ml-8 desktop:ml-5'>
                            <h2 className="text-3xl mb-10">Check Our Portfolio</h2>
                            <p className='leading-7'>Join our online portfolio to explore our imagination. Learn more about our focus, interests, and our creativity.</p>
                        </div>
                        <div className="w-fit grid grid-cols-1 tablet:grid-cols-2 gap-3 lg:block lg:w-[400px] laptop:-ml-20 float-right relative 3xl:mr-5 -ml-16 tablet:-ml-0">
                            <div className="lg:ml-[37%]">
                                <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl" href="https://www.facebook.com/prographr.page" target="_blank" title="Join us on Facebook">Facebook
                                    <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>f</span></p>
                                </a>
                            </div>
                            <div className="lg:ml-[80%]">
                                <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC]  hover:text-white rounded-full shadow-2xl" href="https://www.freepik.com/author/prographr" target="_blank" rel="noopener noreferrer" title="Join us on Freepik">
                                    Freepik
                                    <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>F</span></p>
                                </a>
                            </div>
                            <div className="lg:ml-[63%] lg:mt-[20px]">
                                <a className="w-[185px] flex items-center justify-between gap-4 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl" href="https://stock.adobe.com/contributor/211997436/prographr?load_type=author&prev_url=detail" target="_blank" title="Join us on Adobe Stock">Adobe stock
                                    <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>St</span></p>
                                </a>
                            </div>
                            <div className="lg:ml-[15%] lg:-mt-[37px]">
                                <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl" href="https://www.behance.net/prographr" target="_blank" title="Join us on Behance">Behance
                                    <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span >b</span></p>
                                </a>
                            </div>
                            <div className="lg:-mt-[29%]">
                                <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] duration-200 hover:text-white rounded-full shadow-2xl" href="https://dribbble.com/prographr" target="_blank" rel="noopener noreferrer" title="Join us on Dribbble">Dribbble
                                    <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>d</span></p>
                                </a>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        </div>

    );
};

export default Community;
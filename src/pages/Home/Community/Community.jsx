const Community = () => {
    return (
        <div className='font-raleway overflow-hidden bg-[#F9F9F9]  '>
            <header className="pb-20 container mx-auto">
                <section className="text-[#15141ce7]  pt-1 pb-24 font-raleway font-medium  gap-36 grid 3xl:grid-cols-2 2xl:grid-cols-2 desktop:grid-cols-2 place-items-center 3xl:mb-40  3xl:mt-10 2xl:mt-10 desktop:mt-10 laptop:mt-10 tablet:mt-6 mt-0">
                    <div className='3xl:-ml-1 2xl:ml-20 desktop:ml-20 laptop:ml-20 ml-4'>
                        <h2 className="3xl:text-2xl 2xl:text-xl desktop:text-xl laptop:text-xl tablet:text-lg text-lg mb-7 3xl:mt-4 2xl:mt-4 desktop:mt-4 laptop:mt-6 tablet:mt-6 mt-10">Check Our Portfolio</h2>
                        <p className='3xl:leading-7 2xl:leading-7 desktop:leading-7 laptop:leading-7 tablet:leading-7 leading-5 3xl:text-sm 2xl:text-sm desktop:text-[12px] laptop:text-[13px] tablet:text-sm text-[12px]'>Join our online portfolio to explore our imagination. Learn more about our focus, <br /> interests, and our creativity.</p>
                    </div>
                    <div className="w-fit grid grid-cols-1 tablet:grid-cols-2 gap-3 lg:block lg:w-[400px] laptop:-ml-20 float-right relative 3xl:mr-0 3xl:ml-8 2xl:ml-16 desktop:mr-10   tablet:-ml-0 3xl:mt-0 2xl:mt-0 desktop:mt-0 laptop:-mt-16 tablet:-mt-12 -mt-20">
                        <div className="lg:ml-[37%]">
                            <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl text-sm " href="https://www.facebook.com/prographr.page" target="_blank" title="Join us on Facebook">Facebook
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>f</span></p>
                            </a>
                        </div>
                        <div className="lg:ml-[80%]">
                            <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC]  hover:text-white rounded-full shadow-2xl text-sm" href="https://www.freepik.com/author/prographr" target="_blank" rel="noopener noreferrer" title="Join us on Freepik">
                                Freepik
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>F</span></p>
                            </a>
                        </div>
                        <div className="lg:ml-[63%] lg:mt-[20px]">
                            <a className="w-[185px] flex items-center justify-between gap-4 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl text-sm" href="https://stock.adobe.com/contributor/211997436/prographr?load_type=author&prev_url=detail" target="_blank" title="Join us on Adobe Stock">Adobe stock
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>St</span></p>
                            </a>
                        </div>
                        <div className="lg:ml-[15%] lg:-mt-[37px]">
                            <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] hover:text-white rounded-full shadow-2xl text-sm" href="https://www.behance.net/prographr" target="_blank" title="Join us on Behance">Behance
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>b</span></p>
                            </a>
                        </div>
                        <div className="lg:-mt-[29%]">
                            <a className="w-[180px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#4864EC] duration-200 hover:text-white rounded-full shadow-2xl text-sm" href="https://dribbble.com/prographr" target="_blank" rel="noopener noreferrer" title="Join us on Dribbble">Dribbble
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>d</span></p>
                            </a>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Community;
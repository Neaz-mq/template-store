const Community = () => {
    return (
        <div className='overflow-x-hidden font-raleway overflow-hidden'> {/* Removed mx-3 */}
            <header className="pb-20"> {/* Removed layout and top margins */}
                <section className="text-[#15141ce7] bg-[#F9F9F9] pt-10 pb-24 font-raleway font-medium px-5 gap-5 grid 3xl:grid-cols-2 2xl:grid-cols-2 desktop:grid-cols-2 place-items-center 3xl:mb-40 3xl:mt-10">
                    <div className='3xl:ml-[22.5rem] laptop:ml-2 2xl:ml-8 desktop:ml-5'>
                        <h2 className="text-3xl mb-7 mt-3">Check Our Portfolio</h2>
                        <p className='leading-7'>Join our online portfolio to explore our imagination. Learn more about our focus, interests, and our creativity.</p>
                    </div>
                    <div className="w-fit grid grid-cols-1 tablet:grid-cols-2 gap-3 lg:block lg:w-[400px] laptop:-ml-20 float-right relative 3xl:mr-64  -ml-16 tablet:-ml-0">
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
                                <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#4864EC]"><span>b</span></p>
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
    );
};

export default Community;
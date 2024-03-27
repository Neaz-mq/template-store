import React from 'react';

const Community = () => {
    return (
        <div className='lg:mx-24 mx-3'>
          <div className="layout mb-20 lg:mt-60 -mt-16">

            <div className="text-[#2F1C6A] bg-[#EDEEF7] rounded-2xl pt-10 pb-24 lg:pb-20 px-5 lg:px-12 grid gap-5 lg:gap-10 md:grid-cols-1 lg:grid-cols-2 lg:mb-36 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">

                <div>
                <h3 className="text-3xl mb-10">Join Our Community</h3>
                <p>Join our online community to explore our imagination. Learn more about our focus, interests, and how other members engage with one another to explore their ideas.</p>
                </div>

                <div className="w-fit grid grid-cols-2 gap-3 lg:block lg:w-[400px] float-right relative">

                    <div className="lg:ml-[40%]">
                        <a className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#9A8EE8] hover:text-white rounded-full shadow-2xl" href="#">Facebook<p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#7666E3]">

                        <span className="-mt-1">f</span></p></a>
                        </div>

                        <div className="lg:ml-[80%]"><a className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#9A8EE8] hover:text-white rounded-full shadow-2xl" href="#">Skype<p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#7666E3]"><span className="-mt-1">S</span></p></a>

                        </div>

                        <div className="lg:ml-[60%] lg:mt-[20px]"><a className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#9A8EE8] hover:text-white rounded-full shadow-2xl" href="#">Twitter<p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#7666E3]">

                            <span className="-mt-1">t</span></p></a>
                            </div>
                            <div className="lg:ml-[15%] lg:-mt-[37px]"><a className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#9A8EE8]  hover:text-white rounded-full shadow-2xl" href="#">Behance<p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#7666E3]"><span className="-mt-1">b</span></p></a></div>
                            <div className="lg:-mt-[29%]">
                                <a className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-[#9A8EE8] duration-200 hover:text-white rounded-full shadow-2xl" href="#">Dribble<p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-[#7666E3]"><span className="-mt-1">d</span>
                                </p></a>
                                </div>
                                </div>
                                </div>
                                </div>
        </div>
    );
};

export default Community;
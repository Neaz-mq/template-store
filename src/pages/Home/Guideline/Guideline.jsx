import { useState } from "react";


const Guideline = () => {
    const [activeTab, setActiveTab] = useState('guidelines');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className="layout mt-14 lg:mt-48">
            <h2 className="lg:text-4xl text-3xl text-[#2F1C6A] text-center">Become a <strong>template creator</strong></h2>
            <div className="mt-20">
                <div className="max-w-[740px] mx-auto  grid md:grid-cols-1 lg:grid-cols-3 gap-1 bg-[#EDEEF7] rounded-[25px] lg:rounded-full translate-y-24 opacity-0" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900  p-3 text-sm hover:text-[#7668E5] hover:scale-105  duration-100 ${activeTab === 'guidelines' ? 'bg-[#7666E3] text-[#fffbfb]   hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('guidelines')}>Check Guidelines</button>

                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'submit' ? 'bg-[#7666E3] text-[#fffbfb] hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('submit')}>Submit template</button>

                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'approved' ? 'bg-[#7666E3] text-[#fffbfb] hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('approved')}>Approved</button>
                </div>
            </div>

            <div className="translate-y-24 opacity-0 " style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                {activeTab === 'guidelines' && (
                    <div className="max-w-[940px] mx-auto grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-12 place-items-center mt-16">
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative">
                                <div className="absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"></div>
                                <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8">Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="relative">
                                <div className="false">
                                    <div className="hidden"></div>
                                    <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                    <span className="absolute z-20 -bottom-2 -right-2 text-white bg-[#7666E3] rounded-full p-3">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Client Bought Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="relative">
                                <div className="false">
                                    <div className="hidden"></div>
                                    <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                    <span className="absolute z-20 -bottom-2 text-[10px] -right-2 text-white bg-[#7666E3] rounded-full py-4 px-3">SOLD</span>
                                </div>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Template Sold &amp; you got Paid</p>
                        </div>
                    </div>
                )}
                {activeTab === 'submit' && (
                    <div className="max-w-[940px] mx-auto grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-12 place-items-center mt-16">
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative">

                                <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8">Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative">
                                <div className="absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"></div>
                                <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                <span className="absolute z-20 -bottom-2 -right-2 text-white bg-[#7666E3] rounded-full p-3">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                    </svg>
                                </span>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Client Bought Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="relative">
                                <div className="false">
                                    <div className="hidden"></div>
                                    <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                    <span className="absolute z-20 -bottom-2 text-[10px] -right-2 text-white bg-[#7666E3] rounded-full py-4 px-3">SOLD</span>
                                </div>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Template Sold &amp; you got Paid</p>
                        </div>
                    </div>
                )}
                {activeTab === 'approved' && (
                    <div className="max-w-[940px] mx-auto grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-12 place-items-center mt-16">
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative">
                                <div className="absolute w-[120px] h-[120px] bg-white rounded-full "></div>
                                <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8">Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="relative">
                                <div className="false">
                                    <div className="hidden"></div>
                                    <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                    <span className="absolute z-20 -bottom-2 -right-2 text-white bg-[#7666E3] rounded-full p-3">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Client Bought Your Template</p>
                        </div>
                        <img alt="Roadmap" loading="lazy" width="385" height="25" decoding="async" data-nimg="1" className="hidden lg:block col-span-3 -mt-10" src="https://prographr.vercel.app/_next/static/media/road.b10c4628.svg" style={{ color: 'transparent' }} />
                        <div className="col-span-2 text-center flex flex-col items-center">
                            <div className="border-[10px] shadow-xl shadow-black/20 border-white rounded-full relative">
                                <div className="absolute w-[120px] h-[120px] bg-white rounded-full animate-ping"></div>
                                <img alt="Template" loading="lazy" width="150" height="167" decoding="async" data-nimg="1" className="relative z-10 w-[120px] h-[120px] bg-[#ECEDF6] object-contain p-2 rounded-full" src="https://prographr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider.2aa6a74b.png&w=256&q=75" style={{ color: 'transparent' }} />
                                <span className="absolute z-20 -bottom-2 text-[10px] -right-2 text-white bg-[#7666E3] rounded-full py-4 px-3">SOLD</span>
                            </div>
                            <p className="font-['__gellix_0bf537, __gellix_Fallback_0bf537']  font-medium text-slate-900 mt-8 w-[210px]">Template Sold &amp; you got Paid</p>
                        </div>
                    </div>
                )}

                <div className="w-fit mt-20 mx-auto">
                    <button className="btn bg-[#7666E3] font-['__gellix_0bf537, __gellix_Fallback_0bf537'] hover:text-[#f2f2f5] hover:bg-[#5044a1]  font-medium capitalize text-white rounded-full gap-4 px-6 py-3 text-base mt-5">
                        <span className="-mt-1">Submit a Template</span>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></button>
                </div>
            </div>
        </div>


    );
};

export default Guideline;


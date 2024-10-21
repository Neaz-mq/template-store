import { useState, useEffect } from "react";

const Ideas = () => {
    const [activeTab, setActiveTab] = useState('ideas');
    const [loadedGif, setLoadedGif] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        let gifUrl;
        switch (activeTab) {
            case 'ideas':
                gifUrl = "https://res.cloudinary.com/dzi3u164c/image/upload/v1725944876/Web-1-animation_uavfhe.gif";
                break;
            case 'design':
                gifUrl = "https://res.cloudinary.com/dzi3u164c/image/upload/v1725945389/Web-2_slzrcs.gif";
                break;
            case 'finalize':
                gifUrl = "https://res.cloudinary.com/dzi3u164c/image/upload/v1725945537/Web-3_sivn04.gif";
                break;
            default:
                gifUrl = null;
        }

        if (gifUrl) {
            const img = new Image();
            img.src = gifUrl;
            img.onload = () => setLoadedGif(gifUrl);
        }

    }, [activeTab]);

    return (
        
        <div className="container mx-auto overflow-hidden 2xl:overflow-x-hidden 3xl:overflow-x-hidden desktop:overflow-hidden laptop:overflow-hidden tablet:overflow-hidden">
            <section className="layout mt-24 lg:mt-[14rem] lg:mx-24">
                <h1 className="lg:text-4xl text-2xl tablet:text-3xl text-[#2F1C6A] text-center font-raleway">Get <strong>cutting-edge design</strong></h1>
                <div className="lg:mt-20 mt-16 tablet:w-[20rem] laptop:w-[50rem] desktop:w-[72rem] mx-auto place-items-center" data-aos="fade-up" data-aos-duration="700">
                    <nav className="max-w-[540px] desktop:ml-60 3xl:mx-auto 2xl:mx-auto laptop:mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#EDEEF7] rounded-[25px] lg:rounded-full translate-y-24 opacity-0 mx-4" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                        <button className={`rounded-full font-raleway font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'ideas' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('ideas')}>Collect Ideas</button>
                        <button className={`rounded-full font-raleway font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'design' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('design')}>Design Analysis</button>
                        <button className={`rounded-full font-raleway font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'finalize' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('finalize')}>Finalize Design</button>
                    </nav>
                </div>

                <div className="translate-y-24 opacity-0" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                    <div className="desktop:w-[70rem] laptop:w-[60rem] 3xl:w-[105rem] 2xl:w-[75rem] mx-auto place-items-center">
                        <div className="grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20" data-aos="fade-up" data-aos-duration="700">
                            <div className="flex items-center justify-center lg:hidden">
                                {loadedGif && <img className="3xl:mr-60 3xl:-ml-48 3xl:-mt-12 2xl:ml-10" src={loadedGif} alt="Design example" />}
                            </div>

                            {activeTab === 'ideas' && (
                                <article className="text-slate-800 font-raleway font-medium 3xl:w-[400px] 2xl:w-[450px] 3xl:ml-28 2xl:ml-14 2xl:mt-3 3xl:mt-10">
                                    <h2 className="text-2xl">Collect <strong>Ideas</strong></h2>
                                    <p className="py-5">Conduct regular brainstorming sessions with colleagues, friends, or peers to explore a wide range of creative possibilities.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Start with a central concept or problem and branch out with related ideas and connections.</li>
                                        <li className="mt-3">Make connections between unrelated concepts to generate fresh ideas.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-raleway font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
                                </article>
                            )}

                            {activeTab === 'design' && (
                                <article className="text-slate-800 font-raleway font-medium 3xl:w-[400px] 2xl:w-[450px] 3xl:ml-28 2xl:ml-14 2xl:mt-3 3xl:mt-10">
                                    <h2 className="text-2xl">Design <strong>Analysis</strong></h2>
                                    <p className="py-5">Analyze the visual appeal and aesthetic qualities of the design, including factors such as color, typography, layout, and overall coherence.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Assess the design's potential for adaptation, scalability, and innovation to meet evolving user needs, technological advancements, and market trends.</li>
                                        <li className="mt-3">Evaluate user interaction with the design and identify areas for improvement to enhance usability and accessibility.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-raleway font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
                                </article>
                            )}

                            {activeTab === 'finalize' && (
                                <article className="text-slate-800 font-raleway font-medium 3xl:w-[400px] 2xl:w-[450px] 3xl:ml-28 2xl:ml-14 2xl:mt-3 3xl:mt-10">
                                    <h2 className="text-2xl">Finalize <strong>Design</strong></h2>
                                    <p className="py-5">Conduct a thorough review of the design to ensure it meets the project requirements and objectives. Make necessary revisions based on feedback from stakeholders, clients, or team members.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Perform quality assurance checks to identify and fix any errors, inconsistencies, or technical issues in the design.</li>
                                        <li className="mt-3">Once all revisions and quality checks are complete, finalize the design and confirm readiness with stakeholders or clients.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-raleway font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </button>
                            </article>
                        )}

                        <div className="hidden lg:flex items-center justify-center">
                            {loadedGif && <img className="3xl:mr-60 3xl:-ml-48 3xl:-mt-12 2xl:ml-10" src={loadedGif} alt="Design example" />}
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
        
    );
};

export default Ideas;
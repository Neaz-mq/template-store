import { useState } from "react";

const Ideas = () => {

    const [activeTab, setActiveTab] = useState('ideas');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderVideoForTab = () => {

        switch (activeTab) {

            case 'ideas':
                return (
                    <img className="h-[21rem] 2xl:mt-2 w-72 -mt-3 lg:-mt-0" src="https://i.ibb.co/GtL3624/1.jpg" alt="Design example 1" />
                );

            case 'design':
                return (
                    <img className="h-[21rem] 2xl:mt-2 w-72" src="https://i.ibb.co/WWqZ87h/2.jpg" alt="Design example 1" />
                );

            case 'finalize':
                return (
                    <img className="h-[21rem] 2xl:mt-2 w-72" src="https://i.ibb.co/mSkQcRq/3.jpg" alt="Design example 1" />
                );

            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto ">
            <section className="layout mt-24 lg:mt-[20rem] lg:mx-24">
                <h1 className="lg:text-4xl text-3xl text-[#2F1C6A] text-center font-roboto">Get <strong>cutting-edge design</strong></h1>
                <div className="lg:mt-20 mt-16 tablet:w-[20rem] laptop:w-[50rem] desktop:w-[72rem] mx-auto place-items-center" data-aos="fade-up" data-aos-duration="700">
                    <div className="max-w-[540px] desktop:ml-60 3xl:mx-auto  2xl:mx-auto laptop:mx-auto text-accent grid  md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#EDEEF7] rounded-[25px] lg:rounded-full translate-y-24 opacity-0 mx-4" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                        <button className={`rounded-full font-roboto font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'ideas' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('ideas')}>Collect Ideas</button>
                        <button className={`rounded-full font-roboto font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'design' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('design')}>Design Analysis</button>
                        <button className={`rounded-full font-roboto font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'finalize' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('finalize')}>Finalize Design</button>
                    </div>
                </div>

                <div className="translate-y-24 opacity-0" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>

                    <div className="desktop:w-[60rem] 3xl:w-[68rem] 2xl:w-[62rem] mx-auto place-items-center">
                        <div className="grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20" data-aos="fade-up" data-aos-duration="700">
                            <div className="flex items-center justify-center lg:hidden">
                                {renderVideoForTab()}
                            </div>

                            {activeTab === 'ideas' && (
                                <article className="text-slate-800 font-roboto font-medium 3xl:w-[600px] 2xl:w-[550px] 3xl:-ml-20 2xl:-ml-14 2xl:mt-3 ">
                                    <h2 className="text-2xl">Collect <strong>Ideas</strong></h2>
                                    <p className="py-5">Conduct regular brainstorming sessions with colleagues, friends, or peers to explore a wide range of creative possibilities.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Start with a central concept or problem and branch out with related ideas and connections.</li>
                                        <li className="mt-3">Make connections between unrelated concepts to generate fresh ideas.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-roboto font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
                                </article>
                            )}

                            {activeTab === 'design' && (
                                <article className="text-slate-800 font-roboto font-medium 3xl:w-[600px] 2xl:w-[550px] 3xl:-ml-20 2xl:-ml-14 2xl:mt-3">
                                    <h2 className="text-2xl">Design <strong>Analysis</strong></h2>
                                    <p className="py-5">Analyze the visual appeal and aesthetic qualities of the design, including factors such as color, typography, layout, and overall coherence.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Assess the design's potential for adaptation, scalability, and innovation to meet evolving user needs, technological advancements, and market trends.</li>
                                        <li className="mt-3">Evaluate user interaction with the design and identify areas for improvement to enhance usability and accessibility.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-roboto font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
                                </article>
                            )}

                            {activeTab === 'finalize' && (
                                <article className="text-slate-800 font-roboto font-medium 3xl:w-[600px] 2xl:w-[550px] 3xl:-ml-20 2xl:-ml-14 2xl:mt-3">
                                    <h2 className="text-2xl">Finalize <strong>Design</strong></h2>
                                    <p className="py-5">Conduct a thorough review of the design to ensure it meets the project requirements and objectives. Make necessary revisions based on feedback from stakeholders, clients, or team members.</p>
                                    <ul className="list-disc ml-4">
                                        <li>Perform quality assurance checks to identify and fix any errors, inconsistencies, or technical issues in the design.</li>
                                        <li className="mt-3">Once all revisions and quality checks are complete, finalize the design and confirm readiness with stakeholders or clients.</li>
                                    </ul>
                                    <br />
                                    <button className="btn hidden bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-roboto font-medium">
                                        <span className="-mt-1 ml-1">Learn More</span>
                                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </button>
                                </article>
                            )}
                            <div className="lg:flex lg:justify-end hidden">
                                <div className="flex items-center justify-center">
                                    {renderVideoForTab()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ideas;

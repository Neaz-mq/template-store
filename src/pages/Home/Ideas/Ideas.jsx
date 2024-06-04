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
                    <iframe title="Ideas Video" className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-[25px]" src="https://www.youtube.com/embed/YXZamW4-Ysk?si=R_MyyObrcaiPR0ex"></iframe>
                );
            case 'design':
                return (
                    <iframe title="Design Video" className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-[25px]" src="https://www.youtube.com/embed/XNkV6m4fosw?si=ytAB_ix0M2_ieC1_"></iframe>
                );
            case 'finalize':
                return (
                    <iframe title="Finalize Video" className="w-[300px] h-[150px] lg:w-[500px] lg:h-[300px] rounded-[25px]" src="https://www.youtube.com/embed/KG5cltHpbYs?si=uOCzcZSXMJzSZm-d"></iframe>
                );
            default:
                return null;
        }
    };

    return (
        <div className="layout mt-14 lg:mt-56 lg:mx-24">
            <h1 className="lg:text-4xl text-3xl text-[#2F1C6A] text-center">Get <strong>cutting-edge design</strong></h1>
            <div className="mt-20" data-aos="fade-up" data-aos-duration="700">
                <div className="max-w-[540px] lg:mx-auto text-accent grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#EDEEF7] rounded-[25px] lg:rounded-full translate-y-24 opacity-0 mx-4" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'ideas' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('ideas')}>Collect Ideas</button>
                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'design' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('design')}>Design Analysis</button>
                    <button className={`rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium text-slate-900 p-3 text-sm hover:text-[#7668E5] hover:scale-105 duration-100 ${activeTab === 'finalize' ? 'bg-[#7666E3] text-white hover:text-[#ffffff]' : ''}`} onClick={() => handleTabClick('finalize')}>Finalize Design</button>
                </div>
            </div>

            <div className="translate-y-24 opacity-0" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="w-full grid lg:grid-cols-2 px-10 gap-8 lg:gap-0 my-20" data-aos="fade-up" data-aos-duration="700">
                    <div className="flex items-center justify-center lg:hidden">
                        {renderVideoForTab()}
                    </div>
                    {activeTab === 'ideas' && (
                        <div className="text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium max-w-[500px]">
                            <h2 className="text-2xl">Collect <strong>Ideas</strong></h2>
                            <p className="py-5">Conduct regular brainstorming sessions with colleagues, friends, or peers to explore a wide range of creative possibilities.</p>
                            <ul className="list-disc ml-4">
                                <li>Start with a central concept or problem and branch out with related ideas and connections.</li>
                                <li className="mt-3">Make connections between unrelated concepts to generate fresh ideas.</li>
                            </ul>
                            <br />
                            <button className="btn bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">
                                <span className="-mt-1 ml-1">Learn More</span>
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                    {activeTab === 'design' && (
                        <div className="text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium max-w-[500px]">
                            <h2 className="text-2xl">Design <strong>Analysis</strong></h2>
                            <p className="py-5">Analyze the visual appeal and aesthetic qualities of the design, including factors such as color, typography, layout, and overall coherence.</p>
                            <ul className="list-disc ml-4">
                                <li>Assess the design's potential for adaptation, scalability, and innovation to meet evolving user needs, technological advancements, and market trends.</li>
                                <li className="mt-3">Evaluate user interaction with the design and identify areas for improvement to enhance usability and accessibility.</li>
                            </ul>
                            <br />
                            <button className="btn bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">
                                <span className="-mt-1 ml-1">Learn More</span>
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}

                    {activeTab === 'finalize' && (
                        <div className="text-slate-800 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium max-w-[500px]">
                            <h2 className="text-2xl">Finalize <strong>Design</strong></h2>
                            <p className="py-5">Conduct a thorough review of the design to ensure it meets the project requirements and objectives. Make necessary revisions based on feedback from stakeholders, clients, or team members.</p>
                            <ul className="list-disc ml-4">
                                <li>Perform quality assurance checks to identify and fix any errors, inconsistencies, or technical issues in the design.</li>
                                <li className="mt-3">Once all revisions and quality checks are complete, finalize the design and confirm readiness with stakeholders or clients.</li>
                            </ul>
                            <br />
                            <button className="btn bg-[#7666E3] hover:bg-[#5842e7] capitalize text-white rounded-full gap-4 mt-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">
                                <span className="-mt-1 ml-1">Learn More</span>
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="7" y1="17" x2="17" y2="
7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}

                    <div className="lg:flex lg:justify-end hidden">
                        <div className="flex items-center justify-center">
                            {renderVideoForTab()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ideas;

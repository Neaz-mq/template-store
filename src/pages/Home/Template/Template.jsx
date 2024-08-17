import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Template = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="container mx-auto overflow-x-hidden">
                <div className="font-roboto">
                    <section className="layout bg-[#EDEEF7] py-10 lg:py-16 rounded-[20px] mt-16 lg:mt-36 mb-20 3xl:w-[74rem] 2xl:w-[62rem] desktop:w-[65.5rem] laptop:w-[50rem] mx-auto">
                        <div className="flex justify-center gap-4 lg:gap-36 px-5">
                            <div className="text-center" aria-labelledby="templates-sold">
                                <h2 id="templates-sold" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}+
                                </h2>
                                <p className="text-sm text-[#7666E4]">Templates sold till now</p>
                            </div>
                            <div className="text-center hidden" aria-labelledby="funds-cleared">
                                <h2 id="funds-cleared" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    $2k+
                                </h2>
                                <p className="text-sm text-[#7666E4]">Funds cleared to sellers</p>
                            </div>
                            <div className="text-center" aria-labelledby="premium-templates">
                                <h2 id="premium-templates" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}+
                                </h2>
                                <p className="text-sm text-[#7666E4]">Premium templates</p>
                            </div>
                            <div className="text-center" aria-labelledby="free-templates">
                                <h2 id="free-templates" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={13} duration={3} delay={0} />}+
                                </h2>
                                <p className="text-sm text-[#7666E4]">Free templates</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Template;
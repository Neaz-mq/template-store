import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Template = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

            <div className="container mx-auto 2xl:overflow-x-hidden 3xl:overflow-x-hidden">
                <div className="font-roboto">
                    <section className="layout lg:mx-24 tablet:mx-2 bg-[#EDEEF7] lg:py-16 py-20 rounded-[20px] mt-16 lg:mt-36 mb-48 3xl:w-[74rem] 2xl:w-[63rem] 3xl:mx-auto 2xl:mx-auto place-items-center 2xl:mr-[16rem] 3xl:mt-52 2xl:mt-52 desktop:mt-44 ">
                        <div className="flex justify-center gap-8 lg:gap-36 px-5 ">
                            <div className="text-center lg:mr-4 lg:-ml-10">
                                <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]" aria-label="Template sales">
                                    {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}
                                    +
                                </h1>
                                <p className="text-sm text-[#7666E4]">Templates sold till now</p>
                            </div>
                            <div className="text-center hidden">
                                <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]" aria-label="Funds cleared to sellers">
                                    $2k+
                                </h1>
                                <p className="text-sm text-[#7666E4]">Funds cleared to sellers</p>
                            </div>
                            <div className="text-center ml-4">
                                <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]" aria-label="Premium templates">
                                    {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}
                                    +
                                </h1>
                                <p className="text-sm text-[#7666E4]">Premium templates</p>
                            </div>
                            <div className="text-center ml-8">
                                <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]" aria-label="Free templates">
                                    {counterOn && <CountUp start={0} end={13} duration={3} delay={0} />}
                                    +
                                </h1>
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

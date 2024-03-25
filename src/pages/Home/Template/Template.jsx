import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Template = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div>
            <section className="layout lg:mx-24 mx-2 bg-[#EDEEF7] lg:py-16 py-20 rounded-[40px] mt-32 lg:mt-44 mb-48 ">
                <div className="flex justify-center gap-8 lg:gap-32 px-5 ">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                        {counterOn && <CountUp start={0} end={200} duration={3} delay={0} />}
                            
                            +</h1>
                        <p className="text-sm text-[#7666E4]">Template sells till now</p>
                    </div>
                    <div className="text-primary text-center">
                        <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                       
                        $2k+
                            </h1>
                        <p className="text-sm text-[#7666E4]">Funds clear to sellers</p>
                    </div>
                    <div className="text-primary text-center">
                        <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                        {counterOn && <CountUp start={0} end={790} duration={3} delay={0} />}
                            +
                        </h1>
                        <p className="text-sm text-[#7666E4]">Premium templates</p>
                    </div>
                    <div className="text-primary text-center">
                        <h1 className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                        {counterOn && <CountUp start={0} end={150} duration={3} delay={0} />}
                            +
                            </h1>
                        <p className="text-sm text-[#7666E4]">Free template</p>
                    </div>
                </div>
            </section>
        </div>

        </ScrollTrigger>
    );
};

export default Template;



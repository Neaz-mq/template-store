import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure'; // Import your custom hook

const Template = () => {
    const [counterOn, setCounterOn] = useState(false);
    const axiosSecure = useAxiosSecure();

    // Fetch the admin stats
    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading stats: {error.message}</div>;
    }

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="container mx-auto overflow-x-hidden">
                <div className="font-roboto">
                    <section className="layout bg-[#EDEEF7] py-10 lg:py-16 rounded-[20px] mt-16 lg:mt-36 mb-20 3xl:w-[74rem] 2xl:w-[62rem] desktop:w-[65.5rem] laptop:w-[50rem] mx-auto">
                        <div className="flex justify-center gap-4 lg:gap-36 px-5">
                            <div className="text-center" aria-labelledby="templates-sold">
                                <h2 id="templates-sold" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={stats.orders || 0} duration={3} delay={0} />}
                                </h2>
                                <p className="text-sm text-[#7666E4]">Templates sold till now</p>
                            </div>
                            <div className="text-center" aria-labelledby="premium-templates">
                                <h2 id="premium-templates" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={stats.templates || 0} duration={3} delay={0} />}
                                </h2>
                                <p className="text-sm text-[#7666E4]">Premium templates</p>
                            </div>
                            <div className="text-center" aria-labelledby="free-templates">
                                <h2 id="free-templates" className="text-2xl font-bold lg:text-5xl text-[#7666E4]">
                                    {counterOn && <CountUp start={0} end={stats.free || 0} duration={3} delay={0} />}
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

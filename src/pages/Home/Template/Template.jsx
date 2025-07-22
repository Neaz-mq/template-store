import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Template = () => {
    const [counterOn, setCounterOn] = useState(false);
    const axiosSecure = useAxiosSecure();

    const { data: stats, isFetching } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
        placeholderData: (previousData) => previousData || { orders: 0, templates: 0, free: 0 },
        staleTime: 10 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
        gcTime: 20 * 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="overflow-hidden font-raleway">

                {/* ============ Desktop and Larger Layout ============ */}
                <div className="hidden laptop:block">
                    <div className="bg-[#F9F9F9] h-[14.5rem] w-7 3xl:block 2xl:block desktop:block laptop:block"></div>
                    <div className="bg-[#ffffff] container mx-auto">
                        <div className="flex">
                            <div className="flex 3xl:ml-[6.7rem] 2xl:ml-28 desktop:ml-[5.2rem] tablet:ml-[18.3rem] laptop:ml-24 ml-16">
                                <div>
                                    <h1 className="3xl:text-3xl 2xl:text-2xl desktop:text-2xl laptop:text-2xl text-xl font-semibold text-left leading-[2.5rem] text-[#282A37] font-raleway 3xl:-mt-44 2xl:-mt-44 desktop:-mt-44 laptop:-mt-44">
                                        Explore <br /> <span className="italic">our work</span>
                                    </h1>
                                    <p className="font-raleway text-[13px] mt-3 text-[#282A37] ml-1">
                                        Discover graphic design templates <br /> to enhance your brand look.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F9F9F9] h-[20rem] 3xl:h-[16rem] 2xl:h-[16rem] desktop:h-[15rem] laptop:h-[14.5rem] w-screen overflow-hidden 3xl:-mt-60 3xl:ml-[36rem] 2xl:-mt-64 2xl:ml-[36rem] desktop:-mt-60 laptop:-mt-60 desktop:ml-[30rem] laptop:ml-[22rem]">
                            <section className="text-[#282A37] font-raleway">
                                <div className="flex justify-start items-start flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row gap-2 3xl:gap-32 2xl:gap-28 desktop:gap-20 laptop:gap-10 px-5 mt-6 3xl:ml-36 3xl:mt-7 2xl:ml-28 desktop:ml-12 laptop:ml-16">
                                    <div className="text-center ml-4">
                                        <h1 className="text-3xl font-bold mt-10" aria-label="Premium templates">
                                            {(!isFetching && counterOn) && <CountUp start={0} end={stats.templates || 0} duration={3} />}
                                        </h1>
                                        <p className="text-[16px] mt-5">Premium <br /> Templates</p>
                                    </div>
                                    <div className="text-center ml-6">
                                        <h1 className="text-3xl font-bold mt-10" aria-label="Exclusive templates">
                                            {(!isFetching && counterOn) && <CountUp start={0} end={stats.exclusives || 0} duration={3} />}
                                        </h1>
                                        <p className="text-[16px] mt-5">Exclusive <br /> Templates</p>
                                    </div>
                                    <div className="text-center ml-6">
                                        <h1 className="text-3xl font-bold mt-10" aria-label="Free templates">
                                            {(!isFetching && counterOn) && <CountUp start={0} end={stats.free || 0} duration={3} />}
                                        </h1>
                                        <p className="text-[16px] mt-5">Free <br /> Templates</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Tablet & Mobile only */}
                <div className="block laptop:hidden w-full">
                    {/* Heading area - outside bg */}
                    <section className="text-center font-raleway text-[#282A37] pt-10 px-4 relative z-10">
                        <h1 className="text-xl tablet:text-2xl font-semibold mb-2">Explore our work</h1>
                        <p className="text-sm mb-6">Discover graphic design templates to enhance your brand look.</p>
                    </section>

                    {/* Full-width gray background */}
                    <div className="bg-[#F9F9F9] w-full py-16 relative z-0 -mt-2">
                        <section className="text-center font-raleway text-[#282A37] px-4">
                            <div className="flex justify-center items-center gap-12 flex-wrap">
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.templates || 0} duration={3} />}
                                    </h2>
                                    <p className="text-sm mt-2">Premium Templates</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.exclusives || 0} duration={3} />}
                                    </h2>
                                    <p className="text-sm mt-2">Exclusive Templates</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.free || 0} duration={3} />}
                                    </h2>
                                    <p className="text-sm mt-2">Free Templates</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>



            </div>
        </ScrollTrigger>
    );
};

export default Template;

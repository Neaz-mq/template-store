import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Template = () => {
    const [counterOn, setCounterOn] = useState(false);
    const axiosSecure = useAxiosSecure();

    // Fetch stats with query caching & disabled refetch on window focus
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
                <div className="bg-[#F9F9F9] h-[14.5rem] w-7 3xl:block 2xl:block desktop:block laptop:block tablet:hidden hidden"></div>
                <div className="bg-[#ffffff] container mx-auto">
                    <div className="flex">
                        <div className="flex 3xl:ml-24 2xl:ml-28 desktop:ml-[5.2rem] tablet:ml-[18.3rem] laptop:ml-24 ml-16">
                            <div>
                                <h1 className="3xl:text-3xl 2xl:text-2xl desktop:text-2xl laptop:text-2xl text-xl font-semibold text-left leading-[2.5rem] text-[#282A37] font-raleway 3xl:-mt-44 2xl:-mt-44 desktop:-mt-44 laptop:-mt-44 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                    Explore <br /> <span className="italic">our work</span>
                                </h1>
                                <h1 className="text-[#282A37] 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden block tablet:text-2xl text-lg font-raleway font-semibold tablet:mt-10 mt-20 ml-3    tablet:-ml-16">
                                    Explore our work
                                </h1>
                                <p className="font-raleway text-[13px] mt-3 text-[#282A37] ml-1 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                    Discover graphic design templates <br /> to enhance your brand look.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] h-[20rem] 3xl:h-[16rem] 2xl:h-[16rem] desktop:h-[15rem] laptop:h-[14.5rem] tablet:h-[13rem] w-fit 3xl:w-screen 2xl:w-screen desktop:w-screen laptop:w-screen tablet:w-fit overflow-hidden tablet:overflow-hidden  3xl:-mt-60 3xl:ml-[36rem] 2xl:-mt-64 2xl:ml-[36rem] desktop:-mt-60 laptop:-mt-60 tablet:mt-14 mt-10 desktop:ml-[30rem] laptop:ml-[22rem]  ml-10 ">

                        <div className="font-raleway">
                            <section className="text-[#282A37]">
                                <div className="flex justify-start items-start flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row tablet:flex-row gap-2  3xl:gap-32 2xl:gap-28 desktop:gap-20 laptop:gap-10  tablet:gap-6 px-5 mt-6 3xl:ml-36 3xl:mt-7 2xl:ml-28 desktop:ml-12 laptop:ml-16 tablet:-ml-6 ml-2">
                                    <div className="text-center hidden">
                                        <h1 className="3xl:text-4xl 2xl:text-4xl desktop:text-3xl laptop:text-3xl tablet:text-2xl text-xl  font-bold 3xl:mt-12 2xl:mt-14 desktop:mt-10 laptop:mt-36 tablet:mt-8 mt-2 -ml-5 3xl:-ml-0 2xl:-ml-0 desktop:-ml-0  laptop:-ml-0 font-raleway" aria-label="Template sales">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.orders || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-[16px] text-[#282A37] mt-5 ml-3 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                            Template <br /> <span className="ml-6">sold till now</span>
                                        </p>
                                        <p className="text-base text-[#282A37] mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden">
                                            Template sold till now
                                        </p>
                                    </div>
                                    <div className="text-center ml-4">
                                        <h1 className="3xl:text-4xl 2xl:text-4xl desktop:text-3xl laptop:text-3xl tablet:text-2xl text-xl font-bold  3xl:mt-12 2xl:mt-14 desktop:mt-10 laptop:mt-10 tablet:mt-8 mt-2 3xl:-ml-9 2xl:-ml-9 desktop:-ml-9 laptop:-ml-9 tablet:ml-1 -ml-6" aria-label="Premium templates">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.templates || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-[16px] text-[#282A37] mt-5 ml-3 mr-12 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                            Premium <br /> <span className="ml-2">Templates</span>
                                        </p>
                                        <p className="text-base text-[#282A37] mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden -ml-3 tablet:-ml-0">
                                            Premium Templates
                                        </p>
                                    </div>
                                    <div className="text-center ml-6">
                                        <h1 className="3xl:text-4xl 2xl:text-4xl desktop:text-3xl laptop:text-3xl tablet:text-2xl text-xl font-bold  3xl:mt-12 2xl:mt-14 desktop:mt-10 laptop:mt-10 tablet:mt-8 mt-2 3xl:-ml-9 2xl:-ml-9 desktop:-ml-9 laptop:-ml-9 tablet:-ml-4 -ml-10" aria-label="Exclusive templates">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.exclusives || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-[16px] text-[#282A37] mt-5  hidden 3xl:block 2xl:block desktop:block laptop:block -ml-2">
                                        Exclusive <br /> <span className="ml-2">Templates</span>
                                        </p>
                                        <p className="text-base text-[#282A37] mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden -ml-3 tablet:-ml-0 ">
                                        Exclusive Templates
                                        </p>
                                    </div>

                                    <div className="ml-16">
                                        <h1 className="3xl:text-4xl 2xl:text-4xl desktop:text-3xl laptop:text-3xl tablet:text-2xl text-xl font-bold  3xl:mt-12 2xl:mt-14 desktop:mt-10 laptop:mt-10 tablet:mt-8 mt-2 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 tablet:ml-2 ml-1" aria-label="Exclusive templates">
                                        {(!isFetching && counterOn) && <CountUp start={0} end={stats.free || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-[16px] text-[#282A37] mt-5  hidden 3xl:block 2xl:block desktop:block laptop:block">
                                        Free <br /> <span className="">Templates</span>
                                        </p>
                                        <p className="text-base text-[#282A37] mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden -ml-10 tablet:-ml-0">
                                        Free Templates
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Template;
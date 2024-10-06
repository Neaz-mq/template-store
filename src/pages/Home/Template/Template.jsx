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
            <div className="overflow-hidden font-raleway">
                <div className="bg-[#4864EC] h-[14.5rem] w-7 3xl:block 2xl:block desktop:block laptop:block tablet:hidden hidden"></div>
                <div className="bg-[#ffffff] container mx-auto">
                    <div className="flex">
                        <div className="flex 3xl:ml-60 2xl:ml-60 desktop:ml-24 tablet:ml-[16rem] laptop:ml-24 ml-16">
                            <div>
                                <h1 className="3xl:text-4xl 2xl:text-4xl desktop:text-4xl laptop:text-4xl text-2xl font-semibold text-left leading-[2.5rem] text-[#4864EC] font-raleway 3xl:-mt-44 2xl:-mt-44 desktop:-mt-44 laptop:-mt-44 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                    Explore <br /> <span className="italic">our work</span>
                                </h1>
                                <h1 className="text-[#4864EC] 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden block tablet:text-3xl text-2xl font-raleway font-semibold tablet:mt-16 mt-12 -ml-3 tablet:-ml-0">
                                    Explore our work
                                </h1>
                                <p className="font-raleway text-sm mt-3 text-[#282A37] ml-1 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                    Discover graphic design templates <br /> to enhance your brand's look.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4864EC] h-[21.5rem] 3xl:h-[14.5rem] 2xl:h-[14.5rem] desktop:h-[14.5rem] laptop:h-[14.5rem] tablet:h-[13rem] w-fit 3xl:w-screen 2xl:w-screen desktop:w-screen laptop:w-screen overflow-hidden tablet:overflow-hidden container mx-auto 3xl:-mt-56 3xl:ml-[36rem] 2xl:-mt-56 2xl:ml-[36rem] desktop:-mt-56 laptop:-mt-56 tablet:mt-14 mt-10 desktop:ml-[30rem] laptop:ml-[22rem] tablet:ml-[0.5rem] ml-3">

                        <div className="font-raleway">
                            <section className="text-white">
                                <div className="flex justify-start items-start flex-col 3xl:flex-row 2xl:flex-row desktop:flex-row laptop:flex-row tablet:flex-row gap-2 lg:gap-16 3xl:gap-28 2xl:gap-24 desktop:gap-20 tablet:gap-16 px-5 mt-6 3xl:ml-24 3xl:mt-7 2xl:ml-20 desktop:ml-8 laptop:ml-0 tablet:ml-6 ml-2">
                                    <div className="text-center">
                                        <h1 className="text-2xl font-bold lg:text-5xl 3xl:mt-8 2xl:mt-8 desktop:mt-8 laptop:mt-8 tablet:mt-8 mt-2 -ml-6 3xl:-ml-0" aria-label="Template sales">
                                            {counterOn && <CountUp start={0} end={stats.orders || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-lg text-white mt-5 ml-6 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                            Template <br /> <span className="ml-6">sold till now</span>
                                        </p>
                                        <p className="text-lg text-white mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden">
                                            Template sold till now
                                        </p>
                                    </div>
                                    <div className="text-center ml-4">
                                        <h1 className="text-2xl font-bold lg:text-5xl 3xl:mt-8 2xl:mt-8 desktop:mt-8 laptop:mt-8 tablet:mt-8 mt-2 -ml-9" aria-label="Premium templates">
                                            {counterOn && <CountUp start={0} end={stats.templates || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-lg text-white mt-5 ml-6 mr-12 hidden 3xl:block 2xl:block desktop:block laptop:block">
                                            Premium <br /> <span className="ml-2">Templates</span>
                                        </p>
                                        <p className="text-lg text-white mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden">
                                            Premium Templates
                                        </p>
                                    </div>
                                    <div className="text-center ml-9">
                                        <h1 className="text-2xl font-bold lg:text-5xl 3xl:mt-8 2xl:mt-8 desktop:mt-8 laptop:mt-8 tablet:mt-8 mt-2 3xl:-ml-9 2xl:-ml-9 desktop:-ml-9 laptop:-ml-9 tablet:-ml-0 -ml-9" aria-label="Free templates">
                                            {counterOn && <CountUp start={0} end={stats.free || 0} duration={3} delay={0} />}
                                        </h1>
                                        <p className="text-lg text-white mt-5  hidden 3xl:block 2xl:block desktop:block laptop:block  -ml-12">
                                            Free <br /> <span className="ml-10">Templates</span>
                                        </p>
                                        <p className="text-lg text-white mt-5 block 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden">
                                            Free Templates
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <img
                            className="3xl:-mt-[15rem] 3xl:-ml-[12rem] 2xl:-mt-[16rem] 2xl:-ml-[10rem] desktop:-mt-[12rem] desktop:-ml-[11rem] laptop:-mt-[12rem] laptop:-ml-[8rem] tablet:-mt-[10.5rem] tablet:-ml-[7rem] -mt-[12rem] opacity-45"
                            src="/Line Art.svg"
                            alt="Line Art"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Template;
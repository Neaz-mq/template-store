import React, { useState, useEffect } from 'react';

const Deal = () => {
    const [deals, setDeals] = useState([]);
    const [showFirstContent, setShowFirstContent] = useState(true); // Track which content to show

    useEffect(() => {
        // Fetch the deals data from the backend
        const fetchDeals = async () => {
            try {
                const response = await fetch('https://template-store-server.vercel.app/deal');
                const data = await response.json();
                setDeals(data); // Assuming the response is an array
            } catch (error) {
                console.error('Error fetching deals data:', error);
            }
        };

        fetchDeals();

        // Toggle between first and second content every 5 seconds
        const interval = setInterval(() => {
            setShowFirstContent((prev) => !prev); // Toggle content
        }, 4000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="pb-0 tablet:-mt-[6rem] 3xl:-mt-4 2xl:-mt-4 desktop:-mt-[1.3rem] laptop:-mt-4 -mt-24">
            {deals.length > 0 &&
                deals.map((deal, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: deal.background }} // Apply background to the outer div
                    >
                        {/* Main Content inside the container */}
                        <div className="container mx-auto px-4 overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row w-full gap-16">
                                {/* Left Section: Description */}
                                <div className="w-full 3xl:w-[40rem] 2xl:w-[40rem] desktop:w-[30rem] laptop:w-[30rem] p-4 flex flex-col items-center justify-center lg:justify-start">
                                    {showFirstContent ? (
                                        <>
                                            <h1
                                                className="3xl:text-6xl 2xl:text-6xl desktop:text-4xl laptop:text-base text-lg tablet:text-xl 3xl:ml-[13.8rem] 3xl:-mr-8 2xl:ml-[13.8rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:-ml-12 laptop:-mr-2  font-extrabold lg:font-bold 3xl:leading-[70px] 2xl:leading-[70px] desktop:leading-[50px] laptop:leading-[40px] tablet:leading-[60px] text-center lg:text-start 3xl:mt-[11rem] 2xl:mt-[10rem] desktop:mt-[12rem] laptop:mt-[12rem] mb-3 font-raleway tablet:mt-12 mt-14"
                                                style={{ color: deal.text }}
                                            >
                                                {deal.description || "A design that matches your business here"}
                                            </h1>

                                            <p className="3xl:text-lg 2xl:text-lg desktop:text-base laptop:text-sm text-sm tablet:text-sm 3xl:ml-[14.2rem] 3xl:-mr-8 2xl:ml-[14.2rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:ml-[6.3rem] laptop:-mr-2  font-medium  tablet:leading-[30px] text-center lg:text-start 3xl:mt-2 2xl:mt-2 desktop:mt-2 laptop:mt-2 mb-3 font-raleway tablet:mt-0 mt-2" style={{ color: deal.sub }}>
                                                {deal.details}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h1
                                                className="3xl:text-6xl 2xl:text-6xl desktop:text-4xl laptop:text-base text-lg tablet:text-xl 3xl:ml-[13.8rem] 3xl:-mr-8 2xl:ml-[13.8rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:-ml-12 laptop:-mr-2  font-extrabold lg:font-bold 3xl:leading-[70px] 2xl:leading-[70px] desktop:leading-[50px] laptop:leading-[40px] tablet:leading-[60px] text-center lg:text-start 3xl:mt-[11rem] 2xl:mt-[10rem] desktop:mt-[12rem] laptop:mt-[12rem] mb-3 font-raleway tablet:mt-12 mt-14"
                                                style={{ color: deal.color }} // Apply color to paragraph
                                            >
                                                {deal.paragraph}
                                            </h1>
                                            <p
                                                className="3xl:text-lg 2xl:text-lg desktop:text-base laptop:text-sm text-sm tablet:text-sm 3xl:ml-[5.2rem] 3xl:-mr-8 2xl:ml-[14.2rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:ml-[6.3rem] laptop:-mr-2  font-medium  tablet:leading-[30px] text-center lg:text-start 3xl:mt-2 2xl:mt-2 desktop:mt-2 laptop:mt-2 mb-3 font-raleway tablet:mt-0 mt-2"
                                                style={{ color: deal.variant }} // Apply variant to summary
                                            >
                                                {deal.summary}
                                            </p>
                                        </>
                                    )}

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="mt-4 px-8 py-3 bg-[#4864EC] text-white font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none 3xl:ml-9 2xl:ml-5 desktop:-ml-[6.5rem] laptop:-ml-12"
                                        >
                                            More Template
                                        </button>
                                    </a>
                                </div>

                                {/* Right Section: Image */}
                                <div className="w-full lg:w-[60%] relative">
                                    <img
                                        src={showFirstContent ? deal.image : deal.photo} // Switch images based on content
                                        alt={`Deal ${index + 1}`}
                                        className="3xl:w-[44rem] 3xl:h-[50rem] 2xl:w-[36rem] 2xl:h-[48rem] desktop:w-[39rem] desktop:h-[48rem] laptop:w-[30rem] laptop:h-[45rem] tablet:w-[30rem] tablet:h-[45rem] object-cover 3xl:ml-10 2xl:-ml-8 desktop:ml-1 tablet:ml-32 laptop:-ml-20 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0 tablet:-mt-20 tablet:pb-20 3xl:pb-0 2xl:pb-0 desktop:pb-0 laptop:pb-0 -mt-14 pb-20 w-[30rem] h-[30rem]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Deal;

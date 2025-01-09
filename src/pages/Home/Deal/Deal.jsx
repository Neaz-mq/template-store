import React, { useState, useEffect } from 'react';

const Deal = () => {
    const [deals, setDeals] = useState([]);
    const [currentContent, setCurrentContent] = useState(0); // Track current content index

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

        // Cycle through content every 4 seconds
        const interval = setInterval(() => {
            setCurrentContent((prev) => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
        }, 4000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="pb-0 tablet:-mt-[6rem] 3xl:-mt-4 2xl:-mt-4 desktop:-mt-[1.3rem] laptop:-mt-4 -mt-24">
            {deals.length > 0 &&
                deals.map((deal, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor:
                                currentContent === 0
                                    ? deal.background
                                    : currentContent === 1
                                    ? deal.back
                                    : currentContent === 2
                                    ? deal.frame
                                    : deal.framework, // Background based on currentContent
                        }}
                    >
                        {/* Main Content inside the container */}
                        <div className="container mx-auto 3xl:px-60 2xl:px-60 desktop:px-24 laptop:px-24 tablet:px-14 overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row w-full 3xl:gap-12 2xl:gap-12 desktop:gap-8 laptop:gap-8">
                                {/* Left Section: Description */}
                                <div className="w-full lg:w-[40%] p-4 flex flex-col items-start justify-center lg:justify-start 3xl:mt-40 2xl:mt-52 desktop:mt-60 laptop:mt-44 tablet:mt-16 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 mt-12">
                                    {currentContent === 0 ? (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
                                                style={{ color: deal.text }}
                                            >
                                                {deal.description || "A design that matches your business here"}
                                            </h1>
                                            <p
                                                className="text-sm lg:text-base leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.sub }}
                                            >
                                                {deal.details}
                                            </p>
                                        </>
                                    ) : currentContent === 1 ? (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
                                                style={{ color: deal.color }}
                                            >
                                                {deal.paragraph}
                                            </h1>
                                            <p
                                                className="text-sm lg:text-base leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.variant }}
                                            >
                                                {deal.summary}
                                            </p>
                                        </>
                                    ) : currentContent === 2 ? (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
                                                style={{ color: deal.shade }}
                                            >
                                                {deal.explanation}
                                            </h1>
                                            <p
                                                className="text-sm lg:text-base leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.shade }}
                                            >
                                                {deal.feature}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
                                                style={{ color: deal.tone }}
                                            >
                                                {deal.representation}
                                            </h1>
                                            <p
                                                className="text-sm lg:text-base leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.variant }}
                                            >
                                                {deal.describe}
                                            </p>
                                        </>
                                    )}

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="px-6 py-3 bg-[#4864EC] text-white font-bold rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block mt-4"
                                        >
                                            More Template
                                        </button>
                                    </a>
                                </div>

                                {/* Right Section: Image */}
                                <div className="w-full lg:w-[70%] relative flex justify-center items-center">
                                    <img
                                        src={
                                            currentContent === 0
                                                ? deal.image
                                                : currentContent === 1
                                                ? deal.photo
                                                : currentContent === 2
                                                ? deal.picture
                                                : deal.figure
                                        }
                                        alt={`Deal ${index + 1}`}
                                        className="w-full max-w-[30rem] lg:max-w-[45rem] h-auto object-cover 3xl:-mt-14"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Deal;

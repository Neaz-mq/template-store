import React, { useState, useEffect } from 'react';

const Deal = () => {
    const [deals, setDeals] = useState([]);
    const [showFirstContent, setShowFirstContent] = useState(true); // Track which content to show

    useEffect(() => {
        // Fetch the deals data from the backend
        const fetchDeals = async () => {
            try {
                const response = await fetch('http://localhost:5000/deal');
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
                        style={{
                            backgroundColor: showFirstContent
                                ? deal.background // First content background color
                                : deal.back, // Second content background color
                        }} // Apply background to the outer div
                    >
                        {/* Main Content inside the container */}
                        <div className="container mx-auto 3xl:px-60 2xl:px-60 desktop:px-24 laptop:px-24 tablet:px-14 overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row w-full 3xl:gap-12 2xl:gap-12 desktop:gap-8 laptop:gap-8">
                                {/* Left Section: Description */}
                                <div className="w-full lg:w-[40%] p-4 flex flex-col items-start justify-center lg:justify-start 3xl:mt-52 2xl:mt-52 desktop:mt-60 laptop:mt-44 tablet:mt-16 tablet:ml-40 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 mt-12">
                                    {showFirstContent ? (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold  text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
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
                                    ) : (
                                        <>
                                            <h1
                                                className="text-3xl 3xl:text-6xl 2xl:text-5xl desktop:text-5xl laptop:text-4xl font-extrabold  text-start mb-4 font-raleway 3xl:leading-[70px] 2xl:leading-[60px] desktop:leading-[60px]"
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
                                    )}

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="px-6 py-3 bg-[#4864EC] text-white font-bold rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none ml-24 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 hidden 3xl:block 2xl:block desktop:block laptop:block tablet:block"
                                        >
                                            More Template
                                        </button>
                                    </a>
                                </div>

                                {/* Right Section: Image */}
                                <div className="w-full lg:w-[70%] relative flex justify-center items-center">
                                    <img
                                        src={showFirstContent ? deal.image : deal.photo}
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

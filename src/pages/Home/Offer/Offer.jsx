import React, { useEffect, useState } from 'react';

const Offer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Fetch the offers data from the backend
        const fetchOffers = async () => {
            try {
                const response = await fetch('https://template-store-server.vercel.app/offer');
                const data = await response.json();
                setOffers(data); // Assuming the response is an array
            } catch (error) {
                console.error('Error fetching offers data:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="pb-0 tablet:-mt-[8.5rem] 3xl:-mt-4 2xl:-mt-4 desktop:-mt-[1.2rem] laptop:-mt-4 -mt-24">
            {offers.length > 0 &&
                offers.map((offer, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: offer.background }} // Apply background to the outer div
                    >
                        {/* Main Content inside the container */}
                        <div className="container mx-auto px-4 overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row w-full gap-16"> {/* Added gap-8 for space between sections */}
                                {/* Left Section: Description */}
                                <div className="w-full 3xl:w-[40rem] 2xl:w-[40rem] desktop:w-[30rem] laptop:w-[30rem] p-4 flex flex-col items-center justify-center lg:justify-start">
                                    <h1
                                        className="3xl:text-6xl 2xl:text-6xl desktop:text-4xl laptop:text-base text-lg tablet:text-xl 3xl:ml-[13.8rem] 3xl:-mr-8 2xl:ml-[13.8rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:-ml-12 laptop:-mr-2 text-[#282A37] font-extrabold lg:font-bold 3xl:leading-[70px] 2xl:leading-[70px] desktop:leading-[50px] laptop:leading-[40px] tablet:leading-[60px] text-center lg:text-start 3xl:mt-[11rem] 2xl:mt-[10rem] desktop:mt-[12rem] laptop:mt-[12rem] mb-3 font-raleway tablet:mt-12 mt-14"
                                        style={{ color: offer.text }}
                                    >
                                        {offer.description || "A design that matches your business here"}
                                    </h1>

                                    <p className="3xl:text-lg 2xl:text-lg desktop:text-base laptop:text-sm text-sm tablet:text-sm 3xl:ml-[14.2rem] 3xl:-mr-8 2xl:ml-[14.2rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:ml-[6.3rem] laptop:-mr-2 text-[#282A37] font-medium  tablet:leading-[30px] text-center lg:text-start 3xl:mt-2 2xl:mt-2 desktop:mt-2 laptop:mt-2 mb-3 font-raleway tablet:mt-2 mt-3">
                                        {offer.details}
                                    </p>

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="mt-4 px-8 py-3 bg-[#4864EC] text-white font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none 3xl:ml-4 2xl:ml-5 desktop:-ml-28 laptop:-ml-12"
                                        >
                                            More Template
                                        </button>
                                    </a>
                                </div>

                                {/* Right Section: Image */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src={offer.image || "https://via.placeholder.com/150"}
                                        alt={`Offer ${index + 1}`}
                                        className="3xl:w-[40.2rem] 3xl:h-[50rem] 2xl:w-[36rem] 2xl:h-[48rem] desktop:w-[39rem] desktop:h-[48rem] laptop:w-[30rem] laptop:h-[45rem] tablet:w-[30rem] tablet:h-[45rem] object-cover 3xl:ml-20 2xl:-ml-8 desktop:ml-1 tablet:ml-32 laptop:-ml-20 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0 tablet:-mt-20 tablet:pb-20 3xl:pb-0 2xl:pb-0 desktop:pb-0 laptop:pb-0 -mt-14 pb-20 w-[30rem] h-[30rem] "
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

export default Offer;

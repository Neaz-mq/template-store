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
        <div className="3xl:pb-36 2xl:pb-36 desktop:pb-36 laptop:pb-32 tablet:pb-3 tablet:pt-12 3xl:pt-0 2xl:pt-0 desktop:pt-0 laptop:pt-0 pt-10 ">
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
                                        className="3xl:text-4xl 2xl:text-3xl desktop:text-2xl laptop:text-xl text-lg tablet:text-xl 3xl:ml-[14.2rem] 3xl:-mr-8 2xl:ml-[14.2rem] 2xl:-mr-8 desktop:ml-[5rem] desktop:-mr-8 laptop:ml-[6.5rem] laptop:-mr-2 text-[#282A37] font-extrabold lg:font-bold 3xl:leading-[50px] 2xl:leading-[50px] desktop:leading-[50px] laptop:leading-[50px] tablet:leading-[50px] text-center lg:text-start 3xl:mt-[15rem] 2xl:mt-[15rem] desktop:mt-[15rem] laptop:mt-[15rem] mb-3 font-raleway tablet:mt-24 mt-20"
                                        style={{ color: offer.text }}
                                    >
                                        {offer.description || "A design that matches your business here"}
                                    </h1>

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="mt-4 px-8 py-3 bg-[#4864EC] text-white font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none 3xl:ml-5 2xl:ml-5 desktop:-ml-28 laptop:-ml-10"
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
                                        className="3xl:w-[39.5rem] 3xl:h-[50rem] 2xl:w-[39.5rem] 2xl:h-[50rem] desktop:w-[39.5rem] desktop:h-[50rem] laptop:w-[39.5rem] laptop:h-[50rem] object-cover 3xl:ml-20 2xl:ml-20 tablet:ml-16 laptop:-ml-16 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0 tablet:-mt-16 tablet:pb-20 3xl:pb-0 2xl:pb-0 desktop:pb-0 laptop:pb-0 -mt-14 pb-20 w-[30rem] h-[30rem] " 
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

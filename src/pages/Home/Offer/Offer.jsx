import React, { useEffect, useState } from 'react';

const Offer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Fetch the offers data from the backend
        const fetchOffers = async () => {
            try {
                const response = await fetch('http://localhost:5000/offer');
                const data = await response.json();
                setOffers(data); // Assuming the response is an array
            } catch (error) {
                console.error('Error fetching offers data:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="space-y-4">
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
                                <div className="w-full 3xl:w-[40rem] p-4 flex flex-col items-center justify-center lg:justify-start">
                                    <h1 
                                        className="3xl:text-4xl 3xl:ml-[14.2rem] 3xl:-mr-8 text-[#282A37] font-extrabold lg:font-bold leading-[50px] text-center lg:text-start 3xl:mt-[15rem] mb-3 font-raleway"
                                        style={{ color: offer.text }}
                                    >
                                        {offer.description || "A design that matches your business here"}
                                    </h1>

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="mt-4 px-8 py-3 bg-[#965952] text-white font-bold rounded-lg hover:bg-[#f25e4f] transition duration-300 ease-in-out focus:outline-none ml-5"
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
                                        className="3xl:w-[39.5rem] 3xl:h-[50rem] object-cover 3xl:ml-20" 
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

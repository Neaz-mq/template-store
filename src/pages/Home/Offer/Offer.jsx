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
        <div className="space-y-4">
            {offers.length > 0 ? (
                offers.map((offer, index) => (
                    <img
                        key={index}
                        src={offer.image || "https://via.placeholder.com/150"}
                        alt={`Offer ${index + 1}`}
                        className="w-full h-[50rem] mb-4"
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Offer;

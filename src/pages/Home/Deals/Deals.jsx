import  { useState, useEffect } from "react";

const Deals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dealsData = [
    {
      title: "Special Offer: 50% Off!",
      description: "Get the best templates at half the price. Limited time offer!",
      image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1735378699/sale_c7cjlc.jpg",
    },
    {
      title: "Exclusive Deal: Buy 1 Get 1 Free!",
      description: "Purchase one template and get another absolutely free!",
      image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1735465663/black_g1tvx5.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsData.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dealsData.length]);

  return (
    <div className="relative bg-gray-200 text-black shadow-lg overflow-hidden" style={{ minHeight: "500px" }}>
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={dealsData[currentIndex].image}
          alt={`Deal ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          style={{
            animation: "fadeIn 1s ease-in-out",
          }}
        />
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 mt-44">
        <div
          className="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg"
          key={currentIndex}
          style={{
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          <h2 className="text-4xl font-bold mb-4">{dealsData[currentIndex].title}</h2>
          <p className="text-xl">{dealsData[currentIndex].description}</p>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Deals;

import { useState, useEffect, useRef } from 'react';

const Deal = () => {
    const [deals, setDeals] = useState([]);
    const [currentContent, setCurrentContent] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchDeals = async () => {
            try {
                const response = await fetch('https://template-store-server.vercel.app/deal', { signal });
                if (!response.ok) throw new Error('Failed to fetch deals');
                const data = await response.json();
                setDeals(data);
            } catch (error) {
                if (error.name !== "AbortError") console.error('Error fetching deals:', error);
            }
        };

        fetchDeals();

        intervalRef.current = setInterval(() => {
            setCurrentContent((prev) => (prev + 1) % 4);
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
            controller.abort();
        };
    }, []);

    return (
        <div className="pb-0 tablet:-mt-[6rem] 3xl:-mt-4 2xl:-mt-4 desktop:-mt-[1.3rem] laptop:-mt-4 -mt-24">
            {deals.length > 0 &&
                deals.map((deal, index) => (
                    <div
                        key={index}
                        className="transition-all duration-700 ease-in-out"
                        style={{
                            backgroundColor:
                                currentContent === 0
                                    ? deal.background
                                    : currentContent === 1
                                        ? deal.back
                                        : currentContent === 2
                                            ? deal.framework
                                            : deal.frame,
                        }}
                    >
                        {/* Main Content inside the container */}
                        <div className="container mx-auto 3xl:px-16 2xl:px-20 desktop:px-14 laptop:px-16 tablet:px-14 overflow-x-hidden">
                            <div className="flex flex-col lg:flex-row w-full 3xl:gap-32 2xl:gap-32 desktop:gap-24 laptop:gap-20">
                                {/* Left Section: Description */}
                                <div className="w-full lg:w-[40%] p-4 flex flex-col items-start justify-center lg:justify-start 3xl:mt-52 2xl:mt-56 desktop:mt-56 laptop:mt-32 tablet:mt-16 3xl:ml-8 2xl:ml-8 desktop:ml-8 laptop:ml-8 mt-12">
                                    {currentContent === 0 ? (
                                        <>
                                            <h1
                                                className="text-2xl 3xl:text-5xl 2xl:text-4xl desktop:text-4xl laptop:text-3xl  font-extrabold text-start mb-4 font-raleway 3xl:leading-[60px] 2xl:leading-[50px] desktop:leading-[50px] "
                                                style={{ color: deal.text }}
                                            >
                                                {deal.description || "A design that matches your business here"}
                                            </h1>
                                            <p
                                                className="text-xs 3xl:text-base 2xl:text-base desktop:text-[15px] laptop:text-[14px] leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.sub }}
                                            >
                                                {deal.details}
                                            </p>
                                        </>
                                    ) : currentContent === 1 ? (
                                        <>
                                            <h1
                                                className="text-2xl 3xl:text-5xl 2xl:text-4xl desktop:text-4xl laptop:text-3xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[60px] 2xl:leading-[50px] desktop:leading-[50px] "
                                                style={{ color: deal.color }}
                                            >
                                                {deal.paragraph}
                                            </h1>
                                            <p
                                                className="text-xs 3xl:text-base 2xl:text-base desktop:text-[15px] laptop:text-[14px] leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.variant }}
                                            >
                                                {deal.summary}
                                            </p>
                                        </>
                                    ) : currentContent === 2 ? (
                                        <>
                                            <h1
                                                className="text-2xl 3xl:text-5xl 2xl:text-4xl desktop:text-4xl laptop:text-4xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[60px] 2xl:leading-[50px] desktop:leading-[50px]"
                                                style={{ color: deal.shade }}
                                            >
                                                {deal.explanation}
                                            </h1>
                                            <p
                                                className="text-xs 3xl:text-base 2xl:text-base desktop:text-[15px] laptop:text-[14px] leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.shade }}
                                            >
                                                {deal.feature}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h1
                                                className="text-2xl 3xl:text-5xl 2xl:text-4xl desktop:text-4xl laptop:text-3xl font-extrabold text-start mb-4 font-raleway 3xl:leading-[60px] 2xl:leading-[50px] desktop:leading-[50px]"
                                                style={{ color: deal.tone }}
                                            >
                                                {deal.representation}
                                            </h1>
                                            <p
                                                className="text-xs 3xl:text-base 2xl:text-base desktop:text-[15px] laptop:text-[14px] leading-relaxed text-start mb-6 font-medium font-raleway"
                                                style={{ color: deal.variant }}
                                            >
                                                {deal.describe}
                                            </p>
                                        </>
                                    )}

                                    {/* More Template Button */}
                                    <a href="/template">
                                        <button
                                            className="3xl:px-6 3xl:py-3 2xl:px-6 2xl:py-3 desktop:px-6 desktop:py-3 laptop:px-6 laptop:py-3 tablet:px-5 tablet:py-2 px-3 py-2 bg-[#4864EC] text-white font-medium  transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0  "
                                        >
                                            More Template
                                        </button>
                                    </a>
                                </div>

                                {/* Right Section: Image */}
                                <div className="w-full lg:w-[50%] relative flex justify-end items-end">
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
                                        className="w-full max-w-[30rem] lg:max-w-[65rem] h-auto object-cover 3xl:-mt-14"
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

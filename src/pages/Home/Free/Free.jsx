import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FreeTemplate from "../../Shared/FreeTemplate/FreeTemplate";

const Free = () => {
    const [templates, setTemplates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://template-store-server.vercel.app/free')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
            })
            .catch(error => console.error("Error fetching templates:", error));
    }, []);

    const displayedTemplates = templates.slice(0, 4);

    const handleExploreMore = () => {
        navigate("/free", { state: { scrollToSection: 'graphics-template-section' } });
    };

    return (
        <div className="bg-[#ffffff] font-raleway">
            <div className="container mx-auto pb-32 3xl:-mt-16 2xl:-mt-10 desktop:-mt-10 laptop:-mt-10 tablet:-mt-32 -mt-44">
                <div className="layout lg:py-8 py-14 mt-24 lg:mx-20">
                    <header className="flex items-center justify-between mb-10">
                        <h1 className="text-xl tablet:text-3xl laptop:text-3xl 3xl:text-3xl 2xl:text-3xl text-[#4864EC] ml-3 lg:ml-6 font-raleway 3xl:ml-[10.6rem] 2xl:ml-[10.6rem] desktop:ml-[2rem] italic font-semibold">
                            Free <span className="not-italic font-normal 3xl:ml-2 2xl:ml-2 desktop:ml-2 laptop:ml-2 text-black">Templates</span>
                        </h1>
                        <button
                            onClick={handleExploreMore}
                            className="mr-2 3xl:mr-[8.2rem] 2xl:mr-44 desktop:mr-4 font-raleway text-[#4864EC] capitalize font-semibold gap-4 p-3 pl-4 flex items-center">
                            <span className="mt-1 text-[13px] 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px]">Explore more Template</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.5 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-.5z" />
                                <path d="M9.646 3.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707L12.793 8 9.646 4.646a.5.5 0 0 1 0-.707z" />
                            </svg>
                        </button>
                    </header>
                    <main className="layout lg:-mt-10 py-12 -mt-16 lg:mx-20">
                        <div className="grid grid-cols-1 mx-4 md:grid-cols-2 laptop:grid-cols-2 3xl:grid-cols-4 2xl:grid-cols-4 desktop:grid-cols-4 gap-x-4 gap-y-6 3xl:ml-[5.7rem] 3xl:mr-16 3xl:gap-x-4 3xl:gap-y-8 2xl:ml-[5.7rem] 2xl:mr-24 2xl:gap-x-4 2xl:gap-y-8 desktop:-ml-12 desktop:-mr-16 laptop:-ml-12 laptop:-mr-16"
                            data-aos="fade-up"
                            data-aos-duration="1000"  
                            data-aos-easing="ease-in-out"  
                        >
                            {displayedTemplates.map(item => (
                                <FreeTemplate key={item._id} item={item} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Free;

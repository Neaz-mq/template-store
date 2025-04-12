import { useEffect, useState } from "react";
import ExclusiveTemplate from "../../Shared/ExclusiveTemplate/ExclusiveTemplate";
import { useNavigate } from "react-router-dom";


const Exclusive = () => {
    const [templates, setTemplates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch templates from JSON
        fetch('https://template-store-server.vercel.app/exclusive')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);  // Set templates state
            })
            .catch(error => console.error("Error fetching templates:", error));
    }, []);

    const template = templates.slice(0, 8);

    const handleExploreMore = () => {
        navigate("/exclusive", { state: { scrollToSection: 'graphics-template-section' } });
    };

    return (
        <div className="bg-[#ffffff] font-raleway">
            <div className="container mx-auto 3xl:pt-5 2xl:pt-5 desktop:pt-5 laptop:pt-5 tablet:pt-5 pt-0 -mt-10 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0 tablet:-mt-0">
                <div className="layout lg:py-8 py-14 mt-24 lg:mx-20">
                    <header className="flex items-center justify-between mb-10">
                        <h1 className="text-lg tablet:text-lg laptop:text-lg 3xl:text-2xl 2xl:text-2xl desktop:text-xl text-[#282A37] ml-3 lg:ml-6 font-raleway 3xl:ml-[10.6rem] 2xl:ml-[10.6rem] desktop:ml-[2rem] font-medium">
                            Exclusive <strong>Templates</strong>
                        </h1>

                        <button
                            onClick={handleExploreMore}
                            className="mr-2 3xl:mr-[8.2rem] 2xl:mr-44 desktop:mr-4 font-raleway text-[#4864EC] capitalize font-semibold gap-4 p-3 pl-4 flex items-center">
                            <span className="-mt-1 text-[11px] 3xl:text-[14px] 2xl:text-[13px] desktop:text-[12px] laptop:text-[12px] tablet:text-[12px]">Explore more Template</span>
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
                            {template.map(item => (
                                <ExclusiveTemplate
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </main>
                </div>
                
            </div>
           
        </div>
       
    );
};

export default Exclusive;
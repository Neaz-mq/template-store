import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import FreeTemplate from "../../Shared/FreeTemplate/FreeTemplate";

const FreeTemp = ({ selectedCategory, searchQuery }) => {
    const [templates, setTemplates] = useState([]);
    const [displayedTemplates, setDisplayedTemplates] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 4;

    useEffect(() => {
        fetch('https://template-store-server.vercel.app/free')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                const filteredTemplates = data.filter(item =>
                    selectedCategory.includes(item.category) &&
                    item.type.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setDisplayedTemplates(filteredTemplates.slice(0, initialDisplayCount));
            })
            .catch(error => console.error("Error fetching templates:", error));
    }, [selectedCategory, searchQuery]);

    const handleViewMore = () => {
        if (showAll) {          
            const filteredTemplates = templates.filter(item =>
                selectedCategory.includes(item.category) &&
                item.type.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setDisplayedTemplates(filteredTemplates.slice(0, initialDisplayCount));
        } else {          
            const filteredTemplates = templates.filter(item =>
                selectedCategory.includes(item.category) &&
                item.type.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setDisplayedTemplates(filteredTemplates);
        }
        setShowAll(!showAll);
    };

    if (displayedTemplates.length === 0) {
        return null;
    }

    return (
        <div id="graphics-template-section" className="bg-[#ffffff] font-raleway">
            <div className="container mx-auto 3xl:pt-5 2xl:pt-5 desktop:pt-5 laptop:pt-5 tablet:pt-5 pt-0 -mt-10 3xl:-mt-36
             2xl:-mt-36 desktop:-mt-44 laptop:-mt-36 tablet:-mt-16">
                <div className="layout lg:py-8 py-14 mt-24 lg:mx-20">
                    <header className="flex items-center justify-between mb-10">
                        <h1 className="text-xl tablet:text-3xl laptop:text-3xl 3xl:text-3xl 2xl:text-3xl text-[#4864EC] ml-3 lg:ml-6 font-raleway 3xl:ml-[10.6rem] 2xl:ml-[10.6rem] desktop:ml-[2rem] italic font-semibold">
                            Free <span className="not-italic font-normal 3xl:ml-2 2xl:ml-2 desktop:ml-2 laptop:ml-2 text-black">Templates</span>
                        </h1>
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
            <div className="flex justify-center">
                <div className="mt-16 mb-10 lg:mb-0">
                    <button className="btn font-raleway mr-2 lg:mr-4 text-[#4864EC] bg-transparent capitalize hover:bg-primary/10  font-semibold gap-4 shadow-none pt-1 pl-4 border-blue-700 rounded-[0px]" onClick={handleViewMore}>
                        <span className="-mt-1">{showAll ? "Show Less" : "View More Free Items"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

FreeTemp.propTypes = {
    selectedCategory: PropTypes.array.isRequired, 
    searchQuery: PropTypes.string.isRequired,     
};

export default FreeTemp;

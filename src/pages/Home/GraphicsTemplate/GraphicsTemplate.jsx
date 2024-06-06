import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import FreeTemplate from "../../Shared/FreeTemplate/FreeTemplate";

const GraphicsTemplate = ({ selectedCategory, searchQuery }) => {

    const [templates, setTemplates] = useState([]);
    const [displayedTemplates, setDisplayedTemplates] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 4;

    useEffect(() => {
        fetch('http://localhost:5000/free')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                // Initially display a subset of templates based on the selected category and search query
                const filteredTemplates = data.filter(item => selectedCategory.includes(item.category) && item.name.toLowerCase().includes(searchQuery.toLowerCase()));
                setDisplayedTemplates(filteredTemplates.slice(0, initialDisplayCount));
            });
    }, [selectedCategory, searchQuery]);

    const handleViewMore = () => {
        if (!showAll) {
            const filteredTemplates = templates.filter(item => selectedCategory.includes(item.category) && item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setDisplayedTemplates(filteredTemplates);
        } else {
            const filteredTemplates = templates.filter(item => selectedCategory.includes(item.category) && item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setDisplayedTemplates(filteredTemplates.slice(0, initialDisplayCount));
        }
        setShowAll(!showAll);
    };
    // Check if there are any templates to display
    if (displayedTemplates.length === 0) {
        return null;
    }

    return (
        <div>
            <header className="layout lg:mt-24 py-12 mt-6 lg:mx-20">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="lg:text-4xl text-xl lg:-mt-8 text-[#2F1C6A] ml-3 lg:ml-4 font-medium">Free <strong>Graphics Templates</strong></h1>
                    <button
                        className="btn mr-2 lg:mr-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold gap-4 shadow-none p-3 pl-4 border-slate-700"
                        aria-label="View Printing and Advertising templates"
                    >
                        <span className="-mt-1">Printing and Advertising</span>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <main className="layout lg:-mt-10 py-12 mt-6 lg:mx-20">
                <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6" data-aos="lg:fade-right" data-aos-duration="700">
                    {displayedTemplates.map(item => (
                        <FreeTemplate
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div>
            </main>

            <footer className="flex justify-center mt-16 mb-10 lg:mb-0">
                <button
                    className="btn mr-2 lg:mr-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold gap-4 shadow-none p-3 pl-4 border-slate-700"
                    onClick={handleViewMore}
                    aria-label={showAll ? "Show Less" : "View More Top Selling Items"}
                >
                    <span className="-mt-1">{showAll ? "Show Less" : "View More Top Selling Items"}</span>
                </button>
            </footer>
        </div>
    );
};

GraphicsTemplate.propTypes = {
    selectedCategory: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default GraphicsTemplate;

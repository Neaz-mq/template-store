import { useRef, useState } from "react";
import AgencyTemplate from "../../Home/AgencyTemplate/AgencyTemplate";
import GraphicsTemplate from "../../Home/GraphicsTemplate/GraphicsTemplate";

const Shop = () => {

    const agencyTemplateRef = useRef(null);

    const handleShopTemplatesClick = () => {
        agencyTemplateRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [selectedCategory, setSelectedCategory] = useState(['agency', 'medical', 'business', 'portfolio', 'construction', 'financial', 'food']);

    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (

        <main>
        <header className="bg-[#EDEEF7] -mt-20 tablet:-mt-24 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0">
            <div className="container mx-auto -mt-[1rem]">
                <div className="max-w-[700px] lg:h-[780px]  mx-auto px-4 flex flex-col items-center justify-center gap-4">
                    <button className="mt-28 3xl:mt-28 2xl:mt-28" onClick={handleShopTemplatesClick}>
                        <p className="w-fit text-sm font-bold border border-black rounded-full px-4 py-1 font-roboto">Shop Templates</p>
                    </button>
                    <h1 className="text-4xl lg:text-7xl font-bold text-center font-roboto mt-3 mb-2">A template <br /> that match your business</h1>
                    <p className="max-w-[550px] text-center text-gray-500 text-lg py-4 font-roboto font-medium">Find and download the best high-quality 3D and vector illustrations, fonts, designs and mockups.</p>
                    <form className="w-fit border px-4 border-black/20 flex items-center hover:shadow-xl duration-200 bg-white rounded-full overflow-hidden">
                        <input
                            placeholder="Search resources..."
                            className="w-[240px] lg:w-[400px] p-3 bg-transparent outline-none"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <button>
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path>
                                <path fill="none" d="M338.29 338.29 448 448"></path>
                            </svg>
                        </button>
                    </form>
                    <div className="flex gap-5 items-center pb-16 pt-3">
                        <p className="font-roboto font-bold text-lg ">Categories</p>
                        <ul className="flex flex-wrap 3xl:flex-nowrap 2xl:flex-nowrap desktop:flex-nowrap laptop:flex-nowrap gap-2">
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('agency') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['agency'])}>Agency</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('business') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['business'])}>Business</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('medical') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['medical'])}>Medical</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('construction') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['construction'])}>Construction</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('financial') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['financial'])}>Financial</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('food') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['food'])}>Food</li>
                            <li className={`text-sm font-roboto font-bold text-gray-600 border border-black/50 rounded-full px-4 pt-2 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer ${selectedCategory.includes('portfolio') ? 'text-[#7b75f1]' : ''}`} onClick={() => handleCategoryClick(['portfolio'])}>Portfolio</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* Render AgencyTemplate only when selectedCategory is not empty */}
            {selectedCategory.length > 0 && (
                <div className="bg-white" ref={agencyTemplateRef}>
                    <AgencyTemplate selectedCategory={selectedCategory} searchQuery={searchQuery} />
                    <GraphicsTemplate selectedCategory={selectedCategory} searchQuery={searchQuery} />
                </div>
            )}
        </header>

    </main>
    );
};

export default Shop;

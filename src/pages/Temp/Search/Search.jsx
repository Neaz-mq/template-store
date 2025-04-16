import { useRef, useState } from "react";
import FreeTemp from "../../Home/FreeTemp/FreeTemp";

const  Search = () => {
    const freeTempRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleCategoryClick = (category) => {
        console.log('Category clicked:', category);
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setSearchKeyword('');
    };
    const getFilteredCategories = () => {
        if (selectedCategory === 'All Categories') {
            return ['flyer', 'brochure'];
        }
        return [selectedCategory.toLowerCase()];
    };
    const handleButtonClick = (buttonLabel) => {
        setSearchQuery('');
        setSearchKeyword(buttonLabel); // Set the search keyword for filtering
        console.log(`${buttonLabel} button clicked`);
    };

    return (
        <main>
            <header className="bg-[#ffffff] 3xl:mt-20 2xl:mt-20 desktop:mt-20 laptop:mt-20">
                <div className="container mx-auto 3xl:-mt-[6rem] 2xl:-mt-[6rem] desktop:-mt-[6rem] laptop:-mt-[6rem] tablet:-mt-[6rem] -mt-[6rem] font-raleway">
                    <div className="max-w-[800px] lg:h-[770px] mx-auto px-4 flex flex-col items-center justify-center gap-4">
                        <h1 className="text-4xl lg:text-6xl font-bold text-center 3xl:-mt-16 2xl:-mt-14 desktop:-mt-12 laptop:-mt-10 tablet:mt-20 mt-16 mb-0 text-[#282A37]">A template <br /></h1>
                        <h1 className="text-4xl lg:text-6xl font-bold text-center  3xl:-mt-2 2xl:-mt-2 desktop:-mt-2 laptop:-mt-2 tablet:-mt-2 -mt-4 text-[#282A37]">for your business</h1>
                        <p className="max-w-[800px] text-center text-gray-500 3xl:text-base 2xl:text-base desktop:text-base laptop:text-base tablet:text-[14px] text-[12px]  py-6 font-medium">
                            Find and download the best logos, flyers, brochures, illustrations that match your business
                        </p>
                        <form className="w-full max-w-[700px] border border-gray-300 3xl:flex 2xl:flex desktop:flex laptop:flex tablet:flex items-center overflow-visible bg-white relative hidden">
                            <div className="flex items-center pl-4">
                                <svg className="w-5 h-5 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
                                </svg>
                            </div>
                            <input
                                placeholder="Search resources..."
                                className="flex-grow p-3 bg-transparent outline-none text-gray-600 text-base"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <div className="border-l border-gray-300 px-8 flex items-center cursor-pointer relative">
                                <button
                                    type="button"
                                    className="text-gray-700 font-semibold flex items-center text-sm"
                                    onClick={() => {
                                        setIsDropdownOpen(!isDropdownOpen);
                                        console.log('Dropdown toggled:', !isDropdownOpen);
                                    }}
                                >
                                    {selectedCategory}
                                    <svg className="ml-2" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"></path>
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="absolute top-full left-0 bg-white shadow-lg border mt-1 rounded-lg w-full z-20">
                                        {['All Categories', 'Flyer', 'Brochure'].map((category) => (
                                            <li
                                                key={category}
                                                className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${selectedCategory === category ? 'bg-gray-100' : ''}`}
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </form>
                        <div>
                            <form className="bg-white relative 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden">
                                <div className="flex items-center pl-4 border border-gray-300">
                                    <svg className="w-5 h-5 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
                                    </svg>
                                    <input
                                        placeholder="Search resources..."
                                        className="flex-grow p-3 bg-transparent outline-none text-gray-600 text-base"
                                        type="text"
                                        value={searchQuery} // Display value
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="border border-gray-300 px-10 py-1 cursor-pointer relative ml-1 mt-12">
                                    <button
                                        type="button"
                                        className="text-gray-700 font-semibold  w-full py-2 flex items-center justify-between "
                                        onClick={() => {
                                            setIsDropdownOpen(!isDropdownOpen);
                                            console.log('Dropdown toggled:', !isDropdownOpen);
                                        }}
                                    >
                                        {selectedCategory}
                                        <svg className="ml-2" stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10l5 5 5-5z"></path>
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <ul className="absolute top-full left-0 bg-white shadow-lg border border-gray-300 mt-1 rounded-lg w-full z-20">
                                            {['All Categories', 'Flyer', 'Brochure'].map((category) => (
                                                <li
                                                    key={category}
                                                    className={`px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ${selectedCategory === category ? 'bg-gray-100' : ''}`}
                                                    onClick={() => handleCategoryClick(category)}
                                                >
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </form>
                        </div>
                        {/* Random Buttons */}
                        <div className="flex flex-col items-start space-y-4 mt-4 w-[8rem] 3xl:hidden 2xl:hidden desktop:hidden laptop:hidden tablet:hidden hidden">
                            <h1 className="text-[#4864EC] font-raleway font-semibold text-[15px] ml-1 -mr-2 ">For Quick Access</h1>
                            {['Agency', 'Business', 'Medical', 'Education', 'Food', 'Environment'].map((buttonLabel) => (
                                <button
                                    key={buttonLabel}
                                    className="w-full px-6 py-3 text-base border border-gray-300  hover:bg-gray-100 focus:outline-none"
                                    onClick={() => handleButtonClick(buttonLabel)}
                                >
                                    {buttonLabel}
                                </button>
                            ))}
                        </div>

                        {/* Random Buttons */}
                        <div className="3xl:flex 2xl:flex desktop:flex laptop:flex tablet:flex space-x-4 mt-4 hidden text-sm">
                            {['Business', 'Medical', 'Education', 'Food', 'Environment'].map((buttonLabel) => (
                                <button
                                    key={buttonLabel}
                                    className="px-4 py-2 border text-base border-gray-300  hover:bg-gray-100 focus:outline-none"
                                    onClick={() => handleButtonClick(buttonLabel)}
                                >
                                    {buttonLabel}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Render Templates based on selected category and search keyword */}
                <div className="bg-white" ref={freeTempRef}>
                    <FreeTemp
                        selectedCategory={getFilteredCategories()}
                        searchQuery={searchQuery || searchKeyword}
                    />
                </div>
            </header>
        </main>
    );
};

export default Search;


const Shop = () => {
    return (
        <div className="bg-[#EDEEF7] -mt-8">
            <div className="max-w-[700px] lg:h-[780px] mx-auto px-4 flex flex-col items-center justify-center gap-4 ">

                <p className="w-fit text-sm font-bold border border-black rounded-full px-4 py-1 font-['__gellix_0bf537, __gellix_Fallback_0bf537']">Shop Templates</p>
                <h1 className="text-4xl lg:text-7xl font-bold text-center">A template <br /> that match your business</h1>

                <p className="max-w-[550px] text-center text-gray-500 text-lg py-4 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">Find and download the best high-quality 3D and vector illustrations, fonts, designs and mockups.</p>

                <form className="w-fit border px-4 border-black/20 flex items-center hover:shadow-xl duration-200 bg-white rounded-full overflow-hidden">
                    <input placeholder="Search resources..." className="w-[300px] lg:w-[400px] p-3 bg-transparent outline-none" type="text" />

                    <button><svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" d="M338.29 338.29 448 448"></path></svg></button></form>

                <div className="flex gap-5 items-center pb-16 pt-3 ">
                    <p className=" font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-bold text-lg">Categories</p>
                    <ul className="flex flex-wrap gap-2">
                        <li className="w-fit text-sm font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-bold text-lg text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-[#7b75f1]  duration-100 cursor-pointer">Agency</li>
                        <li className="w-fit text-sm font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-bold text-lg text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer">Ecommerce</li>
                        <li className="w-fit text-sm font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-bold text-lg text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-[#7b75f1]  duration-100 cursor-pointer">Business</li>
                        <li className="w-fit text-sm font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-bold text-lg text-gray-600 border border-black/50 rounded-full px-4 pt-1 pb-2 hover:text-[#7b75f1] duration-100 cursor-pointer">Portfolio</li>
                        </ul>
                        </div>
                        </div>
        </div>
    );
};

export default Shop;
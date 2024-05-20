import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import FreeTemplate from "../Shared/FreeTemplate/FreeTemplate";


const TemplateDetails = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('templateCustom');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showAdditionalImages, setShowAdditionalImages] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const temp = useLoaderData();
    const { name, _id, price, image } = temp;
    const [templates, setTemplates] = useState([]);
    const [displayedTemplates, setDisplayedTemplates] = useState([]);
    
    const initialDisplayCount = 4;

    useEffect(() => {
        fetch('http://localhost:5000/free')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                setDisplayedTemplates(data.slice(0, initialDisplayCount));
            });
    }, []);

    

    // Check if there are any templates to display
    if (displayedTemplates.length === 0) {
        return null;
    }

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    const handleFileChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedFiles.includes(selectedValue)) {
            setSelectedFiles([...selectedFiles, selectedValue]);
        }
        e.target.value = ""; // Reset the select input
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                tempId: _id,
                email: user.email,
                name,
                image,
                price
            };

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: "You are not Signed In",
                text: "Please sign in to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="lg:ml-20 mb-16">
            <div className="mt-14 flex flex-row gap-6 ml-2">
                <div style={{ width: "65%" }}>
                    <h2 className="text-2xl text-[#2F1C6A] pb-5 font-medium">
                        Premium <strong>Graphics Template</strong>
                    </h2>
                    <div className="bg-[#EDEEF7] rounded-xl flex items-center justify-center pt-6 pb-4 pl-2 pr-4">
                        <div className="flex items-center justify-between gap-16 my-8 -mx-20">
                            <img src={image} className="max-h-[300px] object-contain ml-8 -mr-4" alt="" />
                            <img src={image} className="max-h-[300px] object-contain -ml-4 mr-4" alt="" />
                        </div>
                    </div>
                    <div className="w-full mt-6 flex flex-wrap gap-4 ml-2 lg:ml-0">
                        <img src="https://i.ibb.co/6FCc4gG/1.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                        <img src="https://i.ibb.co/pWZ7pqJ/10.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                        <img src="https://i.ibb.co/vXmfTXW/2.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                        <img src="https://i.ibb.co/Dr8pMnb/4.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                        <img src="https://i.ibb.co/J2GbtNj/5.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />
                        <img src="https://i.ibb.co/RbBk3rt/7.jpg" className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]" alt="" />

                        {!showAdditionalImages && (
                            <div
                                className="w-[47px] h-[47px] flex items-center justify-center bg-[#EDEEF7] rounded-full cursor-pointer hover:bg-[#7666E3] mt-4 ml-2"
                                onClick={() => setShowAdditionalImages(true)}
                            >
                                <FontAwesomeIcon icon={faChevronRight} size="1x" />
                            </div>
                        )}

                        {showAdditionalImages && (
                            <>
                                <div className="flex gap-4 mt-4 ml-2 lg:ml-0">
                                    <img
                                        src="https://i.ibb.co/44VVbr3/11.jpg"
                                        className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
                                        alt=""
                                    />
                                    <img
                                        src="https://i.ibb.co/JrbZzVc/9.jpg"
                                        className="w-[75px] h-[75px] object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
                                        alt=""
                                    />
                                    {/* Add more images here if needed */}
                                </div>
                                <div
                                    className="w-[47px] h-[47px] flex items-center justify-center bg-[#EDEEF7] rounded-full cursor-pointer hover:bg-[#7666E3] mt-8 ml-5"
                                    onClick={() => setShowAdditionalImages(false)}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} size="1x" style={{ transform: "rotate(180deg)" }} />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center mt-12" style={{ width: "60%" }}>
                    <div style={{ width: "87%", height: "28%" }} className={`border ${selectedTemplate === 'templateCustom' ? 'border-primary' : 'border-gray-400'} rounded-[20px] p-8 -ml-14 mr-9  cursor-pointer`} onClick={() => handleTemplateChange('templateCustom')}>
                        <div className="flex justify-between pb-3">
                            <div className="flex gap-3 font-bold">
                                <input className="radio radio-primary" type="radio" checked={selectedTemplate === 'templateCustom'} readOnly />
                                <h2 className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">Template</h2>
                            </div>
                            <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">${price}</div>
                        </div>
                        <div className="pt-2 border-t font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">
                            We are about pushing boundaries, exploring possibilities, and ultimately delivering designs
                        </div>
                    </div>

                    {/* Additional section with the same style in column layout */}
                    <div className="flex flex-col items-center mt-12">
                        <div style={{ width: "100%", height: "100%" }} className={`border ${selectedTemplate === 'customizeTemplate' ? 'border-primary' : 'border-gray-400'} rounded-[20px] -ml-9 p-8 mr-12 cursor-pointer`} onClick={() => handleTemplateChange('customizeTemplate')}>
                            <div className="flex justify-between pb-3">
                                <div className="flex gap-3 font-bold">
                                    <input className="radio radio-primary" type="radio" checked={selectedTemplate === 'customizeTemplate'} readOnly />
                                    <h2 className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] ">Template + Customization</h2>
                                </div>
                                <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">$00</div>
                            </div>
                            <div className="pt-2 border-t font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">

                            </div>
                            <div className="flex items-center mt-4">
                                <div className="flex items-center mr-8">
                                    <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium mr-2">Revisions:</div>
                                    <select className="border rounded-md px-6 py-2" defaultValue="1">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="flex items-center">
                                    <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium mr-6">Files:</div>
                                    <select
                                        className="border rounded-md px-3 py-2 -ml-3"
                                        value=""
                                        onChange={handleFileChange}
                                    >
                                        <option value="">All Files</option>
                                        <option value="Adobe Illustrator">Adobe Illustrator</option>
                                        <option value="Adobe Photoshop">Adobe Photoshop</option>
                                        <option value="Microsoft PowerPoint">Microsoft PowerPoint</option>
                                        <option value="Canva">Canva</option>
                                        <option value="Adobe InDesign">Adobe InDesign</option>
                                        <option value="Microsoft Word">Microsoft Word</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap ml-52">
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                        <span className="mr-2">{file}</span>
                                        <button onClick={() => handleRemoveFile(file)}>
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Add to Cart button */}
                    <button onClick={handleAddToCart} className="bg-[#7666E3] text-white font-semibold rounded-lg mr-14 -ml-4 w-[32rem] mt-10 hover:bg-[#4c16b1] btn ">
    Add to Cart
</button>

                    {/* Check more items */}
                    <button onClick={handleAddToCart} className="bg-gray-300 text-slate-900 font-semibold mr-14 -ml-4 w-[32rem] py-3 rounded-lg mt-4 hover:bg-[#d1bbff] btn ">
    Check more items
</button>


                </div>
            </div>
            <div className="mt-14 flex flex-wrap gap-12">
                {/* Descriptions */}
                <div className="flex-1 mb-8 ml-3">
    <h3 className="text-xl text-[#2F1C6A] font-medium">Descriptions</h3>
    <p className="text-gray-500 mt-2 overflow-hidden font-medium leading-relaxed" >
    A business flyer is a versatile and dynamic promotional tool designed to communicate essential information about a business, its products, services, events, or special offers. This tangible marketing collateral is strategically crafted to capture attention, engage the target audience, and generate interest in what the business offers.
    </p>
</div>


                {/* Item Specifications */}
                <div className="flex-1 mb-8 ml-20 -mr-10">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Item Specifications</h3>
                    <p className="text-gray-500 mt-2 font-medium leading-relaxed">
                        US Letter & A4 Paper Size<br />
                        CMYK color mode<br />
                        Bleed size 3 mm<br />
                        300 DPI – Print-ready<br />
                        Photos are not included
                    </p>
                </div>

                {/* Product Specs */}
                <div className="flex-1 mb-8 ml-10">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Product Specs</h3>
                    <p className="text-gray-500 mt-2 font-medium leading-relaxed">
                        Created: Nov 19, 2024<br />
                        Package File: ZIP<br />
                        Package File Size: 89MB
                    </p>
                </div>

                {/* Files Included */}
                <div className="flex-1 mr-6 ml-7">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Files Included</h3>
                    <p className="text-gray-500 mt-2 font-medium leading-relaxed">
                        Adobe Photoshop <br />  Adobe Illustrator <br /> Adobe InDesign <br /> Canva <br /> Figma <br /> Microsoft PowerPoint <br /> Microsoft Word
                    </p>
                </div>
               
            </div>

            <div className="layout lg:py-20 py-12 mt-6 ">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="lg:text-4xl text-xl lg:-mt-8 text-[#2F1C6A] ml-3 lg:ml-4 font-medium">Free <strong>Graphics Templates</strong></h2>
                    <button className="btn mr-20 ml-4  font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold  gap-4 shadow-none p-3 pl-4 border-slate-700"><span className="-mt-1">Printing and Advertising</span> <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path></svg></button>
                </div>
                <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mr-20 " data-aos="lg:fade-right" data-aos-duration="700">
                    {displayedTemplates.map(item =>
                        <FreeTemplate
                            key={item._id}
                            item={item}
                        />
                    )}
                </div>
            </div>

            
        </div>

       

    );
};

export default TemplateDetails;
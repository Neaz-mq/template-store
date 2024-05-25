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
    const [selectedRevisions, setSelectedRevisions] = useState([]);
    const [showAdditionalImages, setShowAdditionalImages] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const temp = useLoaderData();
    const { name, _id, price, image, descriptions, specifications, product, files, revisions } = temp;








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

    const handleRevisionChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedRevisions.includes(selectedValue)) {
            setSelectedRevisions([...selectedRevisions, selectedValue]);
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
                price,
                descriptions,
                specifications,
                product,
                files,
                revisions


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
            <div className="mt-14 flex lg:flex-row flex-col gap-6 ml-2">
                <div className="lg:w-[65%] w-[97%]">
                    <h2 className="text-2xl text-[#2F1C6A] pb-5 font-medium">
                        Premium <strong>Graphics Template</strong>
                    </h2>
                    <div className="bg-[#EDEEF7] rounded-xl flex items-center justify-center pt-6 pb-4 lg:pl-2 lg:pr-4">
                        <div className="flex items-center justify-between lg:gap-16 gap-10 lg:my-8 lg:-mx-20">
                            <img src={image} className="lg:max-h-[300px]  max-h-[200px] object-contain ml-8 -mr-4 " alt="" />
                            <img src={image} className="lg:max-h-[300px]  max-h-[200px] object-contain -ml-4 mr-4" alt="" />
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
                                        className="w-[75px] h-[75px] -mt-4 -ml-2 lg:-mt-0 lg:-ml-0  object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
                                        alt=""
                                    />
                                    <img
                                        src="https://i.ibb.co/JrbZzVc/9.jpg"
                                        className="w-[75px] h-[75px] -mt-4 lg:-mt-0 object-contain bg-[#EDEEF7] rounded-lg p-3 cursor-pointer hover:bg-[#7666E3]"
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
                    <div className={`border ${selectedTemplate === 'templateCustom' ? 'border-primary' : 'border-gray-400'} rounded-[20px] p-8 lg:w-[87%] lg:h-[28%] w-[160%] h-[100%] lg:-ml-14 lg:mr-9 ml-40  cursor-pointer`} onClick={() => handleTemplateChange('templateCustom')}>
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
                    <div className="flex flex-col items-center mt-12 ml-24 lg:ml-0">
                        <div className={`border ${selectedTemplate === 'customizeTemplate' ? 'border-primary' : 'border-gray-400'} rounded-[20px] lg:-ml-9 ml-16 p-8 lg:mr-12 lg:w-[102%] lg:h-[100%] w-[98%] h-[100%] cursor-pointer`} onClick={() => handleTemplateChange('customizeTemplate')}>
                            <div className="flex justify-between pb-3">
                                <div className="flex gap-3 font-bold">
                                    <input className="radio radio-primary" type="radio" checked={selectedTemplate === 'customizeTemplate'} readOnly />
                                    <h2 className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] lg:ml-0 ">Template + Customization</h2>
                                </div>
                                <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium ">$00</div>
                            </div>
                            <div className="pt-2 border-t font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium">

                            </div>
                            <div className="flex flex-col lg:flex-row items-center mt-4 -ml-6 lg:ml-0">
                                <div className="flex items-center lg:mr-8 ml-6 lg:ml-0 mb-8 lg:mb-0">
                                    <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium lg:mr-2 mr-8">Revisions:</div>
                                    <select
                                        className="border rounded-md lg:px-6 px-3 py-2 mr-6 -ml-5 lg:mr-0 lg:-ml-0"
                                        onChange={(e) => {
                                            const newValue = e.target.value;
                                            setSelectedRevisions([...selectedRevisions, newValue]);
                                        }}
                                        value={selectedRevisions[selectedRevisions.length - 1] || ''}
                                    >
                                        {revisions.map((revision, index) => (
                                            <option key={index} value={revision} className={`option-${_id}`}>
                                                {revision}
                                            </option>
                                        ))}
                                    </select>
                                </div>



                                <div className="flex items-center">
                                    <div className="font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-medium lg:ml-3 ml-10 mr-6">Files:</div>
                                    <select className="border rounded-md lg:px-3 py-2 lg:-ml-3 mr-10 -ml-3 lg:mr-0" onChange={handleFileChange}>
                                        <option value="">All Files</option>
                                        {files.map((file, index) => (
                                            <option key={index} value={file} className={`option-${_id}`}>{file}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap flex-col lg:ml-52 ml-24">
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                        <span className="">{file}</span>
                                        <button onClick={() => handleRemoveFile(file)}>
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500 ml-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Add to Cart button */}
                    <button onClick={handleAddToCart} className="bg-[#7666E3] text-white font-semibold rounded-lg mr-14 lg:-ml-4 lg:w-[32rem] mt-10 hover:bg-[#4c16b1] btn w-[20rem] ml-56 ">
                        Add to Cart
                    </button>

                    {/* Check more items */}
                    <button onClick={handleAddToCart} className="bg-gray-300 text-slate-900 font-semibold mr-14 lg:-ml-4 lg:w-[32rem] py-3 rounded-lg mt-4 hover:bg-[#d1bbff] btn w-[20rem] ml-56 ">
                        Check more items
                    </button>


                </div>
            </div>
            <div className="mt-14 flex flex-wrap lg:flex-row flex-col gap-12">
                {/* Descriptions */}
                <div className="flex-1 lg:mb-8 ml-3">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Descriptions</h3>
                    <p className="text-gray-500 lg:w-[30rem] mt-2 overflow-hidden font-medium leading-relaxed" >
                        {descriptions}
                    </p>
                </div>


                {/* Item Specifications */}
                <div className="flex-1 lg:mb-8 lg:-mr-9 ml-3 lg:ml-0">
                    <h3 className="text-xl text-[#2F1C6A] font-medium mb-2">Item Specifications</h3>
                    {specifications.split('\n').map((specifications, index) => (
                        <p
                            key={index}
                            className="text-gray-500 mt-1 font-medium leading-relaxed"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            {specifications}
                        </p>
                    ))}
                </div>

                {/* Product Specs */}
                <div className="flex-1 lg:mb-8 lg:ml-8 ml-3">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Product Specs</h3>
                    <p className="text-gray-500 mt-2 font-medium leading-relaxed">
                        {product}
                    </p>
                </div>

                {/* Files Included */}
                <div className="flex-1 lg:mr-10 ml-3 lg:ml-0">
                    <h3 className="text-xl text-[#2F1C6A] font-medium">Files Included</h3>
                    <div className="mt-2">
                        {files.map((file, index) => (
                            <p key={index} className="text-gray-500 mt-2 font-medium leading-relaxed">{file}</p>
                        ))}
                    </div>
                </div>


            </div>



        </div>



    );
};

export default TemplateDetails;
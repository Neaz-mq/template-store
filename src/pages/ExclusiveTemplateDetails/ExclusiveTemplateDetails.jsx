import React, { useEffect, useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Free from "../Home/Free/Free";
import PresentationTemplate from "../Home/PresentationTemplate/PresentationTemplate";


const ExclusiveTemplateDetails = () => {
    const template = useLoaderData();
    const [selectedRevisions, setSelectedRevisions] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState("templateCustom");
    const [templates, setTemplates] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayedTemplates, setDisplayedTemplates] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1); // Add zoom level state
    const [isHovering, setIsHovering] = useState(false); // Hover state
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    
    const [selectedFiles, setSelectedFiles] = useState([]);

   

    useEffect(() => {
        if (template && template.picture && template.picture.length > 0) {
            setSelectedImage(template.picture[0]);
            setSelectedIndex(0);
        }
    }, [template]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling

            const handleWheel = (event) => {
                if (isHovering) { // Only zoom on hover
                    event.preventDefault();
                    setZoomLevel(prevZoom => {
                        const newZoom = prevZoom + (event.deltaY < 0 ? 0.1 : -0.1);
                        return Math.max(1, newZoom); // Ensure zoom level doesn't go below 1
                    });
                }
            };

            window.addEventListener('wheel', handleWheel, { passive: true });

            return () => {
                document.body.style.overflow = ''; // Re-enable scrolling
                window.removeEventListener('wheel', handleWheel);
            };
        }
    }, [isModalOpen, isHovering]);

    if (!template) {
        return <div>Loading...</div>;
    }

    const { _id, price, type, image, description, picture, specifications, product, files, revisions, documents } = template;

    const handleTemplateChange = (templateType) => {
        setSelectedTemplate(templateType);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleThumbnailClick = useCallback((src, index) => {
        setSelectedImage(src);
        setSelectedIndex(index);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
        setZoomLevel(1); // Reset zoom level on close
    };

    const handleRevisionChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedRevisions.includes(selectedValue)) {
            setSelectedRevisions([...selectedRevisions, selectedValue]);
        }
        e.target.value = ""; // Reset the select input
    };

    const handleFileChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedFiles.includes(selectedValue)) {
            setSelectedFiles([...selectedFiles, selectedValue]);
        }
        e.target.value = ""; // Reset the select input
    };


    const handleNextImage = () => {
        const nextIndex = (selectedIndex + 1) % picture.length;
        setSelectedImage(picture[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const prevIndex = (selectedIndex - 1 + picture.length) % picture.length;
        setSelectedImage(picture[prevIndex]);
        setSelectedIndex(prevIndex);
    };

    const zoomIn = () => {
        setZoomLevel(prev => prev + 0.1); // Increase zoom level
    };

    const zoomOut = () => {
        setZoomLevel(prev => Math.max(1, prev - 0.1)); // Decrease zoom level, but not below 1
    };

    const handleWheel = (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };


    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database

            const cartItem = {
                tempId: _id,
                email: user.email,
                type,
                image,
                price,
                description,
                specifications,
                product,
                files,
                revisions,
                documents
            }
            axiosSecure.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${type} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // refetch cart to update the cart items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Signed In",
                text: "Please signin to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/sign-in', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="bg-[#ffffff] font-raleway">
            <div className="container mx-auto">
                <Helmet>
                    <title>Prographr | Exclusive</title>
                    <meta
                        name="description"
                        content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more."
                    />
                    <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
                    <link rel="canonical" href="https://www.prographr.com/premium" />
                </Helmet>

                <div className="lg:ml-20 mb-16">
                    <div className="md:mt-14 flex lg:flex-row flex-col gap-6 ml-2">
                        <div className="w-[97%] 3xl:w-[45%] 2xl:w-[44%] ">
                            <h2 className="text-2xl text-[#2F1C6A] pb-5 md:pt-24 pt-14 font-medium font-roboto 3xl:ml-[9.3rem] 2xl:ml-[9.3rem] laptop:block">
                               Exclusive <strong>Graphics Template</strong>
                            </h2>
                            <div className="rounded-xl flex items-center justify-center pt-6 pb-4 lg:pl-2 lg:pr-4 mt-4 3xl:ml-[13.6rem] 3xl:-mr-36 2xl:ml-[9.5rem] desktop:-ml-52 2xl:-mr-20 3xl:-mt-7 2xl:-mt-7 desktop:-mt-7 laptop:-mt-7">
                                <div className="flex items-center justify-between lg:gap-16 gap-10 lg:my-8 lg:-mx-20">
                                    <LazyLoad height={200} offset={100}>
                                        <img
                                            src={selectedImage || image}
                                            className="3xl:max-h-[400px]  2xl:max-h-[370px] desktop:max-h-[340px] max-h-[200px] object-contain laptop:max-h-[200px] cursor-pointer"
                                            alt="Template"
                                            onClick={handleImageClick}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div className="w-full mt-6 flex flex-wrap gap-4 ml-2 lg:ml-0 3xl:ml-[9.3rem] 2xl:ml-[9.3rem] 3xl:-mt-5 2xl:-mt-5 desktop:-mt-5 laptop:-mt-5">
                                {picture.map((src, index) => (
                                    <LazyLoad key={index} height={75} offset={100}>
                                        <img
                                            src={src}
                                            className={`w-[75px] h-[75px] object-contain  p-3 cursor-pointer  ${selectedIndex === index ? 'bg-[#7666E3]' : 'bg-slate-50 hover:bg-[#7666E3]'}`}
                                            alt="Template"
                                            onClick={() => handleThumbnailClick(src, index)}
                                        />
                                    </LazyLoad>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-center 3xl:mt-44 2xl:mt-44 desktop:mt-44 mt-10 w-[60%] tablet:ml-16 desktop:-ml-10 laptop:mt-52 3xl:w-[68%] 3xl:ml-48 2xl:w-[37%] 2xl:ml-20" >
                                <div
                                    className={`border ${selectedTemplate === "templateCustom" ? "border-[#4864EC]" : "border-gray-400"
                                        }  p-8 lg:w-[80%] lg:h-[42%] w-[160%] h-[100%] lg:-ml-20 lg:mr-9 ml-28 cursor-pointer`}
                                    onClick={() => handleTemplateChange("templateCustom")}
                                >
                                    <div className="flex justify-between pb-3">
                                        <div className="flex gap-3 font-bold">
                                            <input className="radio radio-primary" type="radio" checked={selectedTemplate === "templateCustom"} readOnly />
                                            <h2 className="font-roboto">Template</h2>
                                        </div>
                                        <div className="font-roboto font-medium">${price}</div>
                                    </div>
                                    <div className="pt-2 border-t font-roboto font-medium">
                                        We are about pushing boundaries, exploring possibilities, and ultimately delivering designs
                                    </div>

                                 
                                </div>

                            </div>

                            <div className="flex flex-col items-center 3xl:mt-8 2xl:mt-44 desktop:mt-44 mt-10 w-[60%] tablet:ml-16 desktop:-ml-10 laptop:mt-52  3xl:w-[68%] 3xl:ml-48 2xl:w-[37%] 2xl:ml-20" >
                                <div
                                    className={`border ${selectedTemplate === "customizeTemplate" ? "border-[#4864EC]" : "border-gray-400"
                                        } p-8 lg:w-[80%] lg:h-[42%] w-[160%] h-[100%] lg:-ml-20 lg:mr-9 ml-28 cursor-pointer`}
                                    onClick={() => handleTemplateChange("customizeTemplate")}
                                >
                                    <div className="flex justify-between pb-3">
                                        <div className="flex gap-3 font-bold">
                                            <input className="radio radio-primary" type="radio" checked={selectedTemplate === "customizeTemplate"} readOnly />
                                            <h2 className="font-roboto">Template + Customization</h2>
                                        </div>
                                        <div className="font-roboto font-medium">$00</div>
                                    </div>
                                    <div className="pt-2 border-t font-roboto font-medium">

                                    </div>

                                    <div className="flex flex-col lg:flex-row items-center mt-4 -ml-6 lg:ml-0">
                                        <div className="flex items-center lg:mr-8 ml-6 lg:ml-0 mb-8 lg:mb-0">
                                            <div className="font-roboto  font-medium lg:mr-2 mr-8">Revisions:</div>
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
                                            <div className="font-roboto font-medium lg:ml-0  ml-10 mr-6">Files:</div>
                                            <select className="border rounded-md lg:px-3 py-2 lg:-ml-3 mr-10 -ml-3 lg:mr-0" onChange={handleFileChange}>
                                                <option value="">All Files</option>
                                                {files.map((file, index) => (
                                                    <option key={index} value={file} className={`option-${_id}`} >{file}</option>
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
                            <div className="ml-[12.5rem] mt-5">
                            <button onClick={handleAddToCart} className="p-3 bg-[#4864EC]  3xl:w-[34rem] 2xl:w-[30.2rem] desktop:w-[32.3rem] lg:w-[35rem] w-[17rem] tablet:w-[36rem]  text-white font-bold rounded-lg hover:bg-blue-700">
                                        Add to Cart
                                    </button>

                                    <a href="/exclusive">
                                        <button className="3xl:w-[34rem] 2xl:w-[30.2rem] desktop:w-[32.3rem] p-3 lg:w-[35rem] bg-gray-100 text-gray-600 font-bold w-[17rem] rounded-lg hover:bg-gray-200 tablet:w-[36rem] mt-4 ">
                                            Check more items
                                        </button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex lg:flex-row flex-col gap-12 3xl:ml-[9.3rem] 3xl:mr-[9rem] 2xl:ml-[9.3rem] 2xl:mr-[13rem]">
                        <div className="flex-1 lg:mb-8 ml-3">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-roboto">Description</h3>
                            <p className="text-gray-500 lg:w-[30rem] mt-2 overflow-hidden font-roboto leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <div className="flex-1 lg:mb-8 lg:-mr-16 ml-3 lg:ml-2">
                            <h3 className="text-xl text-[#2F1C6A] font-medium mb-2 font-roboto">Item Specifications</h3>
                            <ul className="text-gray-500 mt-1 font-roboto leading-6 list-disc ml-5">
                                {specifications.map((spec, index) => (
                                    <li key={index} className="mb-2">
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 lg:mb-8 lg:ml-14 lg:-mr-2 ml-3">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-roboto">Product Specs</h3>
                            <ul className="text-gray-500 mt-2 font-roboto leading-8 list-disc ml-5">
                                {product.map((spec, index) => (
                                    <li key={index}>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 lg:mr-1 ml-3 lg:ml-0">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-roboto">Documents Included</h3>
                            <div className="mt-2">
                                {documents.map((document, index) => (
                                    <p key={index} className="text-gray-500 mt-2 font-roboto leading-relaxed">
                                        {document}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                   
                    <div className="lg:py-4 py-2 3xl:mt-6 2xl:mt-6 desktop:mt-6 laptop:mt-6 tablet:mt-6 mt-24 3xl:w-[120%] 3xl:h-[27rem] h-[60rem] 2xl:h-[27rem] desktop:h-[27rem] 3xl:-ml-52 2xl:w-[116%] laptop:w-[120%] desktop:w-[110%] 2xl:-ml-44 laptop:-ml-48 laptop:h-[55rem] tablet:h-[55rem] desktop:-ml-28 ">
                    <Free></Free>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden">
                    <div
                        className="relative p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 3xl:p-2 overflow-hidden"
                        style={{
                            transform: `scale(${zoomLevel})`, // Apply zoom level to the modal container
                            transformOrigin: 'center', // Center the scaling
                            transition: 'transform 0.3s ease-out', // Smooth zoom transition
                        }}
                    >
                        {/* Modal Content */}

                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <img
                                src={selectedImage || image}
                                className="w-full h-auto max-h-screen object-contain rounded-lg"
                                alt="Template"
                            />

                            {/* Fixed Size Buttons */}
                            <button
                                className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-[5px] text-sm focus:outline-none"
                                onClick={closeModal}
                                style={{ zIndex: 10 }} // Ensure the close button is above other elements
                            >
                                &times;
                            </button>

                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-[5px] text-sm focus:outline-none"
                                onClick={handlePreviousImage}
                                style={{ zIndex: 10 }} // Ensure the button is above other elements
                            >
                                &lt;
                            </button>

                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-[5px] text-sm focus:outline-none"
                                onClick={handleNextImage}
                                style={{ zIndex: 10 }} // Ensure the button is above other elements
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
               
            )}

<PresentationTemplate></PresentationTemplate>


        </div>
    );
};

export default ExclusiveTemplateDetails;
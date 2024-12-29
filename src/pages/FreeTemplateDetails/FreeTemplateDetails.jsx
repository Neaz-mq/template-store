import React, { useEffect, useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import TemplateItem from "../Shared/TemplateItem/TemplateItem";
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PresentationTemplate from "../Home/PresentationTemplate/PresentationTemplate";


const FreeTemplateDetails = () => {
    const template = useLoaderData();
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
    const initialDisplayCount = 4;
    


    useEffect(() => {

        fetch('https://template-store-server.vercel.app/template')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                setDisplayedTemplates(data.slice(0, initialDisplayCount));
            });

        window.scrollTo(0, 0);
    }, []);

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

    const { _id, price, type, image, description, picture, specifications, product,  documents, records } = template;

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
                documents,
                records

            }
            axiosSecure.post('https://template-store-server.vercel.app/carts', cartItem)
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

        <div className="bg-[#ffffff] -mt-[4.5rem]">
            <div className="container mx-auto">
                <Helmet>
                    <title>Prographr | Free</title>
                    <meta
                        name="description"
                        content="Discover a wide range of templates for your creative projects at Template Store. Explore community ideas, guidelines, testimonials, and more."
                    />
                    <meta name="keywords" content="templates, creativity, community, guidelines, ideas, testimonials" />
                    <link rel="canonical" href="https://www.prographr.com/premium" />
                </Helmet>

                <div className="lg:ml-20 mb-16 3xl:-mt-14 2xl:-mt-14 desktop:-mt-14 laptop:-mt-14 tablet:-mt-36">
                    <div className="md:mt-14 flex lg:flex-row flex-col gap-6 ml-2">
                        <div className="w-[97%] 3xl:w-[68%] 2xl:w-[44%]">
                            <h2 className="text-2xl text-[#2F1C6A] pb-5 md:pt-24 pt-14 font-medium font-raleway 3xl:ml-[9.3rem] 2xl:ml-[9.3rem] desktop:ml-[0.5rem] laptop:block -mt-20 3xl:-mt-0 2xl:-mt-0 desktop:-mt-0 laptop:-mt-0 tablet:-mt-0">
                                Free <strong>Graphics Template</strong>
                            </h2>
                            <div className="rounded-xl flex items-center justify-center pt-6 pb-4 lg:pl-2 lg:pr-4 mt-4 3xl:ml-[8.4rem] 3xl:-mr-3 2xl:ml-[12rem] desktop:-ml-44 desktop:-mr-24 2xl:-mr-32 3xl:-mt-7 2xl:-mt-7 desktop:-mt-7 laptop:-mt-7 laptop:-ml-60">
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
                            <div className="w-full mt-6 flex flex-wrap gap-4 ml-2 lg:ml-0 3xl:ml-[9.3rem] 2xl:ml-[9.3rem] desktop:ml-2 3xl:-mt-5 2xl:-mt-5 desktop:-mt-5 laptop:-mt-5">
                                {picture.map((src, index) => (
                                    <LazyLoad key={index} height={75} offset={100}>
                                        <img
                                            src={src}
                                            className={`w-[75px] h-[75px] object-contain p-3 cursor-pointer  ${selectedIndex === index ? 'bg-[#4864EC]' : 'bg-slate-50 hover:bg-[#4864EC]'}`}
                                            alt="Template"
                                            onClick={() => handleThumbnailClick(src, index)}
                                        />
                                    </LazyLoad>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-center 3xl:mt-44 2xl:mt-44 desktop:mt-44 mt-10 w-[60%] tablet:ml-20 desktop:-ml-28 laptop:mt-44 3xl:w-[90%] 3xl:-ml-7 2xl:w-[60%] desktop:w-[130%] laptop:w-[150%] laptop:-ml-36 2xl:ml-44" >
                                <div
                                    className={`border ${selectedTemplate === "templateCustom" ? "border-[#4864EC]" : "border-gray-400"
                                    } rounded-[8px] 3xl:p-8 2xl:p-8 desktop:p-8 laptop:p-6 tablet:p-6 p-6 lg:w-[80%] lg:h-[42%] w-[160%] h-[100%] lg:-ml-20 lg:mr-9 ml-28 cursor-pointer`}
                                    onClick={() => handleTemplateChange("templateCustom")}
                                >
                                    <div className="flex justify-between pb-6 pt-3">
                                        <div className="flex gap-3 font-bold">
                                            <input className="radio radio-primary" type="radio" checked={selectedTemplate === "templateCustom"} readOnly />
                                            <h2 className="font-raleway">Template</h2>
                                        </div>
                                        <div className="font-raleway font-medium">${price}</div>
                                    </div>
                                    <div className="pt-6 border-t font-raleway font-medium pb-4">
                                        We are about pushing boundaries, exploring possibilities, and ultimately delivering designs
                                    </div>                         
                                </div>

                                   {/* Add to Cart button */}

                            <div className="3xl:ml-[1rem] 3xl:mt-16 2xl:-ml-[0.2rem] 2xl:mt-4 desktop:ml-[0.8rem] desktop:mt-4 laptop:ml-[2rem] tablet:ml-20 laptop:mt-4 tablet:mt-8 mt-6 ml-[5rem]">
                               <a href="/contact">
                               <button  className="p-3 bg-[#4864EC] 3xl:w-[34.8rem] 2xl:w-[25rem] desktop:w-[33rem] laptop:w-[20rem]  w-[14rem] tablet:w-[36rem] text-white font-bold rounded-lg hover:bg-blue-700 ml-8 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 tablet:ml-0">
                                    Contact Us
                                </button>
                               </a>

                                <a href="/free">
                                    <button className="3xl:w-[34.8rem] 2xl:w-[25rem] desktop:w-[33rem] p-3  laptop:w-[20rem] bg-gray-100 text-gray-600 font-bold w-[14rem] rounded-lg hover:bg-gray-200 tablet:w-[36rem] 3xl:mt-6 2xl:mt-5 desktop:mt-3 laptop:mt-3 tablet:mt-3 mt-4 ml-8 3xl:ml-0 2xl:ml-0 desktop:ml-0 laptop:ml-0 tablet:ml-0">
                                        Check more items
                                    </button>
                                </a>
                            </div>


                            </div>

                            
                        </div>
                    </div>
                    <div className="mt-20 flex lg:flex-row flex-col gap-12 3xl:ml-[9.3rem] 3xl:mr-[9rem] 2xl:ml-[9.3rem] 2xl:mr-[13rem]">
                        <div className="flex-1 lg:mb-8 ml-3">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-raleway">Description</h3>
                            <p className="text-gray-500 lg:w-[30rem] mt-2 overflow-hidden font-raleway leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <div className="flex-1 lg:mb-8 lg:-mr-16 ml-3 lg:ml-2">
                            <h3 className="text-xl text-[#2F1C6A] font-medium mb-2 font-raleway">Item Specifications</h3>
                            <ul className="text-gray-500 mt-1 font-raleway leading-6 list-disc ml-5">
                                {specifications.map((spec, index) => (
                                    <li key={index} className="mb-2">
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 lg:mb-8 lg:ml-14 lg:-mr-2 ml-3">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-raleway">Product Specs</h3>
                            <ul className="text-gray-500 mt-2 font-raleway leading-8 list-disc ml-5">
                                {product.map((spec, index) => (
                                    <li key={index}>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 lg:mr-1 ml-3 lg:ml-0">
                            <h3 className="text-xl text-[#2F1C6A] font-medium font-raleway">Documents Included</h3>
                            <div className="mt-2">
                                {documents.map((document, index) => (
                                    <p key={index} className="text-gray-500 mt-2 font-raleway leading-relaxed">
                                        {document}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="layout lg:py-20 py-12 mt-6">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="lg:text-4xl text-xl lg:-mt-8 text-[#2F1C6A] ml-3 lg:ml-4 font-medium font-raleway 3xl:ml-[9.3rem] 2xl:ml-[9.3rem] laptop:block">
                                Top Selling <strong>Graphics Templates</strong>
                            </h2>
                            <button className="btn hidden mr-20 md:ml-4 ml-20 font-raleway text-[#47435d] bg-transparent capitalize hover:bg-primary/10 rounded-full font-semibold gap-4 shadow-none p-3 pl-4 border-slate-700">
                                <span className="-mt-1">Printing and Advertising</span>
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path>
                                </svg>
                            </button>
                            <a href="/template">
                            <button
                            
                            className="mr-2 3xl:mr-[rem] 2xl:mr-44 desktop:mr-4 font-raleway text-[#4864EC] capitalize font-semibold gap-4 p-3 pl-4 flex items-center">
                            <span className="mt-1 text-[13px] 3xl:text-[15px] 2xl:text-[15px] desktop:text-[15px] laptop:text-[15px] tablet:text-[15px]">Explore more Template</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.5 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-.5z" />
                                <path d="M9.646 3.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.707L12.793 8 9.646 4.646a.5.5 0 0 1 0-.707z" />
                            </svg>
                        </button></a>
                        </div>
                        <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:mr-20 3xl:ml-36 3xl:mr-48 3xl:gap-x-2 3xl:gap-y-4 2xl:ml-36 2xl:mr-52 2xl:gap-x-2 2xl:gap-y-4" data-aos="lg:fade-right" data-aos-duration="700">
                            {displayedTemplates.map(item => (
                                <TemplateItem
                                    key={item._id}
                                    item={item}
                                />
                            ))}
                        </div>
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

export default FreeTemplateDetails;
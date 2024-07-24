import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import { RxUpload } from "react-icons/rx";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedFileTypes, setSelectedFileTypes] = useState([]);
    const [selectedPrintAndPublication, setSelectedPrintAndPublication] = useState([]);
    const [productTags, setProductTags] = useState([]);

    const onDrop = (acceptedFiles) => {
        setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const templateItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                details: data.details,
                image: res.data.data.display_url,
                descriptions: data.descriptions,
                specifications: data.specifications,
                product: data.product,
                files: selectedFiles,
                fileTypes: selectedFileTypes,
                printAndPublication: selectedPrintAndPublication,
                tags: productTags,
            };

            const templateRes = await axiosSecure.post('/template', templateItem);
            console.log(templateRes.data);

            if (templateRes.data.insertedId) {
                reset();
                setSelectedFiles([]);
                setSelectedFileTypes([]);
                setSelectedPrintAndPublication([]);
                setProductTags([]);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the template.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log('with image url', res.data);
    };

    const handleFileTypeChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedFileTypes.includes(selectedValue)) {
            setSelectedFileTypes([...selectedFileTypes, selectedValue]);
        }
        e.target.value = "";
    };

    const handlePrintAndPublicationChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedPrintAndPublication.includes(selectedValue)) {
            setSelectedPrintAndPublication([...selectedPrintAndPublication, selectedValue]);
        }
        e.target.value = "";
    };

    const handleTagChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !productTags.includes(selectedValue)) {
            setProductTags([...productTags, selectedValue]);
        }
        e.target.value = "";
    };

    const handleRemoveFileType = (fileType) => {
        setSelectedFileTypes(selectedFileTypes.filter(f => f !== fileType));
    };

    const handleRemovePrintAndPublication = (item) => {
        setSelectedPrintAndPublication(selectedPrintAndPublication.filter(f => f !== item));
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };

    const handleRemoveTag = (tag) => {
        setProductTags(productTags.filter(t => t !== tag));
    };

    return (
        <div>
            <div className='-mt-5'>
                <h2 className="-ml-3 lg:text-xl text-lg font-medium text-[#2F1C6A] mt-10 md:mt-0">Good day! Prographr</h2>
                <p className="text-gray-400 font-medium md:text-base text-sm -ml-3 mt-2">Wish you have less work today!</p>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Template Name */}
                    <div className="form-control w-full my-3 mr-3 -ml-3">
                        <input
                            type="text"
                            placeholder="Add Product title"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2">
                        {/* File Upload Section */}
                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-[81.5rem]">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Upload Your Files</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-6">
                                <div {...getRootProps({ className: 'dropzone border-gray-300 p-16 rounded-lg text-center cursor-pointer' })}>
                                    <input {...getInputProps()} />
                                    <RxUpload className="text-gray-700 text-4xl mx-auto" />
                                    <div className="mt-2 font-medium">
                                        Drag & Drop or <span className="text-blue-600 font-medium">Choose file</span> to Upload
                                    </div>
                                    <p className="text-gray-400 mt-1">.psd, .ai, .indd</p>
                                </div>
                            </div>


                            <div className="mt-10 max-h-32 overflow-y-auto mx-3">
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md mt-2">
                                        <span className="text-gray-700">{file.name}</span>
                                        <FontAwesomeIcon icon={faTimes} onClick={() => handleRemoveFile(file)} className="cursor-pointer text-gray-500" />
                                    </div>
                                ))}
                            </div>

                            {/* Files Included */}
                            <div className="form-control w-full lg:my-6">
                                <select className="select select-bordered mx-4" onChange={handleFileTypeChange}>
                                    <option value="">Select files</option>
                                    <option value="Adobe Illustrator">Adobe Illustrator</option>
                                    <option value="Adobe Photoshop">Adobe Photoshop</option>
                                    <option value="Microsoft PowerPoint">Microsoft PowerPoint</option>
                                    <option value="Canva">Canva</option>
                                    <option value="Figma">Figma</option>
                                    <option value="Adobe InDesign">Adobe InDesign</option>
                                    <option value="Microsoft Word">Microsoft Word</option>
                                    <option value="Google Slides">Google Slides</option>
                                    <option value="Keynote">Keynote</option>
                                </select>
                            </div>
                            <div className="mt-4 flex flex-wrap mx-4">
                                {selectedFileTypes.map((fileType, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                        <span>{fileType}</span>
                                        <button onClick={() => handleRemoveFileType(fileType)} className="ml-2">
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Set Price Section */}
                        <div className="  bg-white w-full my-5 py-3 rounded-lg mr-2  h-[55rem]">
                            <div>
                                <h2 className="p-4 -mt-1 font-medium text-lg">Set Price</h2>
                            </div>
                            <div className="form-control w-full lg:my-6">
                                <select className="select select-bordered mx-2 mr-2 " onChange={handlePrintAndPublicationChange}>
                                    <option value="">Print and Publication</option>
                                    <option value="All Files">All Files</option>
                                    <option value="Adobe Illustrator">Adobe Illustrator</option>
                                    <option value="Adobe Photoshop">Adobe Photoshop</option>
                                    <option value="Adobe InDesign">Adobe InDesign</option>
                                    <option value="Canva">Canva</option>
                                    <option value="Microsoft PowerPoint">Microsoft PowerPoint</option>
                                    <option value="Microsoft Word">Microsoft Word</option>
                                    <option value="Google Slides">Google Slides</option>
                                    <option value="Keynote">Keynote</option>
                                    <option value="Figma">Figma</option>
                                </select>
                            </div>
                            <div className="mt-4 mx-4">
                                {selectedPrintAndPublication.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center mb-2">
                                        <span>{item}</span>
                                        <span className="bg-white border px-7 py-1 rounded-md ml-28 mb-2 mt-3">${getPrice(item)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Descriptions Section */}
                        <div className=" bg-white w-[18.9rem] my-5 py-3 rounded-lg h-[28rem]">

                            <div className="form-control w-full my-3">
                                <textarea
                                    placeholder="Descriptions"
                                    {...register('descriptions', { required: true })}
                                    required
                                    className="textarea -mt-5  w-full h-[27.5rem]" />
                            </div>
                        </div>

                        {/* specifications */}

                        <div className="  bg-white w-[18.9rem] my-5 py-3 rounded-lg h-[22.2rem] ml-[40.5rem] -mt-[24.2rem]">

                            <div className="form-control w-full my-3">
                                <textarea {...register('specifications')} className="textarea  -mt-5  w-full h-[21.5rem]" placeholder="Specifications"></textarea>
                            </div>
                        </div>

                        {/* specifications */}

                        <div className=" bg-white w-[18.9rem] my-5 py-3 rounded-lg h-[28rem] ml-[20.2rem] -mt-[53.7rem]">

                            <div className="form-control w-full my-3">
                                <textarea {...register('specifications')} className="textarea  -mt-5  w-full h-[27.5rem]" placeholder="Product Specifications"></textarea>
                            </div>
                        </div>

                    </div>



                    {/* Additional Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[39.9rem] h-[25.2rem] ml-[19.7rem] -mt-[27rem] h  ">
                        {/* Add Product Tags Section */}
                        <div className="bg-white w-full py-2 rounded-lg">
                            <div>
                                <h2 className="p-6 font-medium">Add Product Tags</h2>
                            </div>
                            <div className="form-control w-full lg:my-6">
                                <select className="select select-bordered mx-4" onChange={handleTagChange}>
                                    <option value="">Add product tags</option>
                                    <option value="Print and Publication">Print and Publication</option>
                                    <option value="Brochure">Brochure</option>
                                    <option value="Flyer">Flyer</option>
                                    <option value="Poster">Poster</option>
                                    <option value="Business Card">Business Card</option>
                                    <option value="Menu">Menu</option>
                                   
                                </select>
                            </div>
                            <div className="mt-4 flex flex-wrap mx-4">
                                {productTags.map((tag, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                        <span>{tag}</span>
                                        <button onClick={() => handleRemoveTag(tag)} className="ml-2">
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Submission Buttons */}
                    <div className="flex justify-between items-center  gap-2 mt-6">
                        <button type="button" className="btn bg-white rounded-lg px-24 mr-2 -ml-2  ">Update</button>
                        <button type="button" className="btn bg-white rounded-lg px-24 -ml-5">Save all changes</button>
                        <button type="button" className="btn  bg-white rounded-lg px-20 -ml-2">Close</button>
                        <button type="submit" className="btn 
                        bg-[#7666E4] hover:bg-blue-800 border-0 text-white rounded-lg px-16 -ml-2 mr-2">Publish</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTemplates;

// Function to get the price based on the selected print and publication option
const getPrice = (item) => {
    switch (item) {
        case "All Files":
            return "60";
        case "Adobe Illustrator":
            return "20";
        case "Adobe Photoshop":
            return "20";
        case "Adobe InDesign":
            return "40";
        case "Canva":
            return "60";
        case "Microsoft PowerPoint":
            return "60";
        case "Microsoft Word":
            return "60";
        case "Google Slides":
            return "60";
        case "Keynote":
            return "60";
        case "Figma":
            return "40";
        default:
            return "";
    }
};


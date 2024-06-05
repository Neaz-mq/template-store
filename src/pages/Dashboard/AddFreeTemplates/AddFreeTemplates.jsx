import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { HiTemplate } from "react-icons/hi";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFreeTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedRevisions, setSelectedRevisions] = useState([]);

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const templateItemFree = {
                name: data.name,
                category: data.category,
                price: data.price,
                details: data.details,
                image: res.data.data.display_url,
                descriptions: data.descriptions,
                specifications: data.specifications,
                product: data.product,
                files: selectedFiles,
                revisions: selectedRevisions,
            }
            // 
            const templateFreeRes = await axiosSecure.post('/free', templateItemFree);
            console.log(templateFreeRes.data)
            if (templateFreeRes.data.insertedId) {
                // show success popup
                reset();
                setSelectedFiles([]); // Reset the selected files
                setSelectedRevisions([]); // Reset the selected revisions
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the template`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    const handleFileChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedFiles.includes(selectedValue)) {
            setSelectedFiles([...selectedFiles, selectedValue]);
        }
        e.target.value = ""; // Reset the select input
    };
    const handleRevisionChange = (e) => {
        const selectedRate = e.target.value;
        if (selectedRate && !selectedRevisions.includes(selectedRate)) {
            setSelectedRevisions([...selectedRevisions, selectedRate]);
        }
        e.target.value = ""; // Reset the select input
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };

    const handleRemoveRevision = (revision) => {
        setSelectedRevisions(selectedRevisions.filter(f => f !== revision));
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Add Free Template</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Template Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Template Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* category */}
                        <div className="form-control w-full lg:my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="agency">Agency</option>
                                <option value="ecommerce">Ecommerce</option>
                                <option value="business">Business</option>
                                <option value="portfolio">Portfolio</option>

                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full lg:my-6 my-3">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Template Details</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>

                    {/* descriptions */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <textarea {...register('descriptions')} className="textarea textarea-bordered h-24 " placeholder="Descriptions"></textarea>
                    </div>

                    {/* specifications */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Specifications</span>
                        </label>
                        <textarea {...register('specifications')} className="textarea textarea-bordered h-24" placeholder="Specifications"></textarea>
                    </div>

                    {/* product Specs */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Specifications</span>
                        </label>
                        <textarea {...register('product')} className="textarea textarea-bordered h-24" placeholder="Product Specifications"></textarea>
                    </div>

                    {/* Revisions */}

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Revisions*</span>
                            </label>
                            <select className="select select-bordered w-full" onChange={handleRevisionChange}>
                                <option value="">Select Revisions</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap">
                        {selectedRevisions.map((revision, index) => (
                            <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                <span>{revision}</span>
                                <button onClick={() => handleRemoveRevision(revision)} className="ml-2">
                                    <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Files Included */}

                    <div className="flex gap-6">
                        <div className="form-control w-full lg:my-6">
                            <label className="label">
                                <span className="label-text">Files Included*</span>
                            </label>
                            <select className="select select-bordered w-full" onChange={handleFileChange}>
                                <option value="">Select files</option>
                                <option value="Adobe Illustrator">Adobe Illustrator</option>
                                <option value="Adobe Photoshop">Adobe Photoshop</option>
                                <option value="Microsoft PowerPoint">Microsoft PowerPoint</option>
                                <option value="Canva">Canva</option>
                                <option value="Figma">Figma</option>
                                <option value="Adobe InDesign">Adobe InDesign</option>
                                <option value="Microsoft Word">Microsoft Word</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="flex items-center border rounded-md px-4 py-2 mr-2 mb-2">
                                <span>{file}</span>
                                <button onClick={() => handleRemoveFile(file)} className="ml-2">
                                    <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Template <HiTemplate className="ml-4"></HiTemplate>
                    </button>
                </form>
            </div>
        </div>
    );
};


export default AddFreeTemplates;
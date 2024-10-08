import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddExclusiveTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [mainImageUrl, setMainImageUrl] = useState("");
    const [pictureUrls, setPictureUrls] = useState([]);
    const [currentPictureUrl, setCurrentPictureUrl] = useState("");
    const [selectedRevisions, setSelectedRevisions] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedPackages, setSelectedPackages] = useState([]);

    const addPictureUrl = () => {
        if (currentPictureUrl.trim() !== "") {
            setPictureUrls([...pictureUrls, currentPictureUrl.trim()]);
            setCurrentPictureUrl(""); // Clear the input field after adding
        }
    };

    const removePictureUrl = (indexToRemove) => {
        setPictureUrls(pictureUrls.filter((_, index) => index !== indexToRemove));
    };

    const onSubmit = async (data) => {
        // Convert fields to arrays
        const specificationsArray = data.specifications.split('\n').map(item => item.trim()).filter(item => item);
        const productArray = data.product.split('\n').map(item => item.trim()).filter(item => item);
        const documentsArray = data.documents.split('\n').map(item => item.trim()).filter(item => item);

        // Prepare the template item
        const templateItem = {
            type: data.type,
            category: data.category,
            price: parseFloat(data.price),
            image: mainImageUrl,
            description: data.description,
            specifications: specificationsArray,
            product: productArray,
            documents: documentsArray,
            picture: pictureUrls,
            revisions: selectedRevisions,
            files: selectedFiles,
            packages: selectedPackages,
            
        };

        try {
            const templateRes = await axiosSecure.post('/exclusive', templateItem);
            if (templateRes.data.insertedId) {
                // Show success popup
                reset();
                setMainImageUrl(""); // Clear the main image URL
                setPictureUrls([]); // Clear the picture URLs
                setSelectedRevisions([]);
                setSelectedFiles([]);
                setSelectedPackages([]);
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${data.type} has been added as a template.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error adding template:", error);
            Swal.fire({
                position: "middle",
                icon: "error",
                title: "Failed to add template.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleFileChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedFiles.includes(selectedValue)) {
            setSelectedFiles([...selectedFiles, selectedValue]);
        }
        e.target.value = ""; // Reset the select input
    };

    const handlePackageChange = (e) => {
        const selectedPrice = e.target.value;
        if (selectedPrice && !selectedPackages.includes(selectedPrice)) {
            setSelectedPackages([...selectedPackages, selectedPrice]);
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

    const handleRemoveRevision = (revision) => {
        setSelectedRevisions(selectedRevisions.filter(f => f !== revision));
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };

    const handleRemovePackage = (pack) => {
        setSelectedPackages(selectedPackages.filter(f => f !== pack));
    };

    return (
        <div>
            <div className='mt-5'>
                <h2 className="-ml-3 lg:text-xl text-lg font-medium text-[#2F1C6A] mt-10 md:mt-0">Good day! Prographr</h2>
                <p className="text-gray-400 font-medium md:text-base text-sm -ml-3 mt-2">Wish you have less work today!</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-3 mr-3 -ml-3">
                        <input
                            type="text"
                            placeholder="Add Product title"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2 w-full h-auto">
                        {/* Main Image URL Section */}
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Main Image</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3">
                                <input
                                    type="url"
                                    placeholder="Enter image URL"
                                    value={mainImageUrl}
                                    onChange={(e) => setMainImageUrl(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                                {mainImageUrl && (
                                    <div className="mt-4 flex justify-center">
                                        <img
                                            src={mainImageUrl}
                                            alt="Main Preview"
                                            className="w-64 h-64 object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Additional Images URLs Section */}
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Additional Image</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3">
                                <input
                                    type="url"
                                    placeholder="Enter additional image URL"
                                    value={currentPictureUrl}
                                    onChange={(e) => setCurrentPictureUrl(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                                <button
                                    type="button"
                                    onClick={addPictureUrl}
                                    className="btn btn-sm mt-2"
                                >
                                    Add Image URL
                                </button>
                            </div>

                            {/* Preview and Remove Buttons for Additional Image URLs */}
                            <div className="flex flex-wrap gap-4">
                                {pictureUrls.map((url, index) => (
                                    <div key={index} className="relative">
                                        <img src={url} alt={`Selected ${index + 1}`} className="w-32 h-32 object-cover rounded ml-4" />
                                        <button
                                            type="button"
                                            onClick={() => removePictureUrl(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Files Included */}
                            <div className="flex pb-36 gap-6">
                                <div className="form-control w-full mt-10 px-2">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg ">Files attached*</span>
                                    </label>
                                    <select className="select select-bordered w-full " onChange={handleFileChange}>
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
                            <div className="-mt-28 flex pb-36 flex-wrap ml-2">
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 mr-2 mb-2">
                                        <span>{file}</span>
                                        <button onClick={() => handleRemoveFile(file)} className="ml-2">
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Packages Included */}
                            <div className="flex pb-36 gap-6">
                                <div className="form-control w-full mt-10 px-2">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg ">Packages attached*</span>
                                    </label>
                                    <select className="select select-bordered w-full " onChange={handlePackageChange}>
                                        <option value="">Select Packages</option>
                                        <option value="Basic Packages $3">Basic Packages $3</option>
                                        <option value="Standard Packages $5">Standard Packages $5</option>
                                        <option value="Premium Packages $7">Premium Packages $7</option>
                                    </select>
                                </div>
                            </div>
                            <div className="-mt-28 flex pb-36 flex-wrap ml-2">
                                {selectedPackages.map((pack, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 mr-2 mb-2">
                                        <span>{pack}</span>
                                        <button onClick={() => handleRemovePackage(pack)} className="ml-2">
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>




                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                            <div>
                                <h2 className="p-4 -mt-1 font-medium text-lg">Category*</h2>
                            </div>
                            <div className="form-control w-full lg:my-4 px-3 h-auto">
                                <select
                                    defaultValue="default"
                                    {...register('category', { required: true })}
                                    className="select select-bordered w-full h-auto"
                                >
                                    <option disabled value="default">Select a category</option>
                                    <option value="agency">Agency</option>
                                    <option value="business">Business</option>
                                    <option value="medical">Medical</option>
                                    <option value="construction">Construction</option>
                                    <option value="financial">Financial</option>
                                    <option value="food">Food</option>
                                    <option value="portfolio">Portfolio</option>
                                    <option value="education">Education</option>
                                    <option value="environment">Environment</option>
                                </select>

                                {/* Price */}
                                <div className="form-control w-full mt-60 h-auto">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Price*</span>
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01" // Allow decimal values
                                        placeholder="Price"
                                        {...register('price', { required: true })}
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Revisions */}

                                <div className="flex gap-6  pb-32 pt-16 ">
                                    <div className="form-control w-full my-10 h-auto">
                                        <label className="label">
                                            <span className="label-text font-medium text-lg">Revisions*</span>
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

                                <div className="-mt-24 pb-20 flex flex-wrap">
                                    {selectedRevisions.map((revision, index) => (
                                        <div key={index} className="flex items-center border rounded-md px-4  mr-2 mb-2">
                                            <span>{revision}</span>
                                            <button onClick={() => handleRemoveRevision(revision)} className="ml-2">
                                                <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                            {/* Descriptions */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Description</span>
                                </label>
                                <textarea
                                    {...register('description')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Specifications */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Item Specifications (one per line)</span>
                                </label>
                                <textarea
                                    {...register('specifications')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Specifications"
                                ></textarea>
                            </div>

                            {/* Product Specifications */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Product Specifications (one per line)</span>
                                </label>
                                <textarea
                                    {...register('product')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Product Specifications"
                                ></textarea>
                            </div>

                            {/* Documents Included */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Documents Included (one per line)</span>
                                </label>
                                <textarea
                                    {...register('documents')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Documents"
                                ></textarea>
                            </div>

                        </div>
                    </div>

                    <button className="btn mt-6 hover:bg-[#7666E3] px-20 bg-[#9A8EE8] text-white">
                        Publish
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddExclusiveTemplates;
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const UpdateFreeTemplate = () => {
    const {
        type,
        category,
        description,
        specifications,
        product,
        documents,
        files,
        picture,
        price,
        revisions,
        image,
        _id
    } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(image);
    const [additionalImages, setAdditionalImages] = useState(picture || []);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newAdditionalImageUrl, setNewAdditionalImageUrl] = useState('');
    const axiosPublic = useAxiosPublic();
    const [selectedFiles, setSelectedFiles] = useState(files || []);
    const [selectedRevisions, setSelectedRevisions] = useState(revisions || []);
    const [newRevision, setNewRevision] = useState('');  // New state for revision
    const axiosSecure = useAxiosSecure();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        const specificationsArray = data.specifications.split('\n').filter(spec => spec.trim() !== '');
        const productArray = data.product.split('\n').filter(prod => prod.trim() !== '');
        const documentsArray = data.documents.split('\n').map(item => item.trim()).filter(item => item);

        const filesArray = selectedFiles;
        const revisionsArray = selectedRevisions;

        const templateItem = {
            type: data.type,
            category: data.category,
            price: data.price,
            image: imageUrl,  // Use the main image URL
            picture: additionalImages, // Use the additional image URLs
            description: data.description,
            specifications: specificationsArray,
            product: productArray,
            documents: documentsArray,
            files: selectedFiles,
            revisions: selectedRevisions
        };

        const templateRes = await axiosSecure.patch(`/free/${_id}`, templateItem);
        if (templateRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "middle",
                icon: "success",
                title: `${data.type} is updated in the template`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "middle",
                icon: "error",
                title: `Failed to update ${data.type}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleAddAdditionalImage = () => {
        if (newAdditionalImageUrl.trim()) {
            setAdditionalImages([...additionalImages, newAdditionalImageUrl.trim()]);
            setNewAdditionalImageUrl('');  // Clear the input field
        }
    };

    const handleRemoveAdditionalImage = (url) => {
        setAdditionalImages(additionalImages.filter(img => img !== url));
    };


    const handleAddFile = (event) => {
        const selectedFile = event.target.value;
        if (selectedFile && !selectedFiles.includes(selectedFile)) {
            setSelectedFiles([...selectedFiles, selectedFile]);
        }
    };

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };


    const handleAddRevision = (event) => {
        const selectedRevision = event.target.value;
        if (selectedRevision && !selectedRevisions.includes(selectedRevision)) {
            setSelectedRevisions([...selectedRevisions, selectedRevision]);
        }
    };

    const handleRemoveRevision = (revision) => {
        setSelectedRevisions(selectedRevisions.filter(r => r !== revision));
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
                            defaultValue={type}
                            placeholder="Add Product title"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2 w-full h-auto">
                        {/* File Upload Section for Main Image */}
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Main Image URL</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-6">
                                <input
                                    type="url"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="Enter main image URL"
                                    className="input input-bordered w-full"
                                />
                                {imageUrl && (
                                    <div className="relative mt-4 flex items-center justify-center">
                                        <img
                                            src={imageUrl}
                                            alt="Main"
                                            className="w-80 object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Additional Image URLs */}
                            <div>
                                <div>
                                    <h2 className="p-4 font-medium text-lg">Additional Image URLs</h2>
                                </div>
                                <div className="form-control w-full my-3 px-3">
                                    <input
                                        type="url"
                                        value={newAdditionalImageUrl}
                                        onChange={(e) => setNewAdditionalImageUrl(e.target.value)}
                                        placeholder="Enter additional image URL"
                                        className="input input-bordered w-full"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddAdditionalImage}
                                        className="btn mt-2 hover:bg-[#4864EC] bg-[#4864EC] text-white"
                                    >
                                        Add Image
                                    </button>
                                </div>
                                {/* Preview Additional Images */}
                                <div className="flex flex-wrap gap-4 p-4">
                                    {additionalImages.map((pic, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={pic}
                                                alt={`Picture ${index}`}
                                                className="w-24 h-24 object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveAdditionalImage(pic)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Files Included */}
                            <div className="flex pb-36 gap-6">
                                <div className="form-control w-full mt-10 px-2">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg ">Files attached*</span>
                                    </label>
                                    <select defaultValue={selectedFiles}
                                        {...register('files', { required: true })}
                                        onChange={handleAddFile}  // Attach the function to the select element
                                        className="select select-bordered w-full h-auto">
                                        <option value="default">Select files</option>
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
                            {/* Displaying Selected Files */}
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

                        </div>

                        {/* Category and Price */}
                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                            <div>
                                <h2 className="p-4 -mt-1 font-medium text-lg">Category*</h2>
                            </div>
                            <div className="form-control w-full lg:my-4 px-3 h-auto">
                                <select
                                    defaultValue={category}
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
                            </div>

                             {/* Price */}
                             <div className="form-control w-full my-72 h-auto px-3">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Price*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={price}
                                    placeholder="Price"
                                    {...register('price', { required: true })}
                                    className="input input-bordered w-full"
                                />
                            </div>
                       
                            {/* Revisions */}

                            <div className="flex gap-6  pb-32 pt-16">
                                <div className="form-control w-full my-10 h-auto px-3">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Revisions*</span>
                                    </label>
                                    <select
                                        defaultValue={selectedRevisions}
                                        {...register('revisions', { required: true })}
                                        onChange={handleAddRevision}
                                        className="select select-bordered w-full h-auto "
                                    >
                                        <option value="default">Select Revisions</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>
                                </div>
                            </div>
                            {/* Displaying Selected Revisions */}
                            <div className="-mt-24 pb-20 flex flex-wrap ml-4">
                                {selectedRevisions.map((revision, index) => (
                                    <div key={index} className="flex items-center border rounded-md px-4 mr-2 mb-2">
                                        <span>{revision}</span>
                                        <button onClick={() => handleRemoveRevision(revision)} className="ml-2">
                                            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Descriptions, Specifications, Product Specifications, Files Included */}
                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                            {/* Descriptions */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Description</span>
                                </label>
                                <textarea
                                    defaultValue={description}
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
                                    defaultValue={specifications.join('\n')}
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
                                    defaultValue={product.join('\n')}
                                    {...register('product')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Product Specifications"
                                ></textarea>
                            </div>

                            {/* Files Included */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Files Included (one per line)</span>
                                </label>
                                <textarea
                                    defaultValue={documents.join('\n')}
                                    {...register('documents')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Files Included"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="">
                        <button
                            type="submit"
                            className="btn mt-6 hover:bg-[#4864EC] bg-[#4864EC] text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Updating...' : 'Update Template'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default UpdateFreeTemplate;

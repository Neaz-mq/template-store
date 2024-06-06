import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateFreeTemplate = () => {

    const { name, category, details, descriptions, specifications, product, revisions, files, image, price, _id } = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedFiles, setSelectedFiles] = useState(files || []);
    const [selectedRevisions, setSelectedRevisions] = useState(revisions || []);
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setSelectedFiles(files || []);
        setSelectedRevisions(revisions || []);
    }, [files, revisions]);


    const onSubmit = async (data) => {
        setIsLoading(true);
        let imageUrl = image;

        if (data.image && data.image.length > 0) {
            const formData = new FormData();
            formData.append('image', data.image[0]);
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

        const templateItem = {
            name: data.name,
            category: data.category,
            price: data.price,
            details: data.details,
            image: imageUrl,
            descriptions: data.descriptions,
            specifications: data.specifications,
            product: data.product,
            files: selectedFiles,
            revisions: selectedRevisions,
        };

        const templateRes = await axiosSecure.patch(`/free/${_id}`, templateItem);
        if (templateRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated in the template`,
                showConfirmButton: false,
                timer: 1500
            });
        }

        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Failed to update ${data.name}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        setIsLoading(false);
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

        <div className="container mx-auto px-4">

            <h2 className="text-3xl text-center font-bold mb-10">Update Free Templates</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Template Name*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={name}
                        placeholder="Template Name"
                        {...register('name', { required: 'Template Name is required' })}
                        required
                        className="input input-bordered w-full"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select
                            defaultValue={category}
                            {...register('category', { required: 'Category is required' })}
                            className="select select-bordered w-full"
                        >
                            <option disabled value="default">Select a category</option>
                            <option value="agency">Agency</option>
                            <option value="ecommerce">Ecommerce</option>
                            <option value="business">Business</option>
                            <option value="portfolio">Portfolio</option>
                        </select>
                        {errors.category && <span className="text-red-500">{errors.category.message}</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={price}
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        defaultValue={details}
                        {...register('details')}
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Details"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Descriptions</span>
                    </label>
                    <textarea
                        defaultValue={descriptions}
                        {...register('descriptions')}
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Descriptions"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item Specifications</span>
                    </label>
                    <textarea
                        defaultValue={specifications}
                        {...register('specifications')}
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Specifications"
                    ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Specifications</span>
                    </label>
                    <textarea
                        defaultValue={product}
                        {...register('product')}
                        className="textarea textarea-bordered w-full h-24"
                        placeholder="Product Specifications"
                    ></textarea>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Revisions*</span>
                        </label>
                        <select
                            defaultValue=""
                            className="select select-bordered w-full"
                            onChange={handleRevisionChange}
                        >
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

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Files Included*</span>
                        </label>
                        <select
                            defaultValue=""
                            className="select select-bordered w-full"
                            onChange={handleFileChange}
                        >
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
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <div className="flex flex-col lg:flex-row items-center">
                        {image && (
                            <div className="mr-4 mb-4 lg:mb-0">
                                <img src={image} alt="Template Preview" className="max-w-xs max-h-48" />
                            </div>
                        )}
                        <input
                            {...register('image')}
                            type="file"
                            className="file-input w-full lg:w-auto"
                        />
                    </div>
                </div>
                <button type="submit" className="btn w-full lg:w-auto" disabled={isLoading}>
                    {isLoading ? 'Updating...' : 'Update Free Template'}
                </button>
            </form>

        </div>
    );
};

export default UpdateFreeTemplate;

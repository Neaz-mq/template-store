import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateTemplate = () => {

    const {
        type,
        category,
        description,
        specifications,
        product,
        files,
        image,
        picture,
        price,
        _id
    } = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const [selectedFiles, setSelectedFiles] = useState(files || []);   
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

  

    const onSubmit = async (data) => {
        setIsLoading(true);
        let imageUrl = image;

        if (data.image && data.image.length > 0) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

        const templateItem = {
            type: data.type,
            category: data.category,
            price: parseFloat(data.price),
            image: imageUrl,
            picture: pictureUrl,
            description: data.description,
            specifications: data.specifications,
            product: data.product,
            files: selectedFiles,
            
        };

        const templateRes = await axiosSecure.patch(`/template/${_id}`, templateItem);
        if (templateRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.type} is updated in the template`,
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

   

    const handleRemoveFile = (file) => {
        setSelectedFiles(selectedFiles.filter(f => f !== file));
    };

   

    return (

        <div className="container mx-auto px-4">

            <h2 className="text-3xl text-center font-bold mb-10">Update Premium Templates</h2>

            <div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Template Name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Template Type*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={type}
                            placeholder="Template Type"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* category */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register('category', { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option disabled value="default">Select a category</option>
                                <option value="agency">Agency</option>
                                <option value="business">Business</option>
                                <option value="medical">Medical</option>
                                <option value="construction">Construction</option>
                                <option value="financial">Financial</option>
                                <option value="food">Food</option>
                                <option value="portfolio">Portfolio</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                   

                    {/* descriptions */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            defaultValue={description}
                            {...register('description')}
                            className="textarea textarea-bordered w-full h-24"
                            placeholder="Descriptions"
                        ></textarea>
                    </div>

                    {/* specifications */}
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

                    {/* Product */}
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


                    {/* Files Included */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Files Included*</span>
                            </label>
                            <select
                                defaultValue=""
                                className="select select-bordered w-full"
                                onChange={handleFileChange}
                            >
                                <option value="">Select files</option>
                                <option value=".AI">.AI</option>
                                <option value=".EPS">.EPS</option>
                                <option value=".PSD">.PSD</option>
                                <option value="Canva">Canva</option>
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

                    {/* Image */}
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
                        {isLoading ? 'Updating...' : 'Update Template'}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default UpdateTemplate;


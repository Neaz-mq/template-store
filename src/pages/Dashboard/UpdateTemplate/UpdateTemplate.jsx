import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState, useEffect } from 'react';
import { RxUpload } from 'react-icons/rx';
import { useDropzone } from 'react-dropzone';


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
        picture,
        price,
        image,
        _id
    } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const [newImage, setNewImage] = useState(null);
    const [newPictures, setNewPictures] = useState([]);
    const [existingPictures, setExistingPictures] = useState(picture);
    const [imageURLs, setImageURLs] = useState([]); // Object URLs for new pictures
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // Clean up object URLs when the component unmounts
        return () => {
            imageURLs.forEach(url => URL.revokeObjectURL(url));
        };
    }, [imageURLs]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        let imageUrl = image;
        let updatedPictures = [...existingPictures];

        if (newImage) {
            const imageFile = new FormData();
            imageFile.append('image', newImage);
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

        if (newPictures.length > 0) {
            for (let i = 0; i < newPictures.length; i++) {
                const pictureFile = new FormData();
                pictureFile.append('image', newPictures[i]);
                const res = await axiosPublic.post(image_hosting_api, pictureFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                if (res.data.success) {
                    updatedPictures.push(res.data.data.display_url);
                }
            }
        }

        const specificationsArray = data.specifications.split('\n').filter(spec => spec.trim() !== '');
        const productArray = data.product.split('\n').filter(prod => prod.trim() !== '');
        const filesArray = data.files.split('\n').filter(file => file.trim() !== '');

        const templateItem = {
            type: data.type,
            category: data.category,
            price: parseFloat(data.price),
            image: imageUrl,
            picture: updatedPictures,
            description: data.description,
            specifications: specificationsArray,
            product: productArray,
            files: filesArray,
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
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Failed to update ${data.type}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        setIsLoading(false);
    };

    const onDropMainImage = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setNewImage(file);
        }
    };

    const onDropNewPictures = (acceptedFiles) => {
        setNewPictures((prevPictures) => [...prevPictures, ...acceptedFiles]);

        // Create object URLs for new pictures
        setImageURLs((prevURLs) => [
            ...prevURLs,
            ...acceptedFiles.map((file) => URL.createObjectURL(file)),
        ]);
    };

    const { getRootProps: getRootPropsMain, getInputProps: getInputPropsMain } = useDropzone({
        onDrop: onDropMainImage,
        accept: 'image/jpeg, image/png',
        maxFiles: 1,
    });


    const { getRootProps: getRootPropsPictures, getInputProps: getInputPropsPictures } = useDropzone({
        onDrop: onDropNewPictures,
        accept: 'image/jpeg, image/png',
        multiple: true,
    });



  
    const handleRemovePicture = (url) => {
        setExistingPictures(existingPictures.filter(pic => pic !== url));
    };

    const handleRemoveNewPicture = (index) => {
        setNewPictures(newPictures.filter((_, i) => i !== index));
        setImageURLs(imageURLs.filter((_, i) => i !== index));
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
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Upload Your Files</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-6">
                                <div {...getRootPropsMain()} className="dropzone border-gray-300 p-16 rounded-lg text-center cursor-pointer">
                                    <input {...getInputPropsMain()} className="hidden" />
                                    <RxUpload className="text-gray-700 text-4xl mx-auto" />
                                    <div className="mt-2 font-medium">
                                        Drag & Drop or <span className="text-blue-600 font-medium">Choose file</span> to Upload
                                    </div>
                                    <p className="text-gray-400 mt-1">jpg, jpeg, png</p>
                                </div>
                            </div>
                            <div className="relative mt-4 flex items-center justify-center">
                                <img
                                    id="mainImagePreview"
                                    src={newImage ? URL.createObjectURL(newImage) : image}
                                    alt="Preview"
                                    className="w-80 object-cover"
                                />
                            </div>

                            {/* Additional Images */}
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-16">
                                <div {...getRootPropsPictures()} className="dropzone border-gray-300 p-16 rounded-lg text-center cursor-pointer">
                                    <input {...getInputPropsPictures()} className="hidden" />
                                    <RxUpload className="text-gray-700 text-4xl mx-auto" />
                                    <div className="mt-2 font-medium">
                                        Drag & Drop or <span className="text-blue-600 font-medium">Choose Multiple files</span> to Upload
                                    </div>
                                    <p className="text-gray-400 mt-1">jpg, jpeg, png</p>
                                </div>
                            </div>

                            {/* Preview Selected Pictures */}
                            <div className="flex flex-wrap gap-4 p-4">
                                {[...existingPictures, ...imageURLs].map((pic, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={pic}
                                            alt={`Picture ${index}`}
                                            className="w-24 h-24 object-cover"
                                        />
                                        {index >= existingPictures.length && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveNewPicture(index - existingPictures.length)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            >
                                                X
                                            </button>
                                        )}
                                        {index < existingPictures.length && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemovePicture(pic)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            >
                                                X
                                            </button>
                                        )}
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
                                </select>
                            </div>

                            {/* Price */}
                            <div className="form-control w-full my-72 h-auto px-3">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Price*</span>
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
                                    defaultValue={files.join('\n')}
                                    {...register('files')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Files"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="">
                        <button
                            type="submit"
                            className="btn mt-6 hover:bg-[#7666E3] bg-[#9A8EE8] text-white"
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

export default UpdateTemplate;
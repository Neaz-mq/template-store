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
    const [selectedPictures, setSelectedPictures] = useState(picture || []);
    const [isLoading, setIsLoading] = useState(false);
    const [newImage, setNewImage] = useState(null); // State for the new image
    const [newPictures, setNewPictures] = useState([]); // State for new pictures
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    const onSubmit = async (data) => {
        setIsLoading(true);
        let imageUrl = image;
        let updatedPictures = [...selectedPictures, ...newPictures];

        // Handle main image upload
        if (newImage) {
            const imageFile = { image: newImage };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

        // Handle additional picture uploads
        if (data.newPictures && data.newPictures.length > 0) {
            for (let i = 0; i < data.newPictures.length; i++) {
                const pictureFile = { image: data.newPictures[i] };
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

        // Ensure fields are arrays
        const specificationsArray = data.specifications.split('\n').filter(spec => spec.trim() !== '');
        const productArray = data.product.split('\n').filter(prod => prod.trim() !== '');
        const filesArray = Array.isArray(selectedFiles) ? selectedFiles : selectedFiles.split(',');

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

    const handleRemovePicture = (pictureUrl) => {
        setSelectedPictures(selectedPictures.filter(p => p !== pictureUrl));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                // Display the new image in the preview
                const previewImage = event.target.result;
                document.getElementById('mainImagePreview').src = previewImage;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNewPicturesChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setNewPictures([...newPictures, ...files.map(file => URL.createObjectURL(file))]);
        }
    };

    return (

        <div className="container mx-auto px-4">

            <h2 className="text-3xl text-center font-bold mb-10">Update Premium Templates</h2>

            <div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Template Type */}
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

                    {/* Specifications */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Specifications</span>
                        </label>
                        <textarea
                            defaultValue={specifications.join('\n')}
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
                            defaultValue={product.join('\n')}
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

                  {/* Main Image Upload */}
                  <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Main Image*</span>
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input file-input-bordered w-full"
                        />
                        <img
                            id="mainImagePreview"
                            src={newImage ? URL.createObjectURL(newImage) : image}
                            alt="Main Preview"
                            className="mt-4 w-36  h-auto"
                        />
                    </div>


                    {/* Pictures */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Additional Pictures</span>
                        </label>
                        
                        <div className="flex flex-col lg:flex-row items-center">
                            {selectedPictures.map((pictureUrl, index) => (
                                <div key={index} className="mr-4 mb-4 lg:mb-0 relative">
                                    <img src={pictureUrl} alt="Template Picture" className="max-w-xs max-h-48" />
                                    <button
                                        type="button"
                                        onClick={() => handleRemovePicture(pictureUrl)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                    >
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            ))}
                            <input
                                {...register('newPictures')}
                                type="file"
                                multiple
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


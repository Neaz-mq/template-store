import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { RxUpload } from "react-icons/rx";
import { useDropzone } from "react-dropzone";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFreeTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [mainImage, setMainImage] = useState(null);
    const [picture, setPicture] = useState([]);

    const onDropMain = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setMainImage(acceptedFiles[0]);
        }
    };
    const onDropPictures = (acceptedFiles) => {
        setPicture((prevPictures) => [...prevPictures, ...acceptedFiles]);
    };

    const { getRootProps: getRootPropsMain, getInputProps: getInputPropsMain } = useDropzone({
        onDrop: onDropMain,
        accept: 'image/*',
        multiple: false // Allow only one file for the main image
    });

    const { getRootProps: getRootPropsPics, getInputProps: getInputPropsPics } = useDropzone({
        onDrop: onDropPictures,
        accept: 'image/*',
        multiple: true // Allow multiple files for additional images
    });

    const onSubmit = async (data) => {
        console.log(data);

        // Upload main image
        const imageFile = mainImage ? { image: mainImage } : null;
        let mainImageUrl = '';
        if (imageFile) {
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                mainImageUrl = res.data.data.display_url;
            }
        }

        // Upload additional images
        const uploadedPicture = await Promise.all(
            picture.map(async (picture) => {
                const formData = new FormData();
                formData.append('image', picture);
                const pictureRes = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                return pictureRes.data.data.display_url;
            })
        );

        // Convert fields to arrays
        const specificationsArray = data.specifications.split('\n').map(item => item.trim()).filter(item => item);
        const productArray = data.product.split('\n').map(item => item.trim()).filter(item => item);
        const filesArray = data.files.split('\n').map(item => item.trim()).filter(item => item);


        // Send the template data to the server with image URLs
        const templateItem = {
            type: data.type,
            category: data.category,
            price: data.price,
            image: mainImageUrl,
            description: data.description,
            specifications: specificationsArray,
            product: productArray,
            files: filesArray,
            picture: uploadedPicture
        };

        const templateRes = await axiosSecure.post('/free', templateItem);
        console.log(templateRes.data);
        if (templateRes.data.insertedId) {
            // Show success popup
            reset();
            setMainImage(null); // Clear the selected main image
            setPicture([]); // Clear the selected pictures
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.type} has been added as a template.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const removePicture = (index) => {
        const newPictures = [...picture];
        newPictures.splice(index, 1);
        setPicture(newPictures);
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

                    {/* Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2 w-full h-auto">
                        {/* File Upload Section for Main Image */}
                        <div className="bg-white w-full my-5 pb-10  rounded-lg mr-2 h-auto ">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Upload Your Files</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-6">
                                <div {...getRootPropsMain({ className: 'dropzone border-gray-300 p-16 rounded-lg text-center cursor-pointer' })}>
                                    <input
                                        {...getInputPropsMain()}
                                        type="file"
                                        className="hidden"
                                    />
                                    <RxUpload className="text-gray-700 text-4xl mx-auto" />
                                    <div className="mt-2 font-medium">
                                        Drag & Drop or <span className="text-blue-600 font-medium">Choose file</span> to Upload
                                    </div>
                                    <p className="text-gray-400 mt-1">jpg, jpeg, png</p>
                                </div>
                            </div>
                            {mainImage && (
                                <div className="relative mt-4 flex items-center justify-center">
                                    <img
                                        src={URL.createObjectURL(mainImage)}
                                        alt="Selected"
                                        className="w-80  object-cover"
                                    />
                                </div>
                            )}

                            {/* Additional Images */}
                            <div className="form-control rounded-md mx-3 my-3 bg-[#F3F4F6] mt-16">
                                <div {...getRootPropsPics({ className: 'dropzone border-gray-300 p-16 rounded-lg text-center cursor-pointer' })}>
                                    <input
                                        {...getInputPropsPics()}
                                        type="file"
                                        className="hidden"
                                    />
                                    <RxUpload className="text-gray-700 text-4xl mx-auto" />
                                    <div className="mt-2 font-medium">
                                        Drag & Drop or <span className="text-blue-600 font-medium">Choose Multiple files</span> to Upload
                                    </div>
                                    <p className="text-gray-400 mt-1">jpg, jpeg, png</p>
                                </div>
                            </div>

                            {/* Preview Selected Images */}
                            <div className="flex flex-wrap gap-4">
                                {picture.map((pic, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={URL.createObjectURL(pic)}
                                            alt="Selected"
                                            className="w-24 h-24 object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removePicture(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className=" bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
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
                                </select>

                                {/* Price */}
                                <div className="form-control w-full my-60  h-auto">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Price*</span>
                                    </label>
                                    <input
                                type="text"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full"
                            />
                                </div>
                            </div>



                        </div>


                        <div className=" bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">

                            {/* Descriptions */}
                            <div className="form-control w-full my-6 h-auto px-6 ">
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
                            <div className="form-control w-full my-6 h-auto px-6 ">
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

                            {/* Files Included */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Files Included (one per line)</span>
                                </label>
                                <textarea
                                    {...register('files')}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Files"
                                ></textarea>
                            </div>

                        </div>




                    </div>




                    <button className="btn  mt-6 hover:bg-[#7666E3] px-20  bg-[#9A8EE8] text-white">
                        Publish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFreeTemplates;

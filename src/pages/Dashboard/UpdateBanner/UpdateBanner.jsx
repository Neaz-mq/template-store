import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';

const UpdateBanner = () => {
    const {
        description,
        details,
        text,
        background,
        image,
        sub,
        _id
    } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(image);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        const offerItem = {
            description: data.description,
            details: data.details,
            text: data.text,
            sub: data.sub,
            background: data.background,
            image: imageUrl,  // Use the main image URL    
        };

        const offerRes = await axiosSecure.patch(`/offer/${_id}`, offerItem);
        if (offerRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Banner is updated.",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "middle",
                icon: "error",
                title: "Failed to update image",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div>
            <div className='mt-5'>
                <h2 className="-ml-3 lg:text-xl text-lg font-medium text-[#2F1C6A] mt-10 md:mt-0">Good day! Prographr</h2>
                <p className="text-gray-400 font-medium md:text-base text-sm -ml-3 mt-2">Wish you have less work today!</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Main Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2 w-full h-auto">
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description</span>
                                </label>
                                <textarea
                                    defaultValue={description}
                                    {...register('description')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Sub Description</span>
                                </label>
                                <textarea
                                    defaultValue={details}
                                    {...register('details')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color</span>
                                </label>
                                <input
                                    defaultValue={text}
                                    {...register('text')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>

                            {/* Sub Description Color */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Description Color</span>
                                </label>
                                <input
                                    defaultValue={sub}
                                    {...register('sub')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color</span>
                                </label>
                                <input
                                    defaultValue={background}
                                    {...register('background')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>

                        {/* File Upload Section for Main Image */}
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Update Banner Image</h2>
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

export default UpdateBanner;
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AddDeal = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [mainImageUrl, setMainImageUrl] = useState("");
    const [subImageUrl, setSubImageUrl] = useState("");

    const onSubmit = async (data) => {
        // Prepare the offer item
        const dealItem = {
            description: data.description,
            paragraph: data.paragraph,
            details: data.details,
            summary: data.summary,  
            text: data.text,
            sub: data.sub,
            color: data.color,
            variant: data.variant,
            background: data.background,
            back: data.back,
            image: mainImageUrl,
            photo: subImageUrl
           
        };

        try {
            const offerRes = await axiosSecure.post('/deal', dealItem);
            if (offerRes.data.insertedId) {
                // Show success popup
                reset();
                setMainImageUrl(""); // Clear the main image URL
                setSubImageUrl("");
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Deal has been added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error adding banner:", error);
            Swal.fire({
                position: "middle",
                icon: "error",
                title: "Failed to add banner.",
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -ml-2 w-full h-auto">
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description</span>
                                </label>
                                <textarea
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
                                    {...register('text')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                            {/* sub Color */}
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Description Color</span>
                                </label>
                                <input
                                    {...register('sub')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg -ml-1">Banner Image 1</h2>
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
                                            className="w-64 h-64  object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                        <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 2</span>
                                </label>
                                <textarea
                                    {...register('paragraph')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Sub Description 2</span>
                                </label>
                                <textarea
                                    {...register('summary')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                               {/* Text Color */}
                               <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 2</span>
                                </label>
                                <input
                                    {...register('color')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>

                             {/* sub Color */}
                             <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Description Color 2</span>
                                </label>
                                <input
                                    {...register('variant')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg -ml-1">Banner Image 2</h2>
                            </div>
                            <div className="form-control rounded-md mx-3 my-3">
                                <input
                                    type="url"
                                    placeholder="Enter image URL"
                                    value={subImageUrl}
                                    onChange={(e) => setSubImageUrl(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                                {subImageUrl && (
                                    <div className="mt-4 flex justify-center">
                                        <img
                                            src={subImageUrl}
                                            alt="Sub Preview"
                                            className="w-64 h-64  object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>
                            
                        </div>
                     
                        <div className="bg-white w-full my-5 py-3 rounded-lg mr-2 h-auto">
                           

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color 1</span>
                                </label>
                                <input
                                    {...register('background')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color 2</span>
                                </label>
                                <input
                                    {...register('back')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="btn mt-6 hover:bg-[#3d5bf0] px-20 bg-[#4864EC] text-white -ml-3">
                        Publish
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddDeal;

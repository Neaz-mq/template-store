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
    const [subPhotoUrl, setSubPhotoUrl] = useState("");
    const [subPictureUrl, setSubPictureUrl] = useState("");

    const onSubmit = async (data) => {
        const dealItem = {
            description: data.description,
            paragraph: data.paragraph,
            explanation: data.explanation,
            representation: data.representation,
            details: data.details,
            summary: data.summary,
            feature: data.feature,
            describe: data.describe,
            text: data.text,
            color: data.color,
            shade: data.shade,
            tone: data.tone,
            sub: data.sub,
            variant: data.variant,
            paint: data.paint,
            blush: data.blush,
            background: data.background,
            back: data.back,
            framework: data.framework,
            frame: data.frame,
            image: mainImageUrl,
            photo: subImageUrl,
            picture: subPhotoUrl,
            figure: subPictureUrl
        };

        try {
            const offerRes = await axiosSecure.post('/deal', dealItem);
            if (offerRes.data.insertedId) {
                // Show success popup
                reset();
                setMainImageUrl(""); // Clear the main image URL
                setSubImageUrl("");
                setSubPhotoUrl("");
                setSubPictureUrl("");
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 -ml-2 w-full h-auto">
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
                            <div className="flex">
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color</span>
                                    </label>
                                    <input
                                        {...register('text')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                                {/* sub Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color</span>
                                    </label>
                                    <input
                                        {...register('sub')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg ml-3">Banner Image</h2>
                            </div>
                            <div className="form-control rounded-md mx-7 my-3">
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
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-3">Background color</span>
                                </label>
                                <input
                                    {...register('background')}
                                    type="color"
                                    className="w-full h-10 mx-2"
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
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
                            <div className="flex">
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 2</span>
                                    </label>
                                    <input
                                        {...register('color')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>

                                {/* sub Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub  Color 2</span>
                                    </label>
                                    <input
                                        {...register('variant')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg ml-3">Banner Image 2</h2>
                            </div>
                            <div className="form-control rounded-md mx-7 my-3">
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
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-3">Background color 2</span>
                                </label>
                                <input
                                    {...register('back')}
                                    type="color"
                                    className="w-full h-10 mx-2"
                                />
                            </div>


                        </div>
                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 3</span>
                                </label>
                                <textarea
                                    {...register('explanation')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Sub Description 3</span>
                                </label>
                                <textarea
                                    {...register('feature')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className="flex">
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 3</span>
                                    </label>
                                    <input
                                        {...register('shade')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                                {/* sub Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color 3</span>
                                    </label>
                                    <input
                                        {...register('paint')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg ml-3">Banner Image 3</h2>
                            </div>
                            <div className="form-control rounded-md mx-7 my-3">
                                <input
                                    type="url"
                                    placeholder="Enter image URL"
                                    value={subPhotoUrl}
                                    onChange={(e) => setSubPhotoUrl(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                                {subPhotoUrl && (
                                    <div className="mt-4 flex justify-center">
                                        <img
                                            src={subPhotoUrl}
                                            alt="Main Preview"
                                            className="w-64 h-64  object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-3">Background color 3</span>
                                </label>
                                <input
                                    {...register('framework')}
                                    type="color"
                                    className="w-full h-10 mx-2"
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 4</span>
                                </label>
                                <textarea
                                    {...register('representation')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Sub Description 4</span>
                                </label>
                                <textarea
                                    {...register('describe')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className="flex">
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 4</span>
                                    </label>
                                    <input
                                        {...register('tone')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                                {/* sub Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color 4</span>
                                    </label>
                                    <input
                                        {...register('blush')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg ml-3">Banner Image 4</h2>
                            </div>
                            <div className="form-control rounded-md mx-7 my-3">
                                <input
                                    type="url"
                                    placeholder="Enter image URL"
                                    value={subPictureUrl}
                                    onChange={(e) => setSubPictureUrl(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                                {subPictureUrl && (
                                    <div className="mt-4 flex justify-center">
                                        <img
                                            src={subPictureUrl}
                                            alt="Main Preview"
                                            className="w-64 h-64  object-cover rounded"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-2 font-medium text-lg -ml-3">Background color 4</span>
                                </label>
                                <input
                                    {...register('frame')}
                                    type="color"
                                    className="w-full h-10 mx-2"
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

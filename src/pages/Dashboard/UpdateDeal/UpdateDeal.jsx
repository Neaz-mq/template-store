import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';

const UpdateDeal = () => {
    const {
        description,
        paragraph,
        explanation,
        representation,
        details,
        summary,
        feature,
        describe,
        text,
        sub,
        shade,
        tone,
        color,
        variant,
        paint,
        blush,
        background,
        back,
        framework,
        frame,
        image,
        photo,
        picture,
        figure,
        _id
    } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(image);
    const [photoUrl, setPhotoUrl] = useState(photo);
    const [pictureUrl, setPictureUrl] = useState(picture);
    const [figureUrl, setFigureUrl] = useState(figure);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [isLoading, setIsLoading] = useState(false);

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
            image: imageUrl,
            photo: photoUrl,
            picture: pictureUrl,
            figure: figureUrl
        };

        const offerRes = await axiosSecure.patch(`/deal/${_id}`, dealItem);
        if (offerRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Deal is updated.",
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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 -ml-2 w-full h-auto">

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
                            <div className='flex'>
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color</span>
                                    </label>
                                    <input
                                        defaultValue={text}
                                        {...register('text')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>

                                {/* Sub Description Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color</span>
                                    </label>
                                    <input
                                        defaultValue={sub}
                                        {...register('sub')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="p-4 -mt-2 font-medium text-lg ml-3">Banner Image </h2>
                            </div>
                            <div className="form-control rounded-md mx-7 my-3">
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
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 2</span>
                                </label>
                                <textarea
                                    defaultValue={paragraph}
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
                                    defaultValue={summary}
                                    {...register('summary')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className='flex'>
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 2</span>
                                    </label>
                                    <input
                                        defaultValue={color}
                                        {...register('color')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>

                                {/* sub Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color 2</span>
                                    </label>
                                    <input
                                        defaultValue={variant}
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
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder="Enter main image URL"
                                    className="input input-bordered w-full"
                                />
                                {photoUrl && (
                                    <div className="relative mt-4 flex items-center justify-center">
                                        <img
                                            src={photoUrl}
                                            alt="Main"
                                            className="w-80 object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color 2</span>
                                </label>
                                <input
                                    defaultValue={back}
                                    {...register('back')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 3</span>
                                </label>
                                <textarea
                                    defaultValue={explanation}
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
                                    defaultValue={feature}
                                    {...register('feature')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className='flex'>
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 3</span>
                                    </label>
                                    <input
                                        defaultValue={shade}
                                        {...register('shade')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>

                                {/* Sub Description Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color 3</span>
                                    </label>
                                    <input
                                        defaultValue={paint}
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
                                    value={pictureUrl}
                                    onChange={(e) => setPictureUrl(e.target.value)}
                                    placeholder="Enter main image URL"
                                    className="input input-bordered w-full"
                                />
                                {pictureUrl && (
                                    <div className="relative mt-4 flex items-center justify-center">
                                        <img
                                            src={pictureUrl}
                                            alt="Main"
                                            className="w-80 object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color 3</span>
                                </label>
                                <input
                                    defaultValue={framework}
                                    {...register('framework')}
                                    type="color"
                                    className="w-full h-10"
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full my-5 pb-10 rounded-lg mr-2 h-auto">
                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-6 font-medium text-lg -ml-5">Description 4</span>
                                </label>
                                <textarea
                                    defaultValue={representation}
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
                                    defaultValue={describe}
                                    {...register('describe')}
                                    className="textarea textarea-bordered w-full h-auto"
                                    placeholder="Description"
                                ></textarea>
                            </div>

                            {/* Text Color */}
                            <div className='flex'>
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Text Color 4</span>
                                    </label>
                                    <input
                                        defaultValue={tone}
                                        {...register('tone')}
                                        type="color"
                                        className="w-1/2 h-10"
                                    />
                                </div>

                                {/* Sub Description Color */}
                                <div className="form-control w-full my-6 h-auto px-6">
                                    <label className="label">
                                        <span className="label-text p-4 -mt-2 font-medium text-lg -ml-5">Sub Color 4</span>
                                    </label>
                                    <input
                                        defaultValue={blush}
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
                                    value={figureUrl}
                                    onChange={(e) => setFigureUrl(e.target.value)}
                                    placeholder="Enter main image URL"
                                    className="input input-bordered w-full"
                                />
                                {figureUrl && (
                                    <div className="relative mt-4 flex items-center justify-center">
                                        <img
                                            src={figureUrl}
                                            alt="Main"
                                            className="w-80 object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="form-control w-full my-6 h-auto px-6">
                                <label className="label">
                                    <span className="label-text p-4 -mt-9 font-medium text-lg -ml-5">Background color 4</span>
                                </label>
                                <input
                                    defaultValue={frame}
                                    {...register('frame')}
                                    type="color"
                                    className="w-full h-10"
                                />
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

export default UpdateDeal;
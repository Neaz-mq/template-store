import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { HiTemplate } from "react-icons/hi";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const templateItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                details: data.details,
                image: res.data.data.display_url
            };
            const templateRes = await axiosSecure.post('/template', templateItem);
            console.log(templateRes.data);
            if (templateRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the template`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl lg:text-3xl text-center font-bold mb-4">Add Premium Template</h2>
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control hidden lg:block  w-full">
                        <label className="label">
                            <span className="label-text">Template Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Template Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full text-base md:text-lg" />
                    </div>

                    <div className="form-control  lg:hidden w-full">
                        <label className="label">
                            <span className="label-text">Template Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full text-base md:text-lg" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="form-control hidden lg:block w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full text-sm sm:text-base placeholder-sm">
                                <option disabled value="default">Select a category</option>
                                <option value="agency">Agency</option>
                                <option value="ecommerce">Ecommerce</option>
                                <option value="business">Business</option>
                                <option value="portfolio">Portfolio</option>
                            </select>
                        </div>

                        <div className="form-control  lg:hidden w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full text-sm sm:text-base placeholder-sm">
                                <option disabled value="default">Select a category</option>
                                <option value="agency">Agency</option>
                                <option value="ecommerce">Ecommerce</option>
                                <option value="business">Business</option>
                                <option value="portfolio">Portfolio</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full text-sm sm:text-base placeholder-sm" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Template Details</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-bordered h-24 w-full text-sm sm:text-base placeholder-sm" placeholder="Details"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn w-full flex items-center justify-center">
                        Add Template <HiTemplate className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTemplates;

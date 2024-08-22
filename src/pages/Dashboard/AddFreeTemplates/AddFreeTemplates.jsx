import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { HiTemplate } from "react-icons/hi";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFreeTemplates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [mainImage, setMainImage] = useState(null);
    const [picture, setPicture] = useState([]);

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

        const handleMainImageChange = (e) => {
            const file = e.target.files[0];
            setMainImage(file);
        };

    const handlePictureChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setPicture((prevPictures) => [...prevPictures, ...selectedFiles]);
    };

   

    const removePicture = (index) => {
        const newPictures = [...picture];
        newPictures.splice(index, 1);
        setPicture(newPictures);
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Upload Free Template</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Template Type*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Template Type"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>



                    <div className="flex gap-6">
                        {/* Category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
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

                        {/* Price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>


                    {/* Descriptions */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            {...register('description')}
                            className="textarea textarea-bordered h-24"
                            placeholder="Description"
                        ></textarea>
                    </div>

                    {/* Specifications */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Specifications (one per line)</span>
                        </label>
                        <textarea
                            {...register('specifications')}
                            className="textarea textarea-bordered h-24"
                            placeholder="Specifications"
                        ></textarea>
                    </div>

                    {/* Product Specifications */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Specifications (one per line)</span>
                        </label>
                        <textarea
                            {...register('product')}
                            className="textarea textarea-bordered h-24"
                            placeholder="Product Specifications"
                        ></textarea>
                    </div>

                    {/* Files Included */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Files Included (one per line)</span>
                        </label>
                        <textarea
                            {...register('files')}
                            className="textarea textarea-bordered h-24"
                            placeholder="Files"
                        ></textarea>
                    </div>

                    {/* Main Image */}
                    <div className="form-control w-full my-6">
                        <input
                            type="file"
                            accept="image/*"
                            className="file-input w-full max-w-xs"
                            onChange={handleMainImageChange}
                        />
                        {mainImage && (
                            <div className="relative mt-4">
                                <img
                                    src={URL.createObjectURL(mainImage)}
                                    alt="Selected"
                                    className="w-24 h-24 object-cover"
                                />
                               
                            </div>
                        )}
                    </div>

                  {/* Additional Images */}
                  <div className="form-control w-full my-6">
                        <input
                            multiple
                            type="file"
                            accept="image/*"
                            className="file-input w-full max-w-xs"
                            onChange={handlePictureChange}
                        />
                    </div>

                    {/* Preview Selected Images */}
                    <div className="flex flex-wrap gap-4">
                        {picture.map((picture, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(picture)}
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

                    <button className="btn mt-6">
                        Add Template <HiTemplate className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFreeTemplates;

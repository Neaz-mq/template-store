import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateFreeTemplate = () => {

    const {name, category, details, image, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
   
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const templateItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                details: data.details,
                image: res.data.data.display_url
            }
            // 
            const templateFreeRes = await axiosSecure.patch(`/free/${_id}`, templateItem);
            console.log(templateFreeRes.data)
            if(templateFreeRes.data.modifiedCount > 0){
                // show success popup
                //reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the template`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
              <h2 className="text-3xl text-center font-bold mb-10">Update Free Templates</h2>

              <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Template Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Template Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="agency">Agency</option>
                                <option value="ecommerce">Ecommerce</option>
                                <option value="business">Business</option>
                                <option value="portfolio">Portfolio</option>
                                
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="text"  
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Template Details</span>
                        </label>
                        <textarea defaultValue={details} {...register('details')} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })} type="file"  className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Free Template
                    </button>
                </form>
           </div>
            
        </div>
    );
};

export default UpdateFreeTemplate;
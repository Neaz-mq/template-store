import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AddBanner = () => {
    const { handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [mainImageUrl, setMainImageUrl] = useState("");

    const onSubmit = async () => {

        // Prepare the offer item
        const offerItem = {
            image: mainImageUrl,
        };

        try {
            const offerRes = await axiosSecure.post('/offer', offerItem);
            if (offerRes.data.insertedId) {
                // Show success popup
                reset();
                setMainImageUrl(""); // Clear the main image URL
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Image has been added as a banner.",
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

                    <div className="w-full h-auto">
                        {/* Main Image URL Section */}
                        <div className="bg-white w-full my-5 pb-10 rounded-lg -ml-3  h-auto">
                            <div>
                                <h2 className="p-4 font-medium text-lg mr-2 -ml-1">Upload Banner Image</h2>
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
                                            className="w-full h-[34rem] object-cover rounded"
                                        />
                                    </div>
                                )}
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

export default AddBanner;

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useBanner from "../../../hooks/useBanner";

const ManageBanner = () => {
    const [offer, , refetch] = useBanner(); // Fetch offer data and refetch function
    const axiosSecure = useAxiosSecure();

    // Handle delete action
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/offer/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch(); // Refetch the updated data
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Image has been deleted",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        });
    };

    return (
        <div className="px-2 md:px-6">
            <h2 className="text-xl md:text-3xl text-center font-bold mb-4 md:mb-10">Manage Offers</h2>
            <div>
                {/* Table for larger screens */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Text</th>
                                <th>Background</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offer.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image || "https://via.placeholder.com/150"}
                                                        alt="Banner"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.text}</td>
                                    <td>{item.background}</td>
                                    <td>
                                        <Link to={`/dashboard/updateBanner/${item._id}`}>
                                            <button className="btn btn-ghost hover:bg-[#4864EC] btn-sm bg-[#4864EC]">
                                                <FaEdit className="text-white" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-sm -ml-2"
                                        >
                                            <FaTrashAlt className="text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cards for smaller screens */}
                <div className="block md:hidden">
                    {offer.map((item) => (
                        <div key={item._id} className="card bg-base-100 shadow-xl mb-3 p-2 mr-2">
                            <figure className="px-2 pt-2">
                                <img
                                    src={item.image || "https://via.placeholder.com/150"}
                                    alt="Banner"
                                    className="w-full h-20 object-cover rounded-md"
                                />
                            </figure>
                            <div className="card-body p-2">
                                <div className="card-actions justify-end mt-1">
                                    <Link to={`/dashboard/updateBanner/${item._id}`}>
                                        <button className="btn btn-primary btn-xs">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-danger btn-xs"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageBanner;

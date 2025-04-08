import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import useExclusiveTemplate from "../../../hooks/useExclusiveTemplate";

const ManageExclusiveTemplates = () => {

    const [exclusive, , refetch] = useExclusiveTemplate();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');
    

    // Pagination
    const TEMPLATES_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastTemplate = currentPage * TEMPLATES_PER_PAGE;
    const indexOfFirstTemplate = indexOfLastTemplate - TEMPLATES_PER_PAGE;
    const filteredTemplates = exclusive.filter(item => item.type.toLowerCase().includes(search.toLowerCase()));
    const currentItems = filteredTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleDeleteItem = (temp) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/exclusive/${temp._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${temp.type} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (

        <div className="px-2 md:px-6">
            <h2 className="text-xl md:text-3xl text-center font-bold mb-4 md:mb-10">Manage Exclusive Templates</h2>

            <div>
                <div className="text-center mb-4 md:mb-10">
                    <form onSubmit={handleSearch} className="flex flex-col items-center md:flex-row md:justify-center">
                        <input type="text" name="search" id="" className="input input-bordered text-xs md:text-base mb-2 md:mb-0 md:mr-1" placeholder="Template Search" />
                        <button className="btn text-xs md:text-base">Search</button>
                    </form>
                </div>

                {/* Table for larger screens */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Template Type</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((temp, index) => (
                                <tr key={temp._id}>
                                    <td>{indexOfFirstTemplate + index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={temp.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>                           
                                    <td>{temp.type}</td>
                                    <td>{temp.category}</td>
                                    <td>${temp.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateExclusiveTemplate/${temp._id}`}>
                                            <button className="btn btn-ghost btn-sm hover:bg-[#4864EC] bg-[#4864EC]">
                                                <FaEdit className="text-white" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(temp)}
                                            className="btn btn-ghost btn-sm -ml-2">
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
                    {currentItems.map((temp, index) => (
                        <div key={temp._id} className="card bg-base-100 shadow-xl mb-3 p-2 mr-2">
                            <figure className="px-2 pt-2">
                                <img src={temp.image} alt="Template Image" className="w-full h-20 object-cover rounded-md" />
                            </figure>
                            <div className="card-body p-2">
                                <h2 className="card-title text-xs">{temp.type}</h2>
                                <p className="text-xs">Price: ${temp.price}</p>
                                <div className="card-actions justify-end mt-1">
                                    <Link to={`/dashboard/updateTemplate/${temp._id}`}>
                                        <button className="btn btn-primary btn-xs">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDeleteItem(temp)} className="btn btn-danger btn-xs">
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination mt-4 md:mt-8 flex justify-center text-xs md:text-base">
                    <button
                        onClick={prevPage}
                        className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === 1
                            ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-500 text-white'
                            }`}
                        disabled={currentPage === 1}
                    >
                        <span className="mr-1">Previous</span>
                    </button>
                    {Array.from({ length: Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE) }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === i + 1
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE)
                            ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                            : 'bg-blue-500 text-white'
                            }`}
                        disabled={currentPage === Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE)}
                    >
                        <span className="mr-1">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageExclusiveTemplates;
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import useTemplate from "../../../hooks/useTemplate";

const ManageTemplates = () => {
    const [template, , refetch] = useTemplate();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');

    // Sort templates by createdAt descending
    const sortedTemplates = [...template].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Pagination
    const TEMPLATES_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastTemplate = currentPage * TEMPLATES_PER_PAGE;
    const indexOfFirstTemplate = indexOfLastTemplate - TEMPLATES_PER_PAGE;

    // Filter and paginate templates
    const filteredTemplates = sortedTemplates.filter(item =>
        item.type.toLowerCase().includes(search.toLowerCase())
    );
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
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/template/${temp._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${temp.type} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    };

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
            <h2 className="text-xl md:text-3xl text-center font-bold mb-4 md:mb-10">
                Manage Premium Templates
            </h2>

            <div>
                <div className="text-center mb-4 md:mb-10">
                    <form onSubmit={handleSearch} className="flex flex-col items-center md:flex-row md:justify-center">
                        <input
                            type="text"
                            name="search"
                            className="input input-bordered text-xs md:text-base mb-2 md:mb-0 md:mr-1"
                            placeholder="Template Search"
                        />
                        <button className="btn text-xs md:text-base">Search</button>
                    </form>
                </div>

                {/* Table for larger screens */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
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
                                                    <img src={temp.image} alt="Template" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{temp.type}</td>
                                    <td>{temp.category}</td>
                                    <td>${temp.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateTemplate/${temp._id}`}>
                                            <button className="btn btn-ghost hover:bg-[#4864EC] btn-sm bg-[#4864EC]">
                                                <FaEdit className="text-white" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(temp)}
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

                {/* Pagination */}
                <div className="pagination mt-4 md:mt-8 flex justify-center text-xs md:text-base">
                    <button
                        onClick={prevPage}
                        className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === 1
                            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                            : "bg-blue-500 text-white"
                            }`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE) }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === i + 1
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        className={`px-2 py-1 md:px-4 md:py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${currentPage === Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE)
                            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                            : "bg-blue-500 text-white"
                            }`}
                        disabled={currentPage === Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageTemplates;

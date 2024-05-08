import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFreeTemplate from "../../../hooks/useFreeTemplate";



const ManageFreeTemplates = () => {
    const [free, , refetch] = useFreeTemplate();
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');

    //pagination
    const TEMPLATES_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastTemplate = currentPage * TEMPLATES_PER_PAGE;
    const indexOfFirstTemplate = indexOfLastTemplate - TEMPLATES_PER_PAGE;
    const filteredTemplates = free.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    const currentItems = filteredTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    //end



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
                const res = await axiosSecure.delete(`/free/${temp._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${temp.name} has been deleted`,
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
        // console.log(searchText);
        setSearch(searchText);
    }
    return (
        <div>
           
           <h2 className="text-3xl text-center font-bold mb-10">Manage Free Templates</h2>
         
            <div>
                <div className="text-center mb-10">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <input type="text" name="search" id="" className="input input-bordered join-item" placeholder="Item Search" />
                            <button className="btn join-item rounded-r-full" >Search</button>
                        </div>
                    </form>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Template Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                {currentItems.map((temp, index) => (
                    <tr key={temp._id}>
                        <td>{index + 1}</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={temp.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{temp.name}</td>
                        <td>{temp.price}</td>
                        <td>
                            <Link to={`/dashboard/updateFreeTemplate/${temp._id}`}>
                                <button className="btn btn-ghost btn-lg bg-orange-500">
                                    <FaEdit className="text-white"></FaEdit>
                                </button>
                            </Link>
                        </td>
                        <td>
                            <button
                                onClick={() => handleDeleteItem(temp)}
                                className="btn btn-ghost btn-lg -ml-4">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>



                    </table>
                    <div className="pagination mt-8 flex justify-center">
    {Array.from({ length: Math.ceil(filteredTemplates.length / TEMPLATES_PER_PAGE) }, (_, i) => (
        <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 rounded-full focus:outline-none focus:shadow-outline ${
                currentPage === i + 1
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
            }`}
        >
            {i + 1}
        </button>
    ))}
</div>

                </div>
            </div>
        </div>
    );
};

export default ManageFreeTemplates;